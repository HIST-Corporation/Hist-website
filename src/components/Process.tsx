import React, { useEffect } from "react";
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

   useEffect(() => {
      // Add animation classes on scroll
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("animate-fade-up");
               }
            });
         },
         { threshold: 0.1 }
      );

      document.querySelectorAll(".process-step").forEach((el) => {
         observer.observe(el);
      });

      return () => observer.disconnect();
   }, []);

   return (
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
         <style>
            {`
          @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes colorShift {
            0%, 100% { background-color: #0284c7; }
            50% { background-color: #fbbf24; }
          }
          
          .animate-fade-up {
            animation: fadeUp 0.8s ease forwards;
          }
          
          .animated-gradient-text {
            background: linear-gradient(270deg, #0284c7, #fbbf24, #0284c7);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientText 3s ease infinite;
          }
          
          .tmeme-bg-blue {
            background-color: #0284c7;
          }
          
          .tmeme-bg-yellow {
            background-color: #fbbf24;
          }
          
          .tmeme-text-blue {
            color: #0284c7;
          }
          
          .tmeme-text-yellow {
            color: #fbbf24;
          }
          
          .tmeme-border-blue {
            border-color: #0284c7;
          }
          
          .tmeme-border-yellow {
            border-color: #fbbf24;
          }
          
          .pulse-animation {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .float-animation {
            animation: float 4s ease-in-out infinite;
          }
          
          .color-shift {
            animation: colorShift 4s ease-in-out infinite;
          }
        `}
         </style>

         <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-up">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  How We <span className="animated-gradient-text">Deliver Excellence</span>
               </h2>
               <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Our proven 5-step process ensures successful project delivery, from initial concept to ongoing
                  support, with transparent communication at every stage.
               </p>
            </div>

            {/* Timeline */}
            <div className="relative">
               {/* Dotted Line */}
               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full">
                  <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-tmeme-bg-blue to-transparent"></div>
                  <div
                     className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-tmeme-bg-yellow to-transparent"
                     style={{
                        animation: "dottedLine 3s ease-in-out infinite alternate",
                        opacity: 0.7,
                     }}
                  ></div>
                  <style>
                     {`
                       @keyframes dottedLine {
                         0% { height: 0%; top: 50%; }
                         100% { height: 100%; top: 0%; }
                       }
                     `}
                  </style>
               </div>

               {/* Steps */}
               <div className="space-y-16">
                  {steps.map((step, index) => (
                     <div
                        key={index}
                        className={`process-step flex flex-col md:flex-row items-center md:items-stretch ${
                           index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } opacity-0`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                     >
                        {/* Content */}
                        <div className="flex-1 md:px-8">
                           <div className="hover:transform hover:-translate-y-2 transition-all duration-300">
                              <Card className="backdrop-blur bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                                 <div className="absolute inset-0 bg-gradient-to-r from-tmeme-bg-blue/5 to-tmeme-bg-yellow/5 opacity-0 hover:opacity-100 transition-opacity duration-500 w-0 hover:w-full"></div>
                                 <CardContent className="p-6 relative">
                                    <div className="flex items-start space-x-4">
                                       <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 tmeme-bg-blue/10 hover:animate-pulse">
                                          <step.icon className="w-6 h-6 tmeme-text-blue" />
                                       </div>
                                       <div className="flex-1">
                                          <div className="flex items-center justify-between mb-2">
                                             <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                             <span className="text-sm font-medium tmeme-text-blue hover:scale-110 transition-transform">
                                                {step.duration}
                                             </span>
                                          </div>
                                          <p className="text-gray-600 text-base">{step.description}</p>
                                       </div>
                                    </div>
                                 </CardContent>
                              </Card>
                           </div>
                        </div>

                        {/* Step Number */}
                        <div className="hidden md:flex w-12 h-12 items-center justify-center font-bold text-lg shadow-md z-10 rounded-full text-white tmeme-bg-blue pulse-animation">
                           {index + 1}
                        </div>

                        {/* Spacer for mobile */}
                        <div className="flex-1 md:px-8 hidden md:block"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Floating decorations */}
         <div className="absolute top-20 left-10 w-16 h-16 rounded-full tmeme-bg-blue/10 blur-xl float-animation"></div>
         <div
            className="absolute bottom-20 right-10 w-24 h-24 rounded-full tmeme-bg-yellow/10 blur-xl float-animation"
            style={{ animationDelay: "1s" }}
         ></div>

         {/* Pulse elements */}
         <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full tmeme-bg-blue/20 pulse-animation"></div>
         <div
            className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full tmeme-bg-yellow/20 pulse-animation"
            style={{ animationDelay: "0.5s" }}
         ></div>
      </section>
   );
};

export default Process;
