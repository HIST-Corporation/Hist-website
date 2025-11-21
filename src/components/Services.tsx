import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
   Code,
   Briefcase,
   Settings,
   Star,
   Grid2x2,
   Image as ImageIcon,
   Calendar,
   Heart,
   ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
   {
      id: "saas-product-development",
      icon: Code,
      title: "SaaS Product Development",
      shortDescription:
         "End-to-end SaaS solutions with scalable architecture, user management, and modern UI/UX design.",
      features: ["Multi-tenant Architecture", "API Development", "Cloud Integration"],
   },
   {
      id: "website-app-development",
      icon: Grid2x2,
      title: "Website & App Development",
      shortDescription: "Responsive websites and mobile applications built with cutting-edge technologies.",
      features: ["React/Next.js", "Flutter Apps", "PWA Development"],
   },
   {
      id: "custom-software",
      icon: Settings,
      title: "Custom Software Solutions",
      shortDescription: "Tailored software applications designed to solve specific business challenges.",
      features: ["Business Automation", "Custom CRM/ERP", "Integration Solutions"],
   },
   {
      id: "it-consulting",
      icon: Briefcase,
      title: "IT Consulting",
      shortDescription: "Strategic technology consulting to optimize your IT infrastructure and processes.",
      features: ["Digital Strategy", "System Architecture", "Technology Audit"],
   },
   {
      id: "ai-ml-development",
      icon: Star,
      title: "AI/ML Development",
      shortDescription: "Intelligent solutions powered by artificial intelligence and machine learning.",
      features: ["Predictive Analytics", "Chatbots", "Data Processing"],
   },
   {
      id: "ui-ux-design",
      icon: ImageIcon,
      title: "UI/UX Design",
      shortDescription: "User-centered design creating intuitive and engaging digital experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
   },
   {
      id: "maintenance-support",
      icon: Heart,
      title: "Maintenance & Support",
      shortDescription: "24/7 technical support and maintenance services for your digital assets.",
      features: ["Bug Fixes", "Performance Optimization", "Security Updates"],
   },
   {
      id: "cloud-services",
      icon: Calendar,
      title: "Cloud Services",
      shortDescription: "Cloud migration, deployment, and management services for modern infrastructure.",
      features: ["AWS/Azure Setup", "DevOps", "Cloud Security"],
   },
];

const Services = () => {
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

               <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  From custom software development to AI-powered solutions, we offer a complete suite of IT services
                  designed to accelerate your digital transformation journey.
               </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
               {services.map((service) => (
                  <Link
                     to={`/services/${service.id}`}
                     key={service.id}
                     className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hist-blue focus-visible:ring-offset-2 rounded-lg transition-all"
                  >
                     <Card className="group hover:shadow-xl transition-all duration-300 border-0 hist-shadow hover:hist-glow h-full">
                        <CardContent className="p-6">
                           <div className="w-12 h-12 bg-hist-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-hist-yellow transition-colors">
                              <service.icon className="w-6 h-6 text-hist-blue group-hover:text-hist-blue-dark" />
                           </div>

                           <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>

                           <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>

                           <ul className="space-y-1 mb-4">
                              {service.features.map((feature, idx) => (
                                 <li key={idx} className="text-xs text-hist-blue flex items-center">
                                    <div className="w-1 h-1 bg-hist-yellow rounded-full mr-2"></div>
                                    {feature}
                                 </li>
                              ))}
                           </ul>

                           <div className="text-hist-blue px-0 hover:no-underline group-hover:text-hist-blue-dark text-sm flex items-center">
                              Learn more
                              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                           </div>
                        </CardContent>
                     </Card>
                  </Link>
               ))}
            </div>

            {/* CTA */}
            <div className="text-center">
               <Button
                  asChild
                  size="lg"
                  className="bg-hist-gradient hover:shadow-lg transition-all duration-300 px-8 py-3 text-white font-semibold"
               >
                  <Link to="/contact">Get in Touch</Link>
               </Button>
            </div>
         </div>
      </section>
   );
};

export default Services;
