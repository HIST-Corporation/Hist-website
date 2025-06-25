
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Briefcase, 
  Settings, 
  Star, 
  Grid2x2,
  Image,
  Calendar,
  Heart
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'SaaS Product Development',
      description: 'End-to-end SaaS solutions with scalable architecture, user management, and modern UI/UX design.',
      features: ['Multi-tenant Architecture', 'API Development', 'Cloud Integration']
    },
    {
      icon: Grid2x2,
      title: 'Website & App Development',
      description: 'Responsive websites and mobile applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Flutter Apps', 'PWA Development']
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Tailored software applications designed to solve specific business challenges.',
      features: ['Business Automation', 'Custom CRM/ERP', 'Integration Solutions']
    },
    {
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and processes.',
      features: ['Digital Strategy', 'System Architecture', 'Technology Audit']
    },
    {
      icon: Star,
      title: 'AI/ML Development',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Predictive Analytics', 'Chatbots', 'Data Processing']
    },
    {
      icon: Image,
      title: 'UI/UX Design',
      description: 'User-centered design creating intuitive and engaging digital experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Heart,
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services for your digital assets.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates']
    },
    {
      icon: Calendar,
      title: '☁️ Cloud Services',
      description: 'Cloud migration, deployment, and management services for modern infrastructure.',
      features: ['AWS/Azure Setup', 'DevOps', 'Cloud Security']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-hist-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-hist-yellow rounded-full text-hist-blue text-sm font-semibold mb-6">
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-allstar">
            Comprehensive 
            <span className="text-gradient"> IT Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom software development to AI-powered solutions, we offer a complete suite 
            of IT services designed to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 hist-shadow hover:hist-glow cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-hist-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-hist-yellow transition-colors">
                  {typeof service.icon === 'string' ? (
                    <span className="text-2xl">{service.icon}</span>
                  ) : (
                    <service.icon className="w-6 h-6 text-hist-blue group-hover:text-hist-blue-dark" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-hist-blue flex items-center">
                      <div className="w-1 h-1 bg-hist-yellow rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-hist-gradient hover:shadow-lg transition-all duration-300 px-8 py-3 text-white font-semibold">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
