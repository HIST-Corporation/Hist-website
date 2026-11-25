import React, { useState, useEffect, useRef } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Search as SearchIcon, Layers, Building2, FileText, Globe, Home, CornerDownLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { blogArticles } from "@/data/blog";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  type: "service" | "industry" | "blog" | "page" | "company";
  href: string;
}

const Search = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setQuery("");
  };

  const goTo = (href: string) => {
    handleOpenChange(false);
    navigate(href);
    window.scrollTo({ top: 0 });
  };

  // Create search data from existing site content
  const searchItems: SearchItem[] = [
    // Company-wide entry
    { 
      id: "company-hist", 
      title: "HIST - House of Information Science and Technology", 
      description: "Leading IT services, UI/UX design, and technology solutions company", 
      type: "company", 
      href: "/" 
    },
    // Services
    ...services.map(service => ({
      id: `service-${service.id}`,
      title: service.title,
      description: service.shortDescription,
      type: "service" as const,
      href: `/services/${service.id}`
    })),
    // Industries
    ...industries.map(industry => ({
      id: `industry-${industry.id}`,
      title: industry.title,
      description: industry.shortDescription,
      type: "industry" as const,
      href: `/industries/${industry.id}`
    })),
    // Blog posts
    ...blogArticles.map(post => ({
      id: `blog-${post.id}`,
      title: post.title,
      description: post.excerpt,
      type: "blog" as const,
      href: `/blog/${post.id}`
    })),
    // Static pages
    { id: "page-about", title: "About", description: "Learn more about HIST", type: "page", href: "/about" },
    { id: "page-services", title: "Services", description: "Explore our services", type: "page", href: "/services" },
    { id: "page-industries", title: "Industries", description: "See our industry expertise", type: "page", href: "/industries" },
    { id: "page-blog", title: "Blog", description: "Read our latest articles", type: "page", href: "/blog" },
    { id: "page-careers", title: "Careers", description: "Join our team", type: "page", href: "/careers" },
    { id: "page-contact", title: "Contact", description: "Get in touch with us", type: "page", href: "/contact" },
  ];

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Open search with Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  // Filter search items based on query
  const filteredItems = searchItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  // Group items by type
  const groupedItems = {
    company: filteredItems.filter(item => item.type === "company"),
    services: filteredItems.filter(item => item.type === "service"),
    industries: filteredItems.filter(item => item.type === "industry"),
    blog: filteredItems.filter(item => item.type === "blog"),
    pages: filteredItems.filter(item => item.type === "page"),
  };

  const groups: { key: keyof typeof groupedItems; heading: string; icon: React.ElementType }[] = [
    { key: "company", heading: "Company", icon: Home },
    { key: "services", heading: "Services", icon: Layers },
    { key: "industries", heading: "Industries", icon: Building2 },
    { key: "blog", heading: "Blog", icon: FileText },
    { key: "pages", heading: "Pages", icon: Globe },
  ];

  return (
    <>
      {/* Desktop: wide, eye-catching search pill */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the site"
        className="group hidden lg:inline-flex items-center gap-3 h-10 pl-1.5 pr-2 rounded-full bg-hist-blue-50 border border-hist-blue-200 text-hist-blue-700 shadow-sm transition-all duration-200 hover:bg-white hover:border-hist-blue hover:shadow-md hover:shadow-hist-blue/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hist-blue focus-visible:ring-offset-2"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-hist-blue text-white transition-transform duration-200 group-hover:scale-110">
          <SearchIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
        <span className="text-sm font-medium pr-2 xl:pr-8">Search…</span>
        <kbd className="hidden xl:inline-flex items-center gap-0.5 rounded-md border border-hist-blue-200 bg-white px-1.5 py-0.5 text-[11px] font-semibold text-hist-blue-600">
          {isMac ? "⌘" : "Ctrl"} K
        </kbd>
      </button>

      {/* Mobile & tablet: round icon button next to the menu toggle */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the site"
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-hist-blue-50 border border-hist-blue-200 text-hist-blue transition-colors hover:bg-hist-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hist-blue"
      >
        <SearchIcon className="w-[18px] h-[18px]" strokeWidth={2.5} />
      </button>

      <CommandDialog open={open} onOpenChange={handleOpenChange}>
        <CommandInput
          placeholder="Search services, industries, articles…"
          value={query}
          onValueChange={setQuery}
          ref={inputRef}
        />
        <CommandList className="max-h-[60vh]">
          <CommandEmpty>
            <div className="py-6 text-center">
              <p className="text-sm font-medium text-gray-900">No results for “{query}”</p>
              <p className="text-xs text-muted-foreground mt-1">Try a service name like “Cloud” or “UI/UX”.</p>
            </div>
          </CommandEmpty>

          {groups.map(({ key, heading, icon: Icon }) =>
            groupedItems[key].length > 0 ? (
              <CommandGroup key={key} heading={heading}>
                {groupedItems[key].slice(0, 5).map((item) => (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.description} ${item.type}`}
                    onSelect={() => goTo(item.href)}
                    className="group cursor-pointer gap-3 rounded-lg data-[selected=true]:bg-hist-blue-50"
                  >
                    <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-hist-blue-100 text-hist-blue">
                      <Icon className="!w-4 !h-4" />
                    </span>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-medium text-gray-900 truncate">{item.title}</span>
                      <span className="text-xs text-muted-foreground truncate">{item.description}</span>
                    </div>
                    <CornerDownLeft className="!w-4 !h-4 text-hist-blue opacity-0 group-data-[selected=true]:opacity-100" />
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null
          )}
        </CommandList>
        <div className="hidden sm:flex items-center justify-between border-t px-4 py-2 text-[11px] text-muted-foreground">
          <span>↑ ↓ to navigate · Enter to open</span>
          <span>Esc to close</span>
        </div>
      </CommandDialog>
    </>
  );
};

export default Search;