// ServiceDetail.tsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { services } from "@/data/services";

const ServiceDetail = () => {
   const { serviceId } = useParams();
   const service = services.find((s) => s.id === serviceId);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [serviceId]);

   if (!service) {
      return (
         <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Service not found</h2>
            <Button asChild>
               <Link to="/">Back to Home</Link>
            </Button>
         </div>
      );
   }

   const currentIndex = services.findIndex((s) => s.id === serviceId);
   const nextService = services[(currentIndex + 1) % services.length];
   const prevService = services[(currentIndex - 1 + services.length) % services.length];

   return (
      <div className="bg-gradient-to-b from-hist-blue-50 to-white min-h-screen py-16">
         <div className="container mx-auto px-4 max-w-8xl">
            <div className="mb-8">
               <Button asChild variant="link" className="px-0 text-hist-blue hover:no-underline">
                  <Link to="/services" className="flex items-center">
                     <ChevronLeft className="mr-2 h-4 w-4" />
                     All Services
                  </Link>
               </Button>
            </div>

            {/* Service Header with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               <div>
                  <div className="inline-flex items-center px-4 py-2 bg-hist-yellow rounded-full text-hist-blue text-sm font-semibold mb-6">
                     Service Detail
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-allstar">{service.title}</h1>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.longDescription}</p>
                  <Button
                     asChild
                     className="bg-hist-gradient hover:shadow-lg px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                     <Link to="/contact">Get Started</Link>
                  </Button>
               </div>

               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                     src={service.headerImage}
                     alt={service.title}
                     className="w-full h-full object-cover"
                     loading="lazy"
                  />
               </div>
            </div>

            {/* Key Features Section */}
            <div className="mb-20">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-hist-yellow">
                  Key Features
               </h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.detailedFeatures.map((feature, idx) => (
                     <div
                        key={idx}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                     >
                        <div className="w-12 h-12 rounded-lg bg-hist-blue-100 flex items-center justify-center mb-6 group-hover:bg-hist-yellow transition-colors">
                           <service.icon className="h-6 w-6 text-hist-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-hist-blue mb-4">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 border border-gray-100">
               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Our {service.title}</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.benefits.map((benefit, idx) => (
                     <div key={idx} className="flex items-start">
                        <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{benefit}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Why Choose HIST Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                     src={service.strengthsImage}
                     alt={`Why choose HIST for ${service.title}`}
                     className="w-full h-full object-cover"
                     loading="lazy"
                  />
               </div>

               <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                     What Makes HIST the Right Team for Your Needs?
                  </h2>
                  <div className="space-y-6">
                     {service.strengths.map((strength, idx) => (
                        <div key={idx}>
                           <h3 className="text-xl font-bold text-hist-blue mb-2">{strength.title}</h3>
                           <p className="text-gray-700">{strength.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Trusted Partner Section */}
            <div className="bg-gradient-to-r from-hist-blue to-hist-blue-dark rounded-3xl p-8 text-white mb-16">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Your Trusted Partner from Start to Finish</h2>
                     <p className="text-lg mb-6 opacity-90">{service.partnerDescription}</p>
                  </div>
                  <div className="bg-white/20 p-6 rounded-xl">
                     <h3 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h3>
                     <p className="mb-6">
                        No matter your industry or challenge, we're here to help turn your vision into reality. Whether
                        you're starting from scratch or improving existing systems, we'll guide you through the entire
                        journey.
                     </p>
                     <Button asChild className="bg-white text-hist-blue hover:bg-gray-100 px-8 py-6 text-lg">
                        <Link to="/contact">Contact Us</Link>
                     </Button>
                  </div>
               </div>
            </div>

            {/* Service Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-8 border-t border-gray-200 pt-16">
               {prevService && (
                  <div>
                     <span className="text-gray-500 text-sm mb-2 block">Previous Service</span>
                     <Link
                        to={`/services/${prevService.id}`}
                        className="group flex items-center text-lg font-semibold text-hist-blue hover:text-hist-blue-dark"
                     >
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        {prevService.title}
                     </Link>
                  </div>
               )}

               {nextService && (
                  <div className="sm:text-right sm:ml-auto">
                     <span className="text-gray-500 text-sm mb-2 block">Next Service</span>
                     <Link
                        to={`/services/${nextService.id}`}
                        className="group flex items-center justify-end text-lg font-semibold text-hist-blue hover:text-hist-blue-dark"
                     >
                        {nextService.title}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default ServiceDetail;
