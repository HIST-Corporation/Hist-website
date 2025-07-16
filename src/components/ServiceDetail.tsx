
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, ArrowLeft } from "lucide-react";
import { services } from "@/data/services";


const ServiceDetail = () => {
   const { serviceId } = useParams();
   const service = services.find((s) => s.id === serviceId);

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

   // For demo purposes - in a real app you'd have this data in your service object
   const detailedFeatures = [
      {
         title: "Feature 1",
         description: "Detailed description of feature 1 and how it benefits the client.",
      },
      {
         title: "Feature 2",
         description: "Detailed description of feature 2 and its unique advantages.",
      },
      {
         title: "Feature 3",
         description: "Detailed description of feature 3 and implementation details.",
      },
   ];

   const currentIndex = services.findIndex((s) => s.id === serviceId);
   const nextService = services[(currentIndex + 1) % services.length];
   const prevService = services[(currentIndex - 1 + services.length) % services.length];

   return (
      <div className="bg-gradient-to-b from-hist-blue-50 to-white min-h-screen py-16">
         <div className="container mx-auto px-4">
            {/* Back Button */}
            <div className="mb-8">
               <Button asChild variant="link" className="px-0 text-hist-blue hover:no-underline">
                  <Link to="/#services" className="flex items-center">
                     <ChevronLeft className="mr-2 h-4 w-4" />
                     All Services
                  </Link>
               </Button>
            </div>

            {/* Service Header */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               <div>
                  <div className="inline-flex items-center px-4 py-2 bg-hist-yellow rounded-full text-hist-blue text-sm font-semibold mb-6">
                     Service Detail
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6 font-allstar">{service.title}</h1>
                  <p className="text-xl text-gray-700 mb-8">
                     {/* Extended description would go here */}
                     Comprehensive professional service with full support and customization options. Our{" "}
                     {service.title.toLowerCase()} service includes everything you need to succeed.
                  </p>
                  <Button asChild className="bg-hist-gradient hover:shadow-lg px-8 py-6 text-lg">
                     <Link to="/contact">Get Started</Link>
                  </Button>
               </div>

               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-hist-blue-100 flex items-center justify-center">
                  <div className="text-hist-blue text-2xl font-semibold">{service.title} Image</div>
               </div>
            </div>

            {/* Features Section */}
            <div className="mb-20">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {detailedFeatures.map((feature, idx) => (
                     <div
                        key={idx}
                        className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                     >
                        <h3 className="text-xl font-semibold text-hist-blue mb-4">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                     </div>
                  ))}
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