
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'EduManage Pro',
      category: 'Education Technology',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80',
      description: 'Comprehensive learning management system serving 10,000+ students across Nepal.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: '300% increase in student engagement'
    },
    {
      title: 'HealthCare Connect',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Telemedicine platform connecting rural patients with urban healthcare providers.',
      tech: ['Flutter', 'Firebase', 'WebRTC', 'AI'],
      results: '50% reduction in consultation time'
    },
    {
      title: 'FinanceFlow SaaS',
      category: 'Financial Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Cloud-based financial management system for SMEs with real-time analytics.',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      results: '40% cost reduction for clients'
    },
    {
      title: 'SmartRetail Hub',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      description: 'Multi-vendor e-commerce platform with integrated inventory and logistics management.',
      tech: ['Next.js', 'GraphQL', 'Stripe', 'Redis'],
      results: '200% increase in online sales'
    },
    {
      title: 'GovServe Digital',
      category: 'Government',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      description: 'Digital governance platform streamlining citizen services and administrative processes.',
      tech: ['Angular', 'Spring Boot', 'Oracle', 'Kubernetes'],
      results: '70% faster service delivery'
    },
    {
      title: 'LogisticsPro AI',
      category: 'Logistics',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'AI-powered supply chain optimization platform with predictive analytics.',
      tech: ['React', 'TensorFlow', 'FastAPI', 'GCP'],
      results: '30% reduction in delivery time'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-sapphire-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
            Our Portfolio
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Success Stories &
            <span className="text-gradient"> Case Studies</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses 
            and delivered measurable results across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 hist-shadow hover:hist-glow animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-sapphire-700 hover:bg-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-sapphire-600 mb-2">Key Result:</div>
                  <div className="text-sm text-gray-700">{project.results}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="bg-hist-gradient hover:shadow-lg transition-all duration-300">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
