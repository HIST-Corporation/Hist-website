import React, { useState, useEffect, useRef } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [showHistHint, setShowHistHint] = useState(false);

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
    let histTimeout: NodeJS.Timeout;
    
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Open search with Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        return;
      }
      
      // Check if user types "hist" or "house of information science and technology" in any input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        const currentValue = target.value + e.key;
        
        if (currentValue.toLowerCase().includes('hist') || 
            currentValue.toLowerCase().includes('house of information science and technology')) {
          // Show hint that search can be opened
          setShowHistHint(true);
          histTimeout = setTimeout(() => {
            setShowHistHint(false);
          }, 3000);
        }
      }
    };

    // Special handling when "hist" is typed in the search input
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target === inputRef.current) {
        const value = target.value;
        if ((value.toLowerCase().includes('hist') || 
             value.toLowerCase().includes('house of information science and technology')) && !open) {
          setOpen(true);
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("input", handleInput);
    
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.removeEventListener("input", handleInput);
      if (histTimeout) clearTimeout(histTimeout);
    };
  }, [open]);

  // Filter search items based on query
  const [query, setQuery] = useState("");
  const filteredItems = searchItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase()) ||
    // Add search for "house of information science and technology" in the site name
    query.toLowerCase().includes('house of information science and technology')
  );

  // Group items by type
  const groupedItems = {
    company: filteredItems.filter(item => item.type === "company"),
    services: filteredItems.filter(item => item.type === "service"),
    industries: filteredItems.filter(item => item.type === "industry"),
    blog: filteredItems.filter(item => item.type === "blog"),
    pages: filteredItems.filter(item => item.type === "page"),
  };

  return (
    <>
      <div className="relative">
        <Button
          variant="outline"
          className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 hidden lg:flex"
          onClick={() => setOpen(true)}
        >
          <SearchIcon className="mr-2 h-4 w-4" />
          <span>Search HIST...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        
        {/* Mobile search button */}
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <SearchIcon className="h-4 w-4" />
        </Button>

        {/* Hint when user types "hist" or "house of information science and technology" */}
        {showHistHint && (
          <div className="absolute top-full left-0 mt-1 w-full bg-blue-50 border border-blue-200 rounded-md p-2 text-xs text-blue-700 z-50 shadow-sm">
            Press <kbd className="px-1.5 py-0.5 bg-blue-100 rounded text-[10px] font-mono">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-blue-100 rounded text-[10px] font-mono">K</kbd> to open search
          </div>
        )}
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search HIST services, industries, blog, and pages..."
          value={query}
          onValueChange={setQuery}
          ref={inputRef}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {groupedItems.company.length > 0 && (
            <CommandGroup heading="Company">
              {groupedItems.company.slice(0, 5).map((item) => (
                <Link key={item.id} to={item.href} onClick={() => setOpen(false)}>
                  <CommandItem>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-xs">
                        {item.description}
                      </span>
                    </div>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
          
          {groupedItems.services.length > 0 && (
            <CommandGroup heading="Services">
              {groupedItems.services.slice(0, 5).map((item) => (
                <Link key={item.id} to={item.href} onClick={() => setOpen(false)}>
                  <CommandItem>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-xs">
                        {item.description}
                      </span>
                    </div>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
          
          {groupedItems.industries.length > 0 && (
            <CommandGroup heading="Industries">
              {groupedItems.industries.slice(0, 5).map((item) => (
                <Link key={item.id} to={item.href} onClick={() => setOpen(false)}>
                  <CommandItem>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-xs">
                        {item.description}
                      </span>
                    </div>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
          
          {groupedItems.blog.length > 0 && (
            <CommandGroup heading="Blog">
              {groupedItems.blog.slice(0, 5).map((item) => (
                <Link key={item.id} to={item.href} onClick={() => setOpen(false)}>
                  <CommandItem>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-xs">
                        {item.description}
                      </span>
                    </div>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
          
          {groupedItems.pages.length > 0 && (
            <CommandGroup heading="Pages">
              {groupedItems.pages.slice(0, 5).map((item) => (
                <Link key={item.id} to={item.href} onClick={() => setOpen(false)}>
                  <CommandItem>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-xs">
                        {item.description}
                      </span>
                    </div>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;