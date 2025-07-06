import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
   const testimonials = [
      {
         name: "Rajesh Shrestha",
         role: "CEO",
         company: "TechVenture Nepal",
         rating: 5,
         content: "Innovative solution.",
         avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      },
      {
         name: "Priya Maharjan",
         role: "Director",
         company: "HealthCare Solutions Ltd",
         rating: 5,
         content: "Revolutionized operations.",
         avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b25c2018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      },
      {
         name: "Amit Thapa",
         role: "Principal",
         company: "Sunrise Academy",
         rating: 5,
         content: "Transformed processes.",
         avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      },
      {
         name: "Sunita Karki",
         role: "Operations Manager",
         company: "Nepal E-Commerce Hub",
         rating: 5,
         content: "Game-changer.",
         avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      },
      {
         name: "Bikash Tamang",
         role: "IT Manager",
         company: "Mountain Logistics",
         rating: 5,
         content: "Exceeded expectations.",
         avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      },
      {
         name: "Maya Gurung",
         role: "Finance Director",
         company: "Everest Financial Services",
         rating: 5,
         content: "Streamlined operations.",
         avatar:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      },
   ];

   const doubleTestimonials = [...testimonials, ...testimonials];

   const marqueeRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!marqueeRef.current) return;

      const marquee = marqueeRef.current;
      let animationFrame: number;
      let position = 0;
      let isHovered = false;
      const speed = 0.5;

      const animate = () => {
         if (!isHovered) {
            position -= speed;
            if (position <= -marquee.scrollWidth / 2) {
               position = 0;
            }
            marquee.style.transform = `translateX(${position}px)`;
         }
         animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      const handleMouseEnter = () => {
         isHovered = true;
         marquee.style.transition = "transform 0.3s ease";
         marquee.style.transform = `translateX(${position}px)`;
      };

      const handleMouseLeave = () => {
         isHovered = false;
         marquee.style.transition = "";
      };

      marquee.addEventListener("mouseenter", handleMouseEnter);
      marquee.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         cancelAnimationFrame(animationFrame);
         marquee.removeEventListener("mouseenter", handleMouseEnter);
         marquee.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, []);

   return (
      <section className="py-20 bg-gradient-to-br from-sapphire-50 to-white">
         <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What Our <span className="text-gradient">Clients Say</span>
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about their experience
                  working with HIST.
               </p>
            </div>

            {/* Marquee Container */}
            <div className="relative overflow-hidden py-8">
               <div className="whitespace-nowrap flex items-stretch" ref={marqueeRef}>
                  {doubleTestimonials.map((testimonial, index) => (
                     <div
                        key={index}
                        className="inline-block w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] mx-3 md:mx-4 align-top"
                     >
                        <Card className="hist-shadow hover:hist-glow transition-all duration-300 border-0 h-full">
                           <CardContent className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
                              {/* Stars */}
                              <div className="flex space-x-1 mb-4">
                                 {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                                 ))}
                              </div>

                              {/* Content */}
                              <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-base sm:text-lg">
                                 "{testimonial.content}"
                              </p>

                              {/* Author */}
                              <div className="flex items-center space-x-4 mt-auto">
                                 <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                                 />
                                 <div>
                                    <div className="font-semibold text-gray-900 text-base sm:text-lg">
                                       {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                       {testimonial.role}, {testimonial.company}
                                    </div>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
