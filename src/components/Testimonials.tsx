// components/Testimonials.tsx
import React, { useRef } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
   const testimonials = [
      {
         name: "Rajesh Shrestha",
         role: "CEO",
         company: "TechVenture Nepal",
         rating: 5,
         content:
            "The solution provided by HIST completely transformed our workflow. Their attention to detail and commitment to excellence is unmatched in the industry.",
         avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      },
      {
         name: "Priya Maharjan",
         role: "Director",
         company: "HealthCare Solutions Ltd",
         rating: 5,
         content:
            "HIST delivered beyond our expectations. Their innovative approach solved complex problems we've been struggling with for years.",
         avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b25c2018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      },
      {
         name: "Amit Thapa",
         role: "Principal",
         company: "Sunrise Academy",
         rating: 5,
         content:
            "The platform developed by HIST has revolutionized how we manage our institution. It's intuitive, powerful, and reliable.",
         avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      },
      {
         name: "Sunita Karki",
         role: "Operations Manager",
         company: "Nepal E-Commerce Hub",
         rating: 5,
         content:
            "Working with HIST was a game-changer for our e-commerce operations. Their team is professional, responsive, and truly understands business needs.",
         avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      },
      {
         name: "Bikash Tamang",
         role: "IT Manager",
         company: "Mountain Logistics",
         rating: 5,
         content:
            "The custom solution HIST created for us exceeded all expectations. It's streamlined our logistics operations by 40%.",
         avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      },
      {
         name: "Maya Gurung",
         role: "Finance Director",
         company: "Everest Financial Services",
         rating: 5,
         content:
            "HIST transformed our financial systems with their cutting-edge technology. Their expertise in fintech solutions is unparalleled.",
         avatar:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      },
   ];

   const scrollContainerRef = useRef<HTMLDivElement>(null);

   const scrollLeft = () => {
      if (scrollContainerRef.current) {
         scrollContainerRef.current.scrollBy({
            left: -400,
            behavior: "smooth",
         });
      }
   };

   const scrollRight = () => {
      if (scrollContainerRef.current) {
         scrollContainerRef.current.scrollBy({
            left: 400,
            behavior: "smooth",
         });
      }
   };

   return (
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Our <span className="text-blue-600">Clients Say</span>
               </h2>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about their experience
                  working with us.
               </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end mb-6">
               <div className="flex space-x-3">
                  <button
                     onClick={scrollLeft}
                     className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                     aria-label="Scroll left"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fillRule="evenodd"
                           d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </button>
                  <button
                     onClick={scrollRight}
                     className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                     aria-label="Scroll right"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fillRule="evenodd"
                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </button>
               </div>
            </div>

            {/* Testimonials Container */}
            <div className="relative">
               <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar"
                  style={{ scrollbarWidth: "none" }}
               >
                  {testimonials.map((testimonial, index) => (
                     <div
                        key={index}
                        className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] mx-3 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                     >
                        <div className="p-6 h-full flex flex-col">
                           {/* Stars */}
                           <div className="flex space-x-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                 <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                           </div>

                           {/* Content */}
                           <p className="text-gray-600 mb-6 leading-relaxed flex-grow italic">
                              "{testimonial.content}"
                           </p>

                           {/* Author */}
                           <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-100">
                              <img
                                 src={testimonial.avatar}
                                 alt={testimonial.name}
                                 className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                 <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                 <div className="text-sm text-gray-600">
                                    {testimonial.role}, {testimonial.company}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
