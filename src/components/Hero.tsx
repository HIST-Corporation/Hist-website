import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const Hero = () => {
   return (
      <section
         id="home"
         className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-0"
      >
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
               {/* Left Content */}
               <div className="order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-hist-blue-50 border border-hist-blue-200 rounded-full text-hist-blue-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 lg:mb-8">
                     Leading IT Solutions in Nepal
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight font-allstar">
                     Empowering Innovation with{" "}
                     <span className="text-hist-blue block sm:inline-block">Smart Technology</span>
                  </h1>

                  <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                     Custom IT Solutions, SaaS Products, and Future-Ready Services that transform businesses and drive
                     digital growth in Nepal and beyond.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12">
                     <Button
                        size="lg"
                        className="w-full sm:w-auto bg-hist-blue hover:bg-hist-blue-dark text-white px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                     >
                        Explore Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                     </Button>
                     <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-2 border-hist-blue text-hist-blue hover:bg-hist-blue hover:text-white px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
                     >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Watch Demo
                     </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-gray-200 sm:border-t-2">
                     <div className="text-center lg:text-left">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-hist-blue font-allstar">20+</div>
                        <div className="text-gray-600 text-xs sm:text-sm font-medium">Projects Completed</div>
                     </div>
                     <div className="text-center lg:text-left">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-hist-blue font-allstar">10+</div>
                        <div className="text-gray-600 text-xs sm:text-sm font-medium">Happy Clients</div>
                     </div>
                     <div className="text-center lg:text-left">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-hist-blue font-allstar">3+</div>
                        <div className="text-gray-600 text-xs sm:text-sm font-medium">Years Experience</div>
                     </div>
                  </div>
               </div>

               {/* Right Content - Hero Image */}
               <div className="order-1 lg:order-2 relative w-full max-w-lg lg:max-w-2xl mx-auto">
                  <div className="relative">
                     <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        alt="Modern Technology Solutions"
                        className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full"
                     />
                  </div>

                  {/* Status Cards */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 xl:-top-6 xl:-right-6 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-xl border border-gray-100">
                     <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center">
                           <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
                        </div>
                        <div>
                           <div className="text-xs sm:text-sm font-semibold">System Status</div>
                           <div className="text-[9px] sm:text-xs text-green-600 font-medium">All Services Online</div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 xl:-bottom-6 xl:-left-6 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-xl border border-gray-100">
                     <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-hist-yellow rounded-full flex items-center justify-center">
                           <span className="text-hist-blue text-[9px] sm:text-xs font-bold">AI</span>
                        </div>
                        <div>
                           <div className="text-xs sm:text-sm font-semibold">AI-Powered</div>
                           <div className="text-[9px] sm:text-xs text-hist-blue font-medium">Smart Solutions</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
