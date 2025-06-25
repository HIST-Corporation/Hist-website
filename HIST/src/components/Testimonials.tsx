
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Shrestha',
      role: 'CEO',
      company: 'TechVenture Nepal',
      rating: 5,
      content: 'HIST transformed our business with their innovative SaaS solution. The team\'s expertise and dedication exceeded our expectations. Our productivity increased by 200%.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Priya Maharjan',
      role: 'Director',
      company: 'HealthCare Solutions Ltd',
      rating: 5,
      content: 'The healthcare management system developed by HIST revolutionized our operations. Patient satisfaction increased significantly, and administrative tasks became effortless.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b25c2018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Amit Thapa',
      role: 'Principal',
      company: 'Sunrise Academy',
      rating: 5,
      content: 'EduManage Pro has transformed how we manage our educational processes. The system is intuitive, powerful, and has improved our efficiency tremendously.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Sunita Karki',
      role: 'Operations Manager',
      company: 'Nepal E-Commerce Hub',
      rating: 5,
      content: 'Working with HIST was a game-changer for our online business. Their e-commerce solution is robust, scalable, and perfectly suited to the Nepali market.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Bikash Tamang',
      role: 'IT Manager',
      company: 'Mountain Logistics',
      rating: 5,
      content: 'The logistics management system exceeded our expectations. Real-time tracking and automated processes have reduced our operational costs by 30%.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Maya Gurung',
      role: 'Finance Director',
      company: 'Everest Financial Services',
      rating: 5,
      content: 'HIST\'s financial management solution streamlined our operations perfectly. The reporting features and security measures are exactly what we needed.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sapphire-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
            Client Testimonials
          </div>
           */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our
            <span className="text-gradient"> Clients Say</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with HIST.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hist-shadow hover:hist-glow transition-all duration-300 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
