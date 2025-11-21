// components/Testimonials.tsx
import React, { useRef, useEffect, useState } from "react";

const Testimonials = () => {
   const testimonials = [
      {
         name: "Bibek Regmi",
         role: "Managing Director, NLPRC",
         rating: 5,
         content:
            "House of Information Science and Technology is the best website design and development company in Nepal with highly qualified IT staff. The company offers follow-up services even after project completion.",
         avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
         name: "Shreeram Dhakal",
         role: "Chairman, NIMS Group Clinic",
         rating: 5,
         content:
            "House of Information Science and Technology has been a game-changer for us. Their Social Media Marketing and Website Development services have transformed our online presence. We're incredibly grateful for their expertise.",
         avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b25c2018?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
         name: "Sulav Prasad Pudasaini",
         role: "Founder/CEO, Eduzeit Network",
         rating: 5,
         content:
            "House of Information Science and Technology has a very unique team that works professionally and understands customer needs. It's very worthy to be their customer due to timely relevant services. Very thankful for their reliable support.",
         avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
         name: "Ram Prasad K.C.",
         role: "Director, Himalayan Tech",
         rating: 5,
         content:
            "Working with House of Information Science and Technology was a transformative experience. Their technical expertise and commitment to quality exceeded our expectations. The team delivered our project on time.",
         avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
         name: "Sunita Sharma",
         role: "CEO, Digital Nepal Pvt. Ltd.",
         rating: 5,
         content:
            "The team at House of Information Science and Technology demonstrated exceptional professionalism and technical knowledge. They understood our requirements perfectly and delivered a solution that improved our efficiency.",
         avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b25c2018?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
         name: "Krishna Bahadur Thapa",
         role: "CTO, CloudTech Innovations",
         rating: 5,
         content:
            "We've partnered with House of Information Science and Technology for multiple projects, and they consistently deliver outstanding results. Their innovative approach and attention to detail make them a trusted technology partner.",
         avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      },
   ];

   // State for screen size
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

   // Generate star icons
   const renderStars = (count: number) => {
      return Array.from({ length: count }).map((_, index) => (
         <svg key={index} className="star" viewBox="0 0 24 24" width="22" height="22">
            <path fill="#4285F4" d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896 4.664 23.166l1.402-8.168L.132 9.211l8.2-1.193z"/>
         </svg>
      ));
   };

   // Handle window resize
   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   // Auto-scroll and drag functionality
   const scrollContainerRef = useRef<HTMLDivElement>(null);
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);
   const autoScrollRef = useRef<number | null>(null);
   const pauseAutoScrollRef = useRef<boolean>(false);
   const scrollSpeedRef = useRef<number>(1);
   
   // Auto-scroll functionality that stops at every 3rd testimonial
   useEffect(() => {
      let pauseTimeoutRef: NodeJS.Timeout | null = null;
      let testimonialCountRef = 0;
      const cardWidth = 385 + 24; // card width + gap
      const maxTestimonials = 3; // Stop at every 3rd testimonial
      
      const autoScroll = () => {
         if (pauseAutoScrollRef.current || isDragging) {
            autoScrollRef.current = requestAnimationFrame(autoScroll);
            return;
         }
         
         const container = scrollContainerRef.current;
         if (!container) {
            autoScrollRef.current = requestAnimationFrame(autoScroll);
            return;
         }
         
         // Check if we've scrolled a full card width
         if (Math.floor(container.scrollLeft / cardWidth) > testimonialCountRef) {
            testimonialCountRef = Math.floor(container.scrollLeft / cardWidth);
            
            // Pause at every 3rd testimonial
            if ((testimonialCountRef + 1) % maxTestimonials === 0) {
               pauseAutoScrollRef.current = true;
               
               if (pauseTimeoutRef) clearTimeout(pauseTimeoutRef);
               pauseTimeoutRef = setTimeout(() => {
                  pauseAutoScrollRef.current = false;
                  pauseTimeoutRef = null;
               }, 3000); // Pause for 3 seconds
            }
         }
         
         // Only scroll if we haven't reached the 3rd testimonial in current cycle
         if ((testimonialCountRef + 1) % maxTestimonials !== 0 || !pauseAutoScrollRef.current) {
            container.scrollLeft += scrollSpeedRef.current;
         }
         
         // Reset scroll position when reaching the end for infinite loop effect
         if (container.scrollLeft >= container.scrollWidth / 3) {
            container.scrollLeft = 0;
            testimonialCountRef = 0; // Reset counter
         }
         
         autoScrollRef.current = requestAnimationFrame(autoScroll);
      };
      
      autoScrollRef.current = requestAnimationFrame(autoScroll);
      
      return () => {
         if (autoScrollRef.current) {
            cancelAnimationFrame(autoScrollRef.current);
         }
         if (pauseTimeoutRef) {
            clearTimeout(pauseTimeoutRef);
         }
      };
   }, [isDragging]);
   
   // Pause auto-scroll when mouse is over the container
   const handleMouseEnter = () => {
      pauseAutoScrollRef.current = true;
   };
   
   const handleMouseLeave = () => {
      pauseAutoScrollRef.current = false;
   };
   
   // Drag functionality
   const handleMouseDown = (e: React.MouseEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      // Pause auto-scroll when dragging starts
      pauseAutoScrollRef.current = true;
      
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      
      // Add visual feedback
      container.style.cursor = 'grabbing';
      container.style.userSelect = 'none';
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      const container = scrollContainerRef.current;
      if (!isDragging || !container) return;
      
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      container.scrollLeft = scrollLeft - walk;
   };

   const handleMouseUp = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      if (isDragging) {
         setIsDragging(false);
         // Restore visual feedback
         container.style.cursor = 'grab';
         container.style.userSelect = 'auto';
         
         // Resume auto-scroll after a delay
         setTimeout(() => {
            pauseAutoScrollRef.current = false;
         }, 3000); // Resume after 3 seconds as per requirements
      }
   };

   // Handle mouse leaving container while dragging
   const handleContainerMouseLeave = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      if (isDragging) {
         setIsDragging(false);
         // Restore visual feedback
         container.style.cursor = 'grab';
         container.style.userSelect = 'auto';
         
         // Resume auto-scroll after a delay
         setTimeout(() => {
            pauseAutoScrollRef.current = false;
         }, 3000); // Resume after 3 seconds
      }
   };

   return (
      <section className="py-12 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="heading text-center mb-12">
               <div className="kicker text-gray-400 text-base uppercase tracking-wider mb-2 relative before:content-[''] before:inline-block before:h-0.5 before:w-12 before:bg-blue-500 before:align-middle before:mr-3 before:rounded after:content-[''] after:inline-block after:h-0.5 after:w-12 after:bg-blue-500 after:align-middle after:ml-3 after:rounded">
                  Testimonials
               </div>
               <div className="title text-5xl md:text-6xl font-bold text-gray-800 -tracking-wide">
                  What Our <span className="text-blue-600">Clients Says</span>
               </div>
            </div>

            <div 
               ref={scrollContainerRef}
               className="flex overflow-x-auto gap-6 pb-4 cursor-grab hide-scrollbar"
               onMouseDown={handleMouseDown}
               onMouseMove={handleMouseMove}
               onMouseUp={handleMouseUp}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleContainerMouseLeave}
            >
               {/* Duplicate testimonials for seamless looping */}
               {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div 
                     key={index} 
                     className="card bg-white rounded-2xl p-7 border-2 border-blue-500 shadow-sm relative h-[450px] flex-shrink-0 w-[385px] flex flex-col"
                  >
                     <div className="top flex gap-4 items-center mb-4 flex-shrink-0">
                        <div className="avatar w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                           <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="meta flex-shrink-0 min-w-0">
                           <h3 className={`font-bold text-gray-800 m-0 ${isMobile ? 'text-lg' : 'text-xl'}`}>{testimonial.name}</h3>
                           <p className={`text-gray-500 mt-1 m-0 ${isMobile ? 'text-sm' : 'text-base'}`}>{testimonial.role}</p>
                        </div>
                     </div>
                     
                     <div className="quote text-gray-600 leading-relaxed flex-1 overflow-hidden">
                        <div className="h-full flex flex-col">
                           <p className={`m-0 flex-grow ${isMobile ? 'text-sm' : 'text-base'}`}>{testimonial.content}</p>
                        </div>
                     </div>

                     <div className="rating-row flex items-center justify-between gap-3 mt-6 flex-shrink-0">
                        <div className="stars flex gap-1.5 items-center" aria-hidden>
                           {renderStars(testimonial.rating)}
                        </div>
                        <div className={`google flex items-center gap-2 text-gray-500 ${isMobile ? 'text-sm' : 'text-base'}`}>
                           <svg width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 533.5 544.3">
                              <path fill="#4285F4" d="M533.5 278.4c0-17.8-1.6-35.1-4.7-51.8H272v98.1h146.9c-6.3 33.9-25.2 62.6-53.7 81.7v67.8h86.6c50.6-46.6 81.7-115.2 81.7-195.8z"/>
                              <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24.1 178.1-65.4l-86.6-67.8c-24.1 16.2-55 25.6-91.5 25.6-70.4 0-130-47.5-151.4-111.3H34.2v69.8C78.2 487.2 167 544.3 272 544.3z"/>
                              <path fill="#FBBC05" d="M120.6 327.6c-8.9-26.2-8.9-54.4 0-80.6V177.2H34.2c-38.3 76.6-38.3 168.9 0 245.5l86.4-69.8z"/>
                              <path fill="#EA4335" d="M272 109.7c39.5 0 75 13.6 102.9 40.3l77.1-77.1C405.7 24.6 345.7 0 272 0 167 0 78.2 57.1 34.2 143.8l86.4 69.8C142 157.2 201.6 109.7 272 109.7z"/>
                           </svg>
                           <span className={isMobile ? 'hidden' : 'inline'}>(Google Review)</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Testimonials;