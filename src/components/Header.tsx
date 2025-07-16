import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
   Menu,
   X,
   ChevronDown,
   Code,
   LayoutDashboard,
   Smartphone,
   Cloud,
   BarChart,
   Server,
   PenTool,
   Users,
   MessageSquare,
   BookOpen,
} from "lucide-react";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
   const dropdownRef = useRef<HTMLDivElement>(null);

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

   const handleMouseLeave = () => {
      // Only close if not hovering over dropdown content
      if (!dropdownRef.current?.matches(":hover")) {
         setActiveDropdown(null);
      }
   };

   const toggleMobileDropdown = (name: string) => {
      setMobileDropdown(mobileDropdown === name ? null : name);
   };

   const closeAllDropdowns = () => {
      setActiveDropdown(null);
      setMobileDropdown(null);
      setIsMenuOpen(false);
   };

   const services = {
      development: [
         { name: "Web Development", icon: <Code size={18} />, href: "/services/web-development" },
         { name: "Mobile App Development", icon: <Smartphone size={18} />, href: "/services/mobile-app" },
         { name: "Enterprise Software", icon: <LayoutDashboard size={18} />, href: "/services/enterprise" },
         { name: "Cloud Solutions", icon: <Cloud size={18} />, href: "/services/cloud" },
      ],
      marketing: [
         { name: "Digital Marketing", icon: <BarChart size={18} />, href: "/services/digital-marketing" },
         { name: "SEO & SEM", icon: <Server size={18} />, href: "/services/seo-sem" },
         { name: "Social Media Strategy", icon: <Users size={18} />, href: "/services/social-media" },
         { name: "Content Creation", icon: <PenTool size={18} />, href: "/services/content" },
      ],
      consulting: [
         { name: "IT Strategy", icon: <LayoutDashboard size={18} />, href: "/services/it-strategy" },
         { name: "Digital Transformation", icon: <Cloud size={18} />, href: "/services/digital-transformation" },
         { name: "UX/UI Consulting", icon: <PenTool size={18} />, href: "/services/ux-ui" },
      ],
   };

   const navigation = [
      { name: "About", href: "about" },
      {
         name: "Services",
         href: "/#services",
         mega: true,
      },
      {
         name: "Industries",
         href: "/industries",
         dropdown: [
            { name: "Finance & Banking", href: "/industries/finance" },
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "E-Commerce", href: "/industries/ecommerce" },
            { name: "Education", href: "/industries/education" },
         ],
      },
      {
         name: "Careers",
         href: "/careers",
         dropdown: [
            { name: "Open Positions", href: "/careers#positions" },
            { name: "Internship Program", href: "/careers#internships" },
            { name: "Life at HIST", href: "/careers#life" },
         ],
      },
      { name: "Blog", href: "/blog", icon: <BookOpen size={18} /> },
      { name: "Contact", href: "/#contact", icon: <MessageSquare size={18} /> },
   ];

   return (
      <header
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
            isScrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"
         }`}
         ref={dropdownRef}
      >
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
               {/* Logo */}
               <a href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
                  <div className="w-12 h-12">
                     <img src="/hist.png" className="w-12 h-12" alt="HIST Logo" />
                  </div>
                  <div>
                     <h1 className="text-2xl font-bold text-hist-blue font-allstar">HIST</h1>
                     <p className="text-xs text-gray-600 leading-none font-medium">
                        House of Information
                        <br />
                        Science and Technology
                     </p>
                  </div>
               </a>

               {/* Desktop Navigation */}
               <nav className="hidden lg:flex items-center space-x-1">
                  {navigation.map((item) => (
                     <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => (item.mega || item.dropdown ? handleMouseEnter(item.name) : undefined)}
                        onMouseLeave={() => (item.mega || item.dropdown ? handleMouseLeave() : undefined)}
                     >
                        <a
                           href={item.href}
                           className={`flex items-center px-4 py-5 font-medium text-sm transition-colors duration-200 relative group ${
                              activeDropdown === item.name ? "text-hist-blue" : "text-gray-700 hover:text-hist-blue"
                           }`}
                        >
                           {item.name}
                           {(item.mega || item.dropdown) && (
                              <ChevronDown
                                 size={16}
                                 className={`ml-1 transition-transform duration-200 ${
                                    activeDropdown === item.name ? "rotate-180" : ""
                                 }`}
                              />
                           )}
                           <span
                              className={`absolute -bottom-1 left-4 right-4 h-0.5 bg-hist-yellow ${
                                 activeDropdown === item.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                              } transition-transform duration-300 origin-left`}
                           ></span>
                        </a>

                        {/* Mega Dropdown for Services */}
                        {item.name === "Services" && activeDropdown === "Services" && (
                           <div
                              className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-screen max-w-[1400px] bg-white rounded-b-lg shadow-2xl border-t border-gray-200 z-50 overflow-hidden"
                              onMouseEnter={() => setActiveDropdown("Services")}
                              onMouseLeave={() => setActiveDropdown(null)}
                           >
                              <div className="container mx-auto px-8 py-10">
                                 <div className="grid grid-cols-12 gap-8">
                                    <div className="col-span-4">
                                       <div className="bg-hist-blue/5 p-6 rounded-xl h-full">
                                          <h2 className="text-2xl font-bold text-hist-blue mb-4">
                                             Our Digital Solutions
                                          </h2>
                                          <p className="text-gray-600 mb-6">
                                             We craft innovative digital experiences that drive growth and transform
                                             businesses.
                                          </p>
                                          <Button className="bg-hist-blue hover:bg-hist-blue-dark text-white">
                                             View All Services
                                          </Button>
                                       </div>
                                    </div>

                                    <div className="col-span-4 border-l border-gray-200 pl-8">
                                       <div className="flex items-center mb-6">
                                          <div className="p-2 bg-hist-blue/10 rounded-lg mr-3">
                                             <Code className="text-hist-blue" size={24} />
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-800">Development</h3>
                                       </div>
                                       <ul className="space-y-4">
                                          {services.development.map((service) => (
                                             <li key={service.name}>
                                                <a
                                                   href={service.href}
                                                   className="flex items-center group text-gray-700 hover:text-hist-blue"
                                                >
                                                   <span className="mr-3 text-hist-blue">{service.icon}</span>
                                                   {service.name}
                                                   <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                      →
                                                   </span>
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>

                                    <div className="col-span-4 border-l border-gray-200 pl-8">
                                       <div className="flex items-center mb-6">
                                          <div className="p-2 bg-hist-blue/10 rounded-lg mr-3">
                                             <BarChart className="text-hist-blue" size={24} />
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-800">Marketing</h3>
                                       </div>
                                       <ul className="space-y-4">
                                          {services.marketing.map((service) => (
                                             <li key={service.name}>
                                                <a
                                                   href={service.href}
                                                   className="flex items-center group text-gray-700 hover:text-hist-blue"
                                                >
                                                   <span className="mr-3 text-hist-blue">{service.icon}</span>
                                                   {service.name}
                                                   <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                      →
                                                   </span>
                                                </a>
                                             </li>
                                          ))}
                                       </ul>

                                       <div className="flex items-center mt-8 mb-6">
                                          <div className="p-2 bg-hist-blue/10 rounded-lg mr-3">
                                             <LayoutDashboard className="text-hist-blue" size={24} />
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-800">Consulting</h3>
                                       </div>
                                       <ul className="space-y-4">
                                          {services.consulting.map((service) => (
                                             <li key={service.name}>
                                                <a
                                                   href={service.href}
                                                   className="flex items-center group text-gray-700 hover:text-hist-blue"
                                                >
                                                   <span className="mr-3 text-hist-blue">{service.icon}</span>
                                                   {service.name}
                                                   <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                      →
                                                   </span>
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}

                        {/* Regular Dropdown */}
                        {item.dropdown && activeDropdown === item.name && (
                           <div
                              className="absolute left-0 top-full mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2"
                              onMouseEnter={() => setActiveDropdown(item.name)}
                              onMouseLeave={() => setActiveDropdown(null)}
                           >
                              {item.dropdown.map((subItem) => (
                                 <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-6 py-3 text-sm text-gray-700 hover:text-hist-blue hover:bg-gray-50 transition-colors"
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
               <div className="flex items-center space-x-4">
                  <Button
                     size="lg"
                     className="hidden sm:inline-flex bg-hist-blue hover:bg-hist-blue-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                     onClick={() => {
                        closeAllDropdowns();
                        window.location.href = "/login";
                     }}
                  >
                     Login Portal
                  </Button>

                  {/* Mobile menu button */}
                  <button
                     onClick={() => {
                        closeAllDropdowns();
                        setIsMenuOpen(!isMenuOpen);
                     }}
                     className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-hist-blue hover:bg-gray-50 transition-colors"
                  >
                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
               </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
               <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
                  <nav className="container mx-auto px-4 py-6">
                     {navigation.map((item) => (
                        <div key={item.name} className="mb-1 border-b border-gray-100 last:border-b-0">
                           {item.mega || item.dropdown ? (
                              <div>
                                 <button
                                    onClick={() => toggleMobileDropdown(item.name)}
                                    className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-hist-blue font-medium transition-colors duration-200"
                                 >
                                    <span>{item.name}</span>
                                    <ChevronDown
                                       size={16}
                                       className={`transition-transform duration-200 ${
                                          mobileDropdown === item.name ? "rotate-180" : ""
                                       }`}
                                    />
                                 </button>
                                 {mobileDropdown === item.name && (
                                    <div className="pl-4 mt-1 mb-2">
                                       {item.name === "Services" ? (
                                          <div className="space-y-6">
                                             <div>
                                                <div className="flex items-center mb-3">
                                                   <Code size={18} className="text-hist-blue mr-2" />
                                                   <h4 className="font-semibold text-gray-800">Development</h4>
                                                </div>
                                                <ul className="space-y-2 pl-6">
                                                   {services.development.map((service) => (
                                                      <li key={service.name}>
                                                         <a
                                                            href={service.href}
                                                            className="block py-2 text-gray-600 hover:text-hist-blue text-sm transition-colors"
                                                            onClick={closeAllDropdowns}
                                                         >
                                                            {service.name}
                                                         </a>
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>

                                             <div>
                                                <div className="flex items-center mb-3">
                                                   <BarChart size={18} className="text-hist-blue mr-2" />
                                                   <h4 className="font-semibold text-gray-800">Marketing</h4>
                                                </div>
                                                <ul className="space-y-2 pl-6">
                                                   {services.marketing.map((service) => (
                                                      <li key={service.name}>
                                                         <a
                                                            href={service.href}
                                                            className="block py-2 text-gray-600 hover:text-hist-blue text-sm transition-colors"
                                                            onClick={closeAllDropdowns}
                                                         >
                                                            {service.name}
                                                         </a>
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>

                                             <div>
                                                <div className="flex items-center mb-3">
                                                   <LayoutDashboard size={18} className="text-hist-blue mr-2" />
                                                   <h4 className="font-semibold text-gray-800">Consulting</h4>
                                                </div>
                                                <ul className="space-y-2 pl-6">
                                                   {services.consulting.map((service) => (
                                                      <li key={service.name}>
                                                         <a
                                                            href={service.href}
                                                            className="block py-2 text-gray-600 hover:text-hist-blue text-sm transition-colors"
                                                            onClick={closeAllDropdowns}
                                                         >
                                                            {service.name}
                                                         </a>
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>
                                          </div>
                                       ) : (
                                          <ul className="space-y-2">
                                             {item.dropdown?.map((subItem) => (
                                                <li key={subItem.name}>
                                                   <a
                                                      href={subItem.href}
                                                      className="block py-2 text-gray-600 hover:text-hist-blue text-sm transition-colors"
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
                                 className="block py-3 text-gray-700 hover:text-hist-blue font-medium transition-colors duration-200"
                                 onClick={closeAllDropdowns}
                              >
                                 {item.name}
                              </a>
                           )}
                        </div>
                     ))}
                     <Button
                        className="w-full mt-6 bg-hist-blue hover:bg-hist-blue-dark text-white py-3 rounded-lg font-semibold shadow-lg"
                        onClick={closeAllDropdowns}
                     >
                        Login Portal
                     </Button>
                     <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="text-gray-500 hover:text-hist-blue">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                           </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-hist-blue">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                           </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-hist-blue">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                           </svg>
                        </a>
                     </div>
                  </nav>
               </div>
            )}
         </div>
      </header>
   );
};

export default Header;
