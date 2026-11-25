import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, Rocket, type LucideIcon } from "lucide-react";

interface Step {
   icon: LucideIcon;
   title: string;
   description: string;
   duration: string;
}

const steps: Step[] = [
   {
      icon: Search,
      title: "Discovery & Planning",
      description:
         "We analyze your requirements, understand your business goals, and create a detailed project roadmap.",
      duration: "1-2 weeks",
   },
   {
      icon: PenTool,
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
      icon: Rocket,
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing maintenance and support services.",
      duration: "Ongoing",
   },
];

const Process = () => {
   const timelineRef = useRef<HTMLDivElement>(null);
   const reduceMotion = useReducedMotion();

   // The centre line "draws" itself as the user scrolls through the timeline.
   const { scrollYProgress } = useScroll({
      target: timelineRef,
      offset: ["start 80%", "end 60%"],
   });
   const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

   return (
      <section id="process" className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
         {/* Soft floating background shapes */}
         <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-hist-blue-100 blur-3xl opacity-60"
            animate={reduceMotion ? undefined : { y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 -right-20 w-72 h-72 rounded-full bg-hist-yellow-100 blur-3xl opacity-60"
            animate={reduceMotion ? undefined : { y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
         />

         <div className="container mx-auto px-4 max-w-6xl relative">
            {/* Header */}
            <motion.div
               className="text-center mb-14 md:mb-20"
               initial={reduceMotion ? false : { opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
            >
               <span className="inline-flex items-center px-4 py-2 bg-hist-yellow rounded-full text-hist-blue-dark text-sm font-semibold mb-5">
                  Our Process
               </span>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  How We <span className="text-hist-blue">Deliver Excellence</span>
               </h2>
               <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven process ensures successful project delivery, from initial concept to ongoing support.
               </p>
            </motion.div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative">
               {/* Centre line: light track + blue fill that grows on scroll */}
               <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 left-7 md:left-1/2 w-1 -translate-x-1/2 rounded-full bg-hist-blue-100"
               >
                  <motion.div
                     className="absolute inset-0 rounded-full bg-hist-blue origin-top"
                     style={{ scaleY: reduceMotion ? 1 : lineProgress }}
                  />
               </div>

               <ol className="relative space-y-8 md:space-y-10">
                  {steps.map((step, index) => (
                     <StepRow key={step.title} step={step} index={index} reduceMotion={!!reduceMotion} />
                  ))}
               </ol>
            </div>
         </div>
      </section>
   );
};

interface StepRowProps {
   step: Step;
   index: number;
   reduceMotion: boolean;
}

const StepRow = ({ step, index, reduceMotion }: StepRowProps) => {
   const isLeft = index % 2 === 0;
   const number = String(index + 1).padStart(2, "0");
   const Icon = step.icon;

   return (
      <li className="grid grid-cols-[56px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] items-center gap-x-4 md:gap-x-0">
         {/* Step number node on the line */}
         <motion.div
            className="relative col-start-1 row-start-1 md:col-start-2 justify-self-center z-10"
            initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
         >
            {!reduceMotion && (
               <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-hist-blue"
                  animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: index * 0.4 }}
               />
            )}
            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white border-[3px] border-hist-blue text-hist-blue-dark font-bold shadow-md">
               {number}
            </span>
         </motion.div>

         {/* Card: rises in when scrolled into view, then keeps a gentle float */}
         <motion.div
            className={`col-start-2 row-start-1 ${isLeft ? "md:col-start-1 md:pr-2" : "md:col-start-3 md:pl-2"}`}
            initial={reduceMotion ? false : { opacity: 0, y: 70, x: isLeft ? -24 : 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
         >
            <motion.div
               animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
            >
               <article className="relative bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-[0_18px_36px_-18px_rgba(80,105,177,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-16px_rgba(80,105,177,0.55)] hover:border-hist-blue-200">
                  {/* Connector to the centre line (desktop) */}
                  <span
                     aria-hidden="true"
                     className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-hist-blue-200 ${
                        isLeft ? "-right-8" : "-left-8"
                     }`}
                  />
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                     <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-hist-blue-50">
                        <Icon className="w-6 h-6 text-hist-blue" />
                     </div>
                     <div className="flex-1 min-w-[140px]">
                        <p className="text-xs font-bold tracking-[0.15em] text-hist-blue-600">STEP {number}</p>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{step.title}</h3>
                     </div>
                     <span className="text-sm font-semibold text-hist-yellow-900 bg-hist-yellow-100 px-3 py-1 rounded-full">
                        {step.duration}
                     </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.description}</p>
               </article>
            </motion.div>
         </motion.div>
      </li>
   );
};

export default Process;
