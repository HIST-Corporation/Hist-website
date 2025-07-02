
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
   //  { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
     <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
           isScrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"
        }`}
     >
        <div className="container mx-auto px-4">
           <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="#home" className="flex items-center space-x-3">
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
              <nav className="hidden lg:flex items-center space-x-8">
                 {navigation.map((item) => (
                    <a
                       key={item.name}
                       href={item.href}
                       className="text-gray-700 hover:text-hist-blue font-medium text-sm transition-colors duration-200 relative group"
                    >
                       {item.name}
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hist-yellow group-hover:w-full transition-all duration-300"></span>
                    </a>
                 ))}
              </nav>

              {/* CTA Button & Mobile Menu Toggle */}
              <div className="flex items-center space-x-4">
                 <Button
                    size="lg"
                    className="hidden sm:inline-flex bg-hist-blue hover:bg-hist-blue-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                 >
                    Free Consultation
                 </Button>

                 {/* Mobile menu button */}
                 <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-hist-blue hover:bg-gray-50 transition-colors"
                 >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                 </button>
              </div>
           </div>

           {/* Mobile Navigation */}
           {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
                 <nav className="container mx-auto px-4 py-6">
                    {navigation.map((item) => (
                       <a
                          key={item.name}
                          href={item.href}
                          className="block py-3 text-gray-700 hover:text-hist-blue font-medium transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                          onClick={() => setIsMenuOpen(false)}
                       >
                          {item.name}
                       </a>
                    ))}
                    <Button className="w-full mt-4 bg-hist-blue hover:bg-hist-blue-dark text-white py-3 rounded-lg font-semibold shadow-lg">
                       Free Consultation
                    </Button>
                 </nav>
              </div>
           )}
        </div>
     </header>
  );
};

export default Header;
