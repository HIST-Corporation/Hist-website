
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Heart, 
  Briefcase, 
  ShoppingBag, 
  Calendar, 
  MapPin 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Learning management systems, student portals, and educational technology solutions.',
      projects: '12+ Projects'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Hospital management systems, patient portals, and telemedicine solutions.',
      projects: '8+ Projects'
    },
    {
      icon: Briefcase,
      title: 'Finance',
      description: 'Banking software, fintech solutions, and financial management systems.',
      projects: '10+ Projects'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Online stores, inventory management, and customer relationship systems.',
      projects: '15+ Projects'
    },
    {
      icon: Calendar,
      title: 'Government',
      description: 'Digital governance solutions, citizen services, and administrative systems.',
      projects: '5+ Projects'
    },
    {
      icon: MapPin,
      title: 'Logistics',
      description: 'Supply chain management, tracking systems, and delivery optimization.',
      projects: '7+ Projects'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
            Industries We Serve
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Delivering Solutions Across
            <span className="text-gradient"> Multiple Sectors</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans various industries, enabling us to understand unique sector challenges 
            and deliver tailored technology solutions that drive real business value.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 hist-shadow hover:hist-glow animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 text-center bg-slate-100">
                <div className="w-16 h-16 bg-sapphire-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sapphire-200 transition-colors">
                  <industry.icon className="w-8 h-8 text-sapphire-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-sapphire-50 rounded-full text-sapphire-700 text-sm font-medium">
                  {industry.projects}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-sapphire-600 mb-2">50+</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sapphire-600 mb-2">6</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sapphire-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sapphire-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
