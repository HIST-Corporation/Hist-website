// ServiceDetail.tsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
   ChevronLeft,
   ArrowRight,
   ArrowLeft,
   Check,
   Search,
   BarChart2,
   Target,
   Layers,
   TrendingUp,
   Shield,
   Users,
   PieChart,
   Globe,
   Mail,
   Smartphone,
} from "lucide-react";
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

   // Special UI for SEO and Digital Marketing
   const isMarketingService = serviceId === "seo" || serviceId === "digital-marketing";

   return (
      <div
         className={`min-h-screen py-16 ${
            isMarketingService
               ? "bg-gradient-to-b from-blue-50 to-white"
               : "bg-gradient-to-b from-hist-blue-50 to-white"
         }`}
      >
         <div className="container mx-auto px-4 max-w-8xl">
            <div className="mb-8">
               <Button
                  asChild
                  variant="link"
                  className={`px-0 ${isMarketingService ? "text-blue-600" : "text-hist-blue"} hover:no-underline`}
               >
                  <Link to="/services" className="flex items-center">
                     <ChevronLeft className="mr-2 h-4 w-4" />
                     All Services
                  </Link>
               </Button>
            </div>

            {/* Service Header with Image - Different for marketing */}
            {isMarketingService ? (
               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                     <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                           serviceId === "seo" ? "bg-hist-blue-100 text-hist-blue-800" : "bg-hist-blue-100 text-hist-blue-800"
                        }`}
                     >
                        {serviceId === "seo" ? "SEO Service" : "Marketing Service"}
                     </div>
                     <h1
                        className={`text-4xl md:text-5xl font-bold mb-6 ${
                           serviceId === "seo" ? "text-hist-blue-800" : "text-hist-blue-800"
                        }`}
                     >
                        {service.title}
                     </h1>
                     <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.longDescription}</p>
                     <div className="flex flex-wrap gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                           <div key={idx} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                              <Check className="h-5 w-5 text-hist-blue-500 mr-2" />
                              <span className="text-gray-700">{feature}</span>
                           </div>
                        ))}
                     </div>
                     <Button
                        asChild
                        className={`px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                           serviceId === "seo" ? "bg-hist-blue-600 hover:bg-hist-blue-700" : "bg-hist-blue-600 hover:bg-hist-blue-700"
                        }`}
                     >
                        <Link to="/contact">Get Started</Link>
                     </Button>
                  </div>

                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                     <div
                        className={`absolute inset-0 bg-gradient-to-r ${
                           serviceId === "seo"
                              ? "from-hist-blue-500/20 to-hist-blue-300/20"
                              : "from-hist-blue-500/20 to-hist-blue-300/20"
                        } rounded-2xl`}
                     ></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        {serviceId === "seo" ? (
                           <div className="grid grid-cols-3 gap-4">
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <Search className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">Keyword Research</h3>
                              </div>
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <Globe className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">On-Page SEO</h3>
                              </div>
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <BarChart2 className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">Analytics</h3>
                              </div>
                           </div>
                        ) : (
                           <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <Smartphone className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">Social Media</h3>
                              </div>
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <Mail className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">Email Marketing</h3>
                              </div>
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <PieChart className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">Analytics</h3>
                              </div>
                              <div className="bg-white/80 p-4 rounded-lg shadow-lg">
                                 <Target className="h-12 w-12 text-hist-blue-600 mx-auto mb-2" />
                                 <h3 className="font-bold text-center">PPC Ads</h3>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            ) : (
               // Standard header for other services
               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                     <div className="inline-flex items-center px-4 py-2 bg-hist-yellow rounded-full text-hist-blue text-sm font-semibold mb-6">
                        Service Detail
                     </div>
                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
                     <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.longDescription}</p>
                     <Button
                        asChild
                        className="bg-hist-gradient hover:shadow-lg px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1"
                     >
                        <Link to="/contact">Get Started</Link>
                     </Button>
                  </div>

                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                     <div className="absolute inset-0 bg-gradient-to-r from-hist-blue/20 to-hist-blue-dark/20 rounded-2xl"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon
                           className={`h-24 w-24 ${
                              serviceId === "seo"
                                 ? "text-hist-blue-600"
                                 : serviceId === "digital-marketing"
                                 ? "text-hist-yellow-600"
                                 : "text-hist-blue"
                           }`}
                        />
                     </div>
                  </div>
               </div>
            )}

            {/* Key Features Section - Different for marketing */}
            <div className="mb-20">
               <h2
                  className={`text-3xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 ${
                     isMarketingService
                        ? serviceId === "seo"
                           ? "after:bg-hist-blue-500 text-hist-blue-800"
                           : "after:bg-hist-blue-500 text-hist-blue-800"
                        : "after:bg-hist-yellow text-gray-900"
                  }`}
               >
                  {isMarketingService ? "Our Approach" : "Key Features"}
               </h2>

               {isMarketingService ? (
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                           <h3 className="text-xl font-bold mb-4">Our Process</h3>
                           <div className="space-y-6">
                              <div className="flex items-start">
                                 <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                                       serviceId === "seo"
                                          ? "bg-hist-blue-100 text-hist-blue-600"
                                          : "bg-hist-blue-100 text-hist-blue-600"
                                    }`}
                                 >
                                    1
                                 </div>
                                 <div>
                                    <h4 className="font-bold">Discovery & Analysis</h4>
                                    <p className="text-gray-600 mt-1">Comprehensive audit and competitor research</p>
                                 </div>
                              </div>
                              <div className="flex items-start">
                                 <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                                       serviceId === "seo"
                                          ? "bg-hist-blue-100 text-hist-blue-600"
                                          : "bg-hist-blue-100 text-hist-blue-600"
                                    }`}
                                 >
                                    2
                                 </div>
                                 <div>
                                    <h4 className="font-bold">Strategy Development</h4>
                                    <p className="text-gray-600 mt-1">
                                       Customized plan tailored to your business goals
                                    </p>
                                 </div>
                              </div>
                              <div className="flex items-start">
                                 <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                                       serviceId === "seo"
                                          ? "bg-hist-blue-100 text-hist-blue-600"
                                          : "bg-hist-blue-100 text-hist-blue-600"
                                    }`}
                                 >
                                    3
                                 </div>
                                 <div>
                                    <h4 className="font-bold">Implementation</h4>
                                    <p className="text-gray-600 mt-1">Technical execution and content optimization</p>
                                 </div>
                              </div>
                              <div className="flex items-start">
                                 <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                                       serviceId === "seo"
                                          ? "bg-hist-blue-100 text-hist-blue-600"
                                          : "bg-hist-blue-100 text-hist-blue-600"
                                    }`}
                                 >
                                    4
                                 </div>
                                 <div>
                                    <h4 className="font-bold">Monitoring & Optimization</h4>
                                    <p className="text-gray-600 mt-1">
                                       Continuous improvement based on performance data
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-4">Key Focus Areas</h3>
                           <div className="space-y-4">
                              {service.detailedFeatures.map((feature, idx) => (
                                 <div
                                    key={idx}
                                    className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                                 >
                                    <div className="flex items-start">
                                       <div
                                          className={`flex-shrink-0 mr-4 ${
                                             serviceId === "seo" ? "text-hist-blue-600" : "text-hist-blue-600"
                                          }`}
                                       >
                                          <Check className="h-6 w-6" />
                                       </div>
                                       <div>
                                          <h4 className="font-bold">{feature.title}</h4>
                                          <p className="text-gray-600 mt-1">{feature.description}</p>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  // Standard features for other services
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
               )}
            </div>

            {/* Benefits Section - Enhanced for marketing */}
            <div
               className={`rounded-3xl shadow-lg p-8 mb-16 ${
                  isMarketingService ? "bg-white border border-gray-100" : "bg-white border border-gray-100"
               }`}
            >
               <h2
                  className={`text-3xl font-bold mb-8 text-center ${
                     isMarketingService ? (serviceId === "seo" ? "text-hist-blue-800" : "text-hist-blue-800") : "text-gray-900"
                  }`}
               >
                  Benefits of Our {service.title}
               </h2>

               {isMarketingService ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {service.benefits.map((benefit, idx) => (
                        <div
                           key={idx}
                           className={`p-6 rounded-xl border ${
                              serviceId === "seo"
                                 ? "border-hist-blue-200 hover:bg-hist-blue-50 group"
                                 : "border-hist-blue-200 hover:bg-hist-blue-50 group"
                           } transition-colors`}
                        >
                           <div
                              className={`w-12 h-12 rounded-lg ${
                                 serviceId === "seo" 
                                    ? (benefit === "Increase organic traffic" || 
                                       benefit === "Build brand credibility" ||
                                       benefit === "Achieve higher ROI compared to paid ads" ||
                                       benefit === "Long-term sustainable results" ||
                                       benefit === "Target users at the moment of intent"
                                       ? "bg-hist-blue-100 text-hist-blue-600 group-hover:bg-hist-yellow-100 group-hover:text-hist-blue-600" 
                                       : "bg-hist-blue-100 text-hist-blue-600 group-hover:bg-hist-blue-200 group-hover:text-hist-blue-700")
                                    : (benefit === "Targeted reach to specific audiences" || 
                                       benefit === "Measurable campaign performance" ||
                                       benefit === "Flexible budget allocation" ||
                                       benefit === "Real-time optimization" ||
                                       benefit === "Integrated multi-channel approach"
                                       ? "bg-hist-blue-100 text-hist-blue-600 group-hover:bg-hist-yellow-100 group-hover:text-hist-blue-600" 
                                       : "bg-hist-blue-100 text-hist-blue-600 group-hover:bg-hist-blue-200 group-hover:text-hist-blue-700")
                              } flex items-center justify-center mb-4 transition-all duration-300 shadow-md group-hover:shadow-lg`}
                           >
                              {idx % 4 === 0 ? (
                                 <TrendingUp className="h-6 w-6" />
                              ) : idx % 4 === 1 ? (
                                 <Users className="h-6 w-6" />
                              ) : idx % 4 === 2 ? (
                                 <Shield className="h-6 w-6" />
                              ) : (
                                 <Layers className="h-6 w-6" />
                              )}
                           </div>
                           <p className={`${serviceId === "seo" ? "text-hist-blue-800" : "text-hist-blue-800"}`}>{benefit}</p>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                           <Check className="h-6 w-6 text-hist-blue-500 mt-1 mr-3 flex-shrink-0" />
                           <p className="text-gray-700">{benefit}</p>
                        </div>
                     ))}
                  </div>
               )}
            </div>

            {/* Why Choose HIST Section - Different for marketing */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               {!isMarketingService && (
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                     <div className="absolute inset-0 bg-gradient-to-r from-hist-blue/20 to-hist-blue-dark/20 rounded-2xl"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-hist-blue" />
                     </div>
                  </div>
               )}

               <div className={isMarketingService ? "" : ""}>
                  <h2
                     className={`text-3xl font-bold mb-6 ${
                        isMarketingService
                           ? serviceId === "seo"
                              ? "text-hist-blue-800"
                              : "text-hist-blue-800"
                           : "text-gray-900"
                     }`}
                  >
                     What Makes HIST the Right Team for Your Needs?
                  </h2>
                  <div className="space-y-6">
                     {service.strengths.map((strength, idx) => (
                        <div key={idx} className={isMarketingService ? "border-l-4 pl-4 py-2 border-hist-blue-500" : ""}>
                           <h3
                              className={`text-xl font-bold mb-2 ${
                                 isMarketingService
                                    ? serviceId === "seo"
                                       ? "text-hist-blue-700"
                                       : "text-hist-blue-700"
                                    : "text-hist-blue"
                              }`}
                           >
                              {strength.title}
                           </h3>
                           <p className="text-gray-700">{strength.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Trusted Partner Section - Different for marketing */}
            <div
               className={`rounded-3xl p-8 text-white mb-16 ${
                  isMarketingService
                     ? serviceId === "seo"
                        ? "bg-gradient-to-r from-hist-blue-600 to-hist-blue-800"
                        : "bg-gradient-to-r from-hist-blue-600 to-hist-blue-800"
                     : "bg-gradient-to-r from-hist-blue to-hist-blue-dark"
               }`}
            >
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Your Trusted Partner from Start to Finish</h2>
                     <p className="text-lg mb-6 opacity-90">{service.partnerDescription}</p>
                  </div>
                  <div
                     className={`p-6 rounded-xl ${
                        isMarketingService
                           ? serviceId === "seo"
                              ? "bg-hist-blue-500/20"
                              : "bg-hist-blue-500/20"
                           : "bg-white/20"
                     }`}
                  >
                     <h3 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h3>
                     <p className="mb-6">
                        No matter your industry or challenge, we're here to help turn your vision into reality. Whether
                        you're starting from scratch or improving existing systems, we'll guide you through the entire
                        journey.
                     </p>
                     <Button
                        asChild
                        className={`px-8 py-6 text-lg ${
                           isMarketingService
                              ? serviceId === "seo"
                                 ? "bg-white text-hist-blue hover:bg-hist-blue-50"
                                 : "bg-white text-hist-blue hover:bg-hist-blue-50"
                              : "bg-white text-hist-blue hover:bg-gray-100"
                        }`}
                     >
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
