
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Image, Code, CheckCircle, Settings } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, understand your business goals, and create a detailed project roadmap.',
      duration: '1-2 weeks'
    },
    {
      icon: Image,
      title: 'Design & Prototype',
      description: 'Our designers create intuitive user interfaces and interactive prototypes for validation.',
      duration: '2-3 weeks'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our expert developers build your solution using cutting-edge technologies and best practices.',
      duration: '4-12 weeks'
    },
    {
      icon: CheckCircle,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally.',
      duration: '1-2 weeks'
    },
    {
      icon: Settings,
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support services.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
            Our Process
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How We
            <span className="text-gradient"> Deliver Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures successful project delivery, from initial concept 
            to ongoing support, with transparent communication at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-sapphire-200"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 md:px-8">
                  <Card className="hist-shadow hover:hist-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-sapphire-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-sapphire-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {step.title}
                            </h3>
                            <span className="text-sm text-sapphire-600 font-medium">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Step Number */}
                <div className="hidden md:flex w-8 h-8 bg-sapphire-600 text-white rounded-full items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Spacer for mobile */}
                <div className="flex-1 md:px-8 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
