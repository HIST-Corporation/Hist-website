import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Image, Code, CheckCircle, Settings } from "lucide-react";

const Process = () => {
   const steps = [
      {
         icon: Search,
         title: "Discovery & Planning",
         description:
            "We analyze your requirements, understand your business goals, and create a detailed project roadmap.",
         duration: "1-2 weeks",
      },
      {
         icon: Image,
         title: "Design & Prototype",
         description: "Our designers create intuitive user interfaces and interactive prototypes for validation.",
         duration: "2-3 weeks",
      },
      {
         icon: Code,
         title: "Development",
         description: "Our expert developers build your solution using cutting-edge technologies and best practices.",
         duration: "4-12 weeks",
      },
      {
         icon: CheckCircle,
         title: "Testing & QA",
         description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally.",
         duration: "1-2 weeks",
      },
      {
         icon: Settings,
         title: "Deployment & Support",
         description: "We deploy your solution and provide ongoing maintenance and support services.",
         duration: "Ongoing",
      },
   ];

   return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
         <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 md:mb-20">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  How We <span className="text-blue-600">Deliver Excellence</span>
               </h2>
               <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven process ensures successful project delivery, from initial concept to ongoing support.
               </p>
            </div>

            {/* Process Timeline */}
            <div className="relative">
               {/* Main vertical branch line in the center - removed gradient */}
               <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-1 bg-blue-500 transform -translate-x-1/2 rounded-full shadow-lg"></div>

               <div className="space-y-8 md:space-y-0">
                  {steps.map((step, index) => (
                     <div key={index} className="flex flex-col md:flex-row md:items-center">
                        {/* Left content area */}
                        <div className="hidden md:flex flex-col items-center w-1/2">
                           <div className={`w-full ${index % 2 === 0 ? "pr-8" : "pr-0"}`}>
                              {index % 2 === 0 && <StepCard step={step}  alignment="right" />}
                           </div>
                        </div>

                        {/* Center branch line - removed gradient */}
                        <div className="flex justify-center md:justify-center md:w-auto relative">
                           {/* Horizontal branch line pointing to left cards - removed gradient */}
                           {index % 2 === 0 && (
                              <>
                                <div className="hidden md:block absolute top-1/2 right-0 w-6 h-1 bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                                <div className="hidden md:block absolute top-1/2 right-0 w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-blue-500 transform translate-x-1 -translate-y-1/2"></div>
                                {/* Seamless connection point with vertical line */}
                                <div className="hidden md:block absolute top-1/2 left-0 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                              </>
                           )}
                           {/* Horizontal branch line pointing to right cards - removed gradient */}
                           {index % 2 === 1 && (
                              <>
                                <div className="hidden md:block absolute top-1/2 left-0 w-6 h-1 bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                                <div className="hidden md:block absolute top-1/2 left-0 w-0 h-0 border-t-4 border-b-4 border-r-6 border-t-transparent border-b-transparent border-r-blue-500 transform -translate-x-1 -translate-y-1/2"></div>
                                {/* Seamless connection point with vertical line */}
                                <div className="hidden md:block absolute top-1/2 right-0 w-1 h-1 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                              </>
                           )}
                        </div>

                        {/* Right content area */}
                        <div className="hidden md:flex flex-col items-center w-1/2">
                           <div className={`w-full ${index % 2 === 1 ? "pl-8" : "pl-0"}`}>
                              {index % 2 === 1 && <StepCard step={step} alignment="left" />}
                           </div>
                        </div>

                        {/* Mobile card (always visible) */}
                        <div className="md:hidden mt-6 w-full">
                           <StepCard step={step} alignment="center" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

// Extracted card component for better reusability - unchanged
const StepCard = ({ step, alignment }) => {
   return (
      <Card
         className={`border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
            alignment === "right" ? "text-right" : alignment === "left" ? "text-left" : "text-center"
         }`}
      >
         <CardContent className="p-5">
            <div
               className={`flex ${alignment === "right" ? "flex-row-reverse" : "flex-row"} ${
                  alignment === "center" ? "flex-col items-center" : "items-start"
               } gap-4`}
            >
               <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-blue-600" />
               </div>

               <div className={`${alignment === "center" ? "text-center" : "flex-1"}`}>
                  <div
                     className={`flex ${alignment === "right" ? "flex-row-reverse" : "flex-row"} ${
                        alignment === "center" ? "flex-col" : "items-center justify-between"
                     } gap-2 mb-2`}
                  >
                     <h3 className="text-lg md:text-xl font-semibold text-gray-900">{step.title}</h3>
                     <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-300">
                        {step.duration}
                     </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export default Process;