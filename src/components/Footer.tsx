
import React from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'SaaS Development',
    'Web Development',
    'Mobile Apps',
    'IT Consulting',
    'Cloud Services',
    'AI/ML Solutions'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 font-allstar">
              Stay Updated with HIST
            </h3>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest tech insights, company updates, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-hist-blue focus:border-transparent"
              />
              <button className="px-6 py-3 bg-hist-gradient rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12  rounded-xl flex items-center justify-center shadow-lg">
                <img src="/hist.png" alt="HIST Logo" className="w-12 h-12"/>
              </div>
              <div>
                <h1 className="text-xl font-bold font-allstar">HIST</h1>
                <p className="text-xs text-gray-400 leading-none">House of Information Science and Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses in Nepal and beyond with innovative technology solutions. 
              From custom software to AI-powered systems, we're your trusted IT partner.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-hist-yellow" />
                <span className="text-gray-300">Kritipur, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-hist-yellow" />
                <span className="text-gray-300">+977-98601340786</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-hist-yellow" />
                <span className="text-gray-300">info@hist.com.np</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-hist-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-hist-yellow transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} HIST - House of Information Science and Technology. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-hist-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-hist-yellow transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-hist-yellow transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
