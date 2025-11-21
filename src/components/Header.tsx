import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
   Menu,
   X,
   ChevronDown,
   Code,
   Briefcase,
   Settings,
   Star,
   Grid2x2,
   Image as ImageIcon,
   Calendar,
   Heart,
} from "lucide-react";
import { services as allServices } from "@/data/services"; // Import your services data
import { useLocation } from "react-router-dom";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const location = useLocation();

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };

      const handleClickOutside = (event: MouseEvent) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setActiveDropdown(null);
         }
      };

      window.addEventListener("scroll", handleScroll);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         window.removeEventListener("scroll", handleScroll);
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const handleMouseEnter = (name: string) => {
      setActiveDropdown(name);
   };

   const toggleMobileDropdown = (name: string) => {
      setMobileDropdown(mobileDropdown === name ? null : name);
   };

   const closeAllDropdowns = () => {
      setActiveDropdown(null);
      setMobileDropdown(null);
      setIsMenuOpen(false);
   };

   // Services dropdown data based on your actual services
   const servicesCategories = [
      {
         category: "Development",
         icon: <Code size={18} className="text-hist-blue" />,
         items: [
            { name: "SaaS Development", href: "/services/saas-product-development" },
            { name: "Web & App Development", href: "/services/website-app-development" },
            { name: "Custom Software", href: "/services/custom-software" },
         ],
      },
      {
         category: "Technology",
         icon: <Settings size={18} className="text-hist-blue" />,
         items: [
            { name: "AI/ML Development", href: "/services/ai-ml-development" },
            { name: "Cloud Services", href: "/services/cloud-services" },
            { name: "IT Consulting", href: "/services/it-consulting" },
         ],
      },
      {
         category: "Design & Support",
         icon: <ImageIcon size={18} className="text-hist-blue" />,
         items: [
            { name: "UI/UX Design", href: "/services/ui-ux-design" },
            { name: "Maintenance & Support", href: "/services/maintenance-support" },
         ],
      },
      {
         category: "SEO & Marketing",
         icon: <ImageIcon size={18} className="text-hist-blue" />,
         items: [
            { name: "SEO", href: "/services/seo" },
            { name: "Digital Marketing", href: "/services/digital-marketing" },
         ],
      },
   ];

   const navigation = [
      { name: "About", href: "/about" },
      {
         name: "Services",
         href: "/services",
         mega: true,
      },
      {
         name: "Industries",
         href: "/industries",
         dropdown: [
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Finance", href: "/industries/finance" },
            { name: "Education", href: "/industries/education" },
            { name: "Retail", href: "/industries/retail" },
         ],
      },
      {
         name: "Careers",
         href: "/careers",
         // dropdown: [
         //    { name: "Open Positions", href: "/careers#positions" },
         //    { name: "Our Culture", href: "/careers#culture" },
         //    { name: "Benefits", href: "/careers#benefits" },
         // ],
      },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
   ];

   return (
      <header
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
            isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
         }`}
         ref={dropdownRef}
      >
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
               {/* Logo */}
               <a href="/" className="flex items-center space-x-2" onClick={closeAllDropdowns}>
                  <div className="w-10 h-10">
                     <img src="/hist.png" className="w-10 h-10" alt="HIST Logo" />
                  </div>
                  <div className="hidden sm:block">
                     <h1 className="text-xl font-bold text-hist-blue">HIST</h1>
                     <p className="text-xs text-gray-600 leading-none">
                        House of Information
                        <span className="block">Science & Technology</span>
                     </p>
                  </div>
                  <div className="sm:hidden">
                     <h1 className="text-xl font-bold text-hist-blue">HIST</h1>
                  </div>
               </a>

               {/* Desktop Navigation */}
               <nav className="hidden lg:flex items-center space-x-1">
                  {navigation.map((item) => (
                     <div
                        key={item.name}
                        className="relative py-4"
                        onMouseEnter={() => (item.mega || item.dropdown) && handleMouseEnter(item.name)}
                     >
                        <a
                           href={item.href}
                           className={`flex items-center px-3 py-1 font-medium text-sm ${
                              location.pathname === item.href || 
                              (item.href === "/services" && location.pathname.startsWith("/services/")) ||
                              (item.href === "/industries" && location.pathname.startsWith("/industries/")) ||
                              (item.href === "/blog" && location.pathname.startsWith("/blog/"))
                                 ? "text-hist-blue" 
                                 : "text-gray-700 hover:text-hist-blue"
                           }`}
                        >
                           {item.name}
                           {(item.mega || item.dropdown) && (
                              <ChevronDown
                                 size={16}
                                 className={`ml-1 transition-transform ${
                                    activeDropdown === item.name ? "rotate-180" : ""
                                 }`}
                              />
                           )}
                        </a>

                        {/* Services Mega Dropdown */}
                        {item.name === "Services" && activeDropdown === "Services" && (
                           <div
                              className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                              onMouseLeave={() => setActiveDropdown(null)}
                           >
                              <div className="p-6 grid grid-cols-3 gap-6">
                                 {servicesCategories.map((service, index) => (
                                    <div key={index} className={`${index < 2 ? "border-r border-gray-100 pr-6" : ""}`}>
                                       <div className="flex items-center mb-4">
                                          <div className="p-2 bg-hist-blue/10 rounded-md mr-3">{service.icon}</div>
                                          <h3 className="font-semibold text-gray-800">{service.category}</h3>
                                       </div>
                                       <ul className="space-y-2">
                                          {service.items.map((subItem) => (
                                             <li key={subItem.name}>
                                                <a
                                                   href={subItem.href}
                                                   className={`block py-2 px-3 text-sm ${
                                                      location.pathname === subItem.href
                                                         ? "text-hist-blue" 
                                                         : "text-gray-600 hover:text-hist-blue"
                                                   }`}
                                                   onClick={closeAllDropdowns}
                                                >
                                                   {subItem.name}
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 ))}
                              </div>
                              <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 rounded-b-lg">
                                 <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">Need custom solutions?</p>
                                    <Button
                                       size="sm"
                                       className="bg-hist-blue hover:bg-hist-blue-dark text-white"
                                       onClick={closeAllDropdowns}
                                    >
                                       Contact Us
                                    </Button>
                                 </div>
                              </div>
                           </div>
                        )}

                        {/* Regular Dropdown */}
                        {item.dropdown && activeDropdown === item.name && (
                           <div
                              className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-md border border-gray-200 z-50 py-2"
                              onMouseLeave={() => setActiveDropdown(null)}
                           >
                              {item.dropdown.map((subItem) => (
                                 <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`block px-4 py-2 text-sm ${
                                       location.pathname === subItem.href
                                          ? "text-hist-blue bg-gray-50" 
                                          : "text-gray-700 hover:text-hist-blue hover:bg-gray-50"
                                    }`}
                                    onClick={closeAllDropdowns}
                                 >
                                    {subItem.name}
                                 </a>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </nav>

               {/* CTA Button & Mobile Menu Toggle */}
               <div className="flex items-center space-x-3">
                  {location.pathname !== "/contact" && (
                     <Button
                        size="sm"
                        className="hidden sm:inline-flex bg-hist-blue hover:bg-hist-blue-dark text-white px-4 py-2 text-sm"
                        onClick={() => {
                           closeAllDropdowns();
                           window.location.href = "/contact";
                        }}
                     >
                        Quick Enquiry
                     </Button>
                  )}

                  <button
                     onClick={() => {
                        closeAllDropdowns();
                        setIsMenuOpen(!isMenuOpen);
                     }}
                     className="lg:hidden p-2 rounded-md text-gray-700 hover:text-hist-blue hover:bg-gray-100"
                  >
                     {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
               </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
               <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
                  <nav className="container mx-auto px-4 py-4">
                     {navigation.map((item) => (
                        <div key={item.name} className="mb-1">
                           {item.mega || item.dropdown ? (
                              <div className="border-b border-gray-100">
                                 <button
                                    onClick={() => toggleMobileDropdown(item.name)}
                                    className="flex items-center justify-between w-full py-3 text-gray-700 font-medium"
                                 >
                                    <span>{item.name}</span>
                                    <ChevronDown
                                       size={16}
                                       className={`transition-transform ${
                                          mobileDropdown === item.name ? "rotate-180" : ""
                                       }`}
                                    />
                                 </button>
                                 {mobileDropdown === item.name && (
                                    <div className="pl-4 pb-3">
                                       {item.name === "Services" ? (
                                          <div className="space-y-4">
                                             {servicesCategories.map((service, index) => (
                                                <div key={index}>
                                                   <div className="flex items-center py-2">
                                                      {service.icon}
                                                      <h4 className="ml-2 font-medium text-gray-800">
                                                         {service.category}
                                                      </h4>
                                                   </div>
                                                   <ul className="pl-6 space-y-1">
                                                      {service.items.map((subItem) => (
                                                         <li key={subItem.name}>
                                                            <a
                                                               href={subItem.href}
                                                               className={`block py-1.5 text-sm ${
                                                                  location.pathname === subItem.href
                                                                     ? "text-hist-blue" 
                                                                     : "text-gray-600 hover:text-hist-blue"
                                                               }`}
                                                               onClick={closeAllDropdowns}
                                                            >
                                                               {subItem.name}
                                                            </a>
                                                         </li>
                                                      ))}
                                                   </ul>
                                                </div>
                                             ))}
                                          </div>
                                       ) : (
                                          <ul className="space-y-1">
                                             {item.dropdown?.map((subItem) => (
                                                <li key={subItem.name}>
                                                   <a
                                                      href={subItem.href}
                                                      className="block py-2 text-gray-600 hover:text-hist-blue text-sm"
                                                      onClick={closeAllDropdowns}
                                                   >
                                                      {subItem.name}
                                                   </a>
                                                </li>
                                             ))}
                                          </ul>
                                       )}
                                    </div>
                                 )}
                              </div>
                           ) : (
                              <a
                                 href={item.href}
                                 className={`block py-3 font-medium border-b border-gray-100 ${
                                    location.pathname === item.href || 
                                    (item.href === "/services" && location.pathname.startsWith("/services/")) ||
                                    (item.href === "/industries" && location.pathname.startsWith("/industries/")) ||
                                    (item.href === "/blog" && location.pathname.startsWith("/blog/"))
                                       ? "text-hist-blue" 
                                       : "text-gray-700 hover:text-hist-blue"
                                 }`}
                                 onClick={closeAllDropdowns}
                              >
                                 {item.name}
                              </a>
                           )}
                        </div>
                     ))}
                     {location.pathname !== "/contact" && (
                        <Button
                           className="w-full mt-3 bg-hist-blue hover:bg-hist-blue-dark text-white py-2.5 text-sm"
                           onClick={() => {
                              closeAllDropdowns();
                              window.location.href = "/contact";
                           }}
                        >
                           Quick Enquiry
                        </Button>
                     )}
                  </nav>
               </div>
            )}
         </div>
      </header>
   );
};

export default Header;