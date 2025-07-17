import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, ArrowLeft, Check } from "lucide-react";
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

   const currentIndex = services.findIndex((s) => s.id === serviceId);
   const nextService = services[(currentIndex + 1) % services.length];
   const prevService = services[(currentIndex - 1 + services.length) % services.length];

   // SaaS-specific content
   const saasBenefits = [
      "Work from anywhere – All you need is an internet connection",
      "No big setup costs – You don't have to buy expensive hardware or servers",
      "Always updated – Your software stays current with the latest features",
      "Grows with you – Add more users or features as your business expands",
      "Easy to use – Simple designs and user-friendly systems for everyone",
   ];

   const histStrengths = [
      {
         title: "Scalable Architecture",
         description:
            "We build SaaS products with robust, scalable multi-tenant architecture. This means a single software instance efficiently serves multiple customers, ensuring data isolation, security, and cost efficiency while allowing seamless growth.",
      },
      {
         title: "User Management",
         description:
            "Advanced user management features, including authentication and role-based access control (RBAC), ensure that only authorized users can access specific resources.",
      },
      {
         title: "Modern UI/UX Design",
         description:
            "We prioritize user experience, implementing the latest trends in UI/UX such as AI-powered personalization that tailors the interface to each user's needs.",
      },
      {
         title: "API Development",
         description:
            "Our SaaS products are built with robust APIs at their core, enabling seamless integration with other applications and cloud services.",
      },
      {
         title: "Cloud Integration",
         description:
            "We leverage leading cloud platforms, ensuring your SaaS product benefits from real-time data processing, workflow automation, and unified functionality.",
      },
   ];

   return (
      <div className="bg-gradient-to-b from-hist-blue-50 to-white min-h-screen py-16">
         <div className="container mx-auto px-4 max-w-6xl">
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
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-allstar">{service.title}</h1>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.longDescription}</p>
                  <Button
                     asChild
                     className="bg-hist-gradient hover:shadow-lg px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                     <Link to="/contact">Get Started</Link>
                  </Button>
               </div>

               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-hist-blue to-hist-blue-dark flex items-center justify-center">
                  <div className="text-white text-center p-8">
                     <service.icon className="h-20 w-20 mx-auto mb-6" />
                     <div className="text-3xl font-bold mb-4">{service.title}</div>
                     <div className="text-xl opacity-90">{service.shortDescription}</div>
                  </div>
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

            {/* SaaS-Specific Content */}
            {service.id === "saas-product-development" && (
               <>
                  {/* Benefits Section */}
                  <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 border border-gray-100">
                     <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Why SaaS is a Great Choice for Your Business
                     </h2>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {saasBenefits.map((benefit, idx) => (
                           <div key={idx} className="flex items-start">
                              <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                              <p className="text-gray-700">{benefit}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* HIST Strengths */}
                  <div className="mb-16">
                     <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-hist-yellow">
                        What Makes HIST the Right Team for Your SaaS Needs?
                     </h2>
                     <div className="space-y-8">
                        {histStrengths.map((strength, idx) => (
                           <div key={idx} className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/3">
                                 <h3 className="text-xl font-bold text-hist-blue mb-2">{strength.title}</h3>
                              </div>
                              <div className="md:w-2/3">
                                 <p className="text-gray-700">{strength.description}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Trusted Partner */}
                  <div className="bg-gradient-to-r from-hist-blue to-hist-blue-dark rounded-3xl p-8 text-white mb-16">
                     <h2 className="text-3xl font-bold mb-6">Your Trusted Partner from Start to Finish</h2>
                     <p className="text-lg mb-6 opacity-90">
                        When you work with HIST, you're not just getting a development team — you're getting a full tech
                        partner. We help you every step of the way, including planning your idea, designing the
                        software, developing and testing the product, launching it to the public, and providing ongoing
                        support and updates. We make sure your SaaS product works perfectly for your business today —
                        and can grow with you tomorrow.
                     </p>
                     <div className="bg-white/20 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-4">Ready to Build Your SaaS Product? Let's Get Started!</h3>
                        <p className="mb-6">
                           No matter your idea or your industry, we're here to help turn it into a successful SaaS
                           product. Whether you're starting from scratch or improving an existing system, we'll guide
                           you through the whole journey.
                        </p>
                        <Button asChild className="bg-white text-hist-blue hover:bg-gray-100 px-8 py-6 text-lg">
                           <Link to="/contact">Contact Us</Link>
                        </Button>
                     </div>
                  </div>
               </>
            )}

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
