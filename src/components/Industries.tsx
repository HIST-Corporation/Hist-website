import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Briefcase, ShoppingBag, Calendar, MapPin } from "lucide-react";

const Industries = () => {
   const industries = [
      {
         icon: BookOpen,
         title: "Education",
         description: "Learning management systems, student portals, and educational technology solutions.",
         projects: "+ Projects",
         animation: "group-hover:animate-wiggle",
         iconColor: "text-purple-600 group-hover:text-purple-700",
         bgColor: "bg-purple-100 group-hover:bg-purple-200",
         ringColor: "ring-purple-500",
      },
      {
         icon: Heart,
         title: "Healthcare",
         description: "Hospital management systems, patient portals, and telemedicine solutions.",
         projects: "3+ Projects",
         animation: "group-hover:animate-pulse",
         iconColor: "text-red-600 group-hover:text-red-700",
         bgColor: "bg-red-100 group-hover:bg-red-200",
         ringColor: "ring-red-500",
      },
      {
         icon: Briefcase,
         title: "Finance",
         description: "Banking software, fintech solutions, and financial management systems.",
         projects: "5+ Projects",
         animation: "group-hover:animate-bounce",
         iconColor: "text-blue-600 group-hover:text-blue-700",
         bgColor: "bg-blue-100 group-hover:bg-blue-200",
         ringColor: "ring-blue-500",
      },
      {
         icon: ShoppingBag,
         title: "Retail & E-commerce",
         description: "Online stores, inventory management, and customer relationship systems.",
         projects: "5+ Projects",
         animation: "group-hover:animate-spin-slow",
         iconColor: "text-green-600 group-hover:text-green-700",
         bgColor: "bg-green-100 group-hover:bg-green-200",
         ringColor: "ring-green-500",
      },
      {
         icon: Calendar,
         title: "Government",
         description: "Digital governance solutions, citizen services, and administrative systems.",
         projects: "2+ Projects",
         animation: "group-hover:animate-ping-slow",
         iconColor: "text-yellow-600 group-hover:text-yellow-700",
         bgColor: "bg-yellow-100 group-hover:bg-yellow-200",
         ringColor: "ring-yellow-500",
      },
      {
         icon: MapPin,
         title: "Logistics",
         description: "Supply chain management, tracking systems, and delivery optimization.",
         projects: "2+ Projects",
         animation: "group-hover:animate-float",
         iconColor: "text-indigo-600 group-hover:text-indigo-700",
         bgColor: "bg-indigo-100 group-hover:bg-indigo-200",
         ringColor: "ring-indigo-500",
      },
   ];

   return (
      <section id="solutions" className="py-20 bg-white">
         <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Delivering Solutions Across
                  <span className="text-gradient"> Multiple Sectors</span>
               </h2>

               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our expertise spans various industries, enabling us to understand unique sector challenges and deliver
                  tailored technology solutions that drive real business value.
               </p>
            </div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {industries.map((industry, index) => (
                  <Card
                     key={index}
                     className={`group hover:shadow-xl transition-all duration-300 border-0 hist-shadow hover:hist-glow animate-fade-in cursor-pointer hover:scale-105 hover:ring-2 hover:${industry.ringColor}`}
                     style={{ animationDelay: `${index * 0.15}s` }}
                  >
                     <CardContent className="p-8 text-center bg-slate-50 hover:bg-white transition-colors duration-300">
                        <div
                           className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-md group-hover:shadow-lg ${industry.animation}`}
                        >
                           <industry.icon className={`w-8 h-8 ${industry.iconColor} transition-colors duration-300`} />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                           {industry.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                           {industry.description}
                        </p>

                        <div
                           className={`inline-flex items-center px-3 py-1 ${industry.bgColor} rounded-full ${industry.iconColor} text-sm font-medium transition-all duration-300 group-hover:scale-110`}
                        >
                           {industry.projects}
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>

            {/* Bottom Stats */}
            <div
               className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 animate-fade-in"
               style={{ animationDelay: "0.9s" }}
            >
               <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Total Projects</div>
               </div>
               <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-gray-600">Industries Served</div>
               </div>
               <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
               </div>
               <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Industries;
