import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, ArrowLeft, Check, BarChart, Truck, Package, Route, BookOpen, Heart, Briefcase, ShoppingBag, Calendar } from "lucide-react";
import { industries } from "@/data/industries";

const IndustryDetail = () => {
   const { industryId } = useParams();
   const industry = industries.find((i) => i.id === industryId);

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = `${industry?.title} Solutions | HIST`;
   }, [industryId]);

   if (!industry) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-hist-blue-50 to-white">
            <div className="text-center py-20">
               <h2 className="text-2xl font-bold mb-4">Industry not found</h2>
               <Button asChild>
                  <Link to="/industries">Back to Industries</Link>
               </Button>
            </div>
         </div>
      );
   }

   const currentIndex = industries.findIndex((i) => i.id === industryId);
   const nextIndustry = industries[(currentIndex + 1) % industries.length];
   const prevIndustry = industries[(currentIndex - 1 + industries.length) % industries.length];

   // Icon mapping for solutions
   const solutionIcons = {
      "Learning Management Systems": <BookOpen className="h-8 w-8" />,
      "Student Portals": <BarChart className="h-8 w-8" />,
      "Virtual Classrooms": <Package className="h-8 w-8" />,
      "Patient Management Systems": <Heart className="h-8 w-8" />,
      "Telemedicine Platforms": <Route className="h-8 w-8" />,
      "Clinical Analytics": <BarChart className="h-8 w-8" />,
      "Digital Banking Platforms": <Briefcase className="h-8 w-8" />,
      "Wealth Management Tools": <BarChart className="h-8 w-8" />,
      "RegTech Solutions": <Check className="h-8 w-8" />,
      "E-commerce Platforms": <ShoppingBag className="h-8 w-8" />,
      "Inventory Optimization": <Package className="h-8 w-8" />,
      "Customer Data Platforms": <BarChart className="h-8 w-8" />,
      "Citizen Service Portals": <Calendar className="h-8 w-8" />,
      "Permit & Licensing Systems": <Check className="h-8 w-8" />,
      "Data Transparency Platforms": <BarChart className="h-8 w-8" />,
      "Fleet Management Systems": <Truck className="h-8 w-8" />,
      "Warehouse Automation": <Package className="h-8 w-8" />,
      "Route Optimization": <Route className="h-8 w-8" />,
   };

   return (
      <div className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50">
         <div className="container mx-auto px-4 max-w-8xl">
            <div className="mb-8">
               <Button asChild variant="link" className="px-0 text-hist-blue hover:no-underline">
                  <Link to="/industries" className="flex items-center">
                     <ChevronLeft className="mr-2 h-4 w-4" />
                     All Industries
                  </Link>
               </Button>
            </div>

            {/* Industry Header */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               <div>
                  <div
                     className={`inline-flex items-center px-4 py-2 ${industry.bgColor} rounded-full text-sm font-semibold mb-6`}
                  >
                     Industry Solutions
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                     Transforming {industry.title} with Technology
                  </h1>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{industry.longDescription}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                     {industry.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border">
                           <Check className="h-5 w-5 text-green-500 mr-2" />
                           <span className="text-gray-700">{benefit}</span>
                        </div>
                     ))}
                  </div>
                  <Button
                     asChild
                     className="bg-hist-gradient hover:shadow-lg px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                     <Link to="/contact">Get Industry Solution</Link>
                  </Button>
               </div>

               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <div
                     className={`absolute inset-0 ${industry.bgColor
                        .replace("bg-", "bg-")
                        .replace("group-hover:", "")} opacity-30 rounded-2xl`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <industry.icon
                        className={`h-24 w-24 ${industry.iconColor.replace("text-", "").replace("group-hover:", "")}`}
                     />
                  </div>
               </div>
            </div>

            {/* Solutions Section */}
            <div className="mb-20">
               <h2 className="text-3xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-hist-yellow">
                  Our {industry.title} Solutions
               </h2>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {industry.solutions.map((solution, idx) => (
                     <div
                        key={idx}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                     >
                        <div
                           className={`w-16 h-16 rounded-lg ${industry.bgColor} flex items-center justify-center mb-6`}
                        >
                           {solutionIcons[solution.title as keyof typeof solutionIcons] || (
                              <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                           )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits Section */}
            <div className="rounded-3xl shadow-lg p-8 mb-16 bg-white border border-gray-100">
               <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                  Benefits for {industry.title} Sector
               </h2>

               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                     <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
                     <ul className="space-y-4">
                        {industry.benefits.map((benefit, idx) => (
                           <li key={idx} className="flex items-start">
                              <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h3 className="text-xl font-bold mb-4">Case Studies</h3>
                     <div className="space-y-6">
                        {industry.caseStudies.map((caseStudy, idx) => (
                           <div key={idx} className="border-l-4 border-hist-blue pl-4 py-2">
                              <h4 className="text-lg font-semibold text-gray-900">{caseStudy.title}</h4>
                              <p className="text-gray-600 mt-1">{caseStudy.description}</p>
                              <div className="mt-2 flex items-center">
                                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                 <span className="text-green-600 font-medium">{caseStudy.result}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Why Choose HIST Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <div
                     className={`absolute inset-0 ${industry.bgColor
                        .replace("bg-", "bg-")
                        .replace("group-hover:", "")} opacity-20 rounded-2xl`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg w-4/5">
                        <h3 className="text-xl font-bold mb-4">Our Approach to {industry.title}</h3>
                        <p className="text-gray-700">
                           We combine deep industry knowledge with technical expertise to deliver solutions that address
                           your unique challenges and opportunities.
                        </p>
                     </div>
                  </div>
               </div>

               <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose HIST for {industry.title}?</h2>
                  <div className="space-y-6">
                     {industry.strengths.map((strength, idx) => (
                        <div key={idx}>
                           <h3 className="text-xl font-bold mb-2 text-hist-blue">{strength.title}</h3>
                           <p className="text-gray-700">{strength.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Trusted Partner Section */}
            <div
               className={`rounded-3xl p-8 text-white mb-16 bg-gradient-to-r ${industry.ringColor.replace(
                  "ring-",
                  "from-"
               )} to-${industry.ringColor.replace("ring-", "").replace("500", "700")}`}
            >
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Your Trusted Technology Partner</h2>
                     <p className="text-lg mb-6 opacity-90">{industry.partnerDescription}</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/20">
                     <h3 className="text-xl font-bold mb-4">Ready to Transform Your {industry.title} Operations?</h3>
                     <p className="mb-6">
                        Contact us today to discuss how our industry-specific solutions can help you achieve your
                        business goals.
                     </p>
                     <Button asChild className="px-8 py-6 text-lg bg-white text-hist-blue hover:bg-gray-100">
                        <Link to="/contact">Schedule Consultation</Link>
                     </Button>
                  </div>
               </div>
            </div>

            {/* Industry Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-8 border-t border-gray-200 pt-16">
               {prevIndustry && (
                  <div>
                     <span className="text-gray-500 text-sm mb-2 block">Previous Industry</span>
                     <Link
                        to={`/industries/${prevIndustry.id}`}
                        className="group flex items-center text-lg font-semibold text-hist-blue hover:text-hist-blue-dark"
                     >
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        {prevIndustry.title}
                     </Link>
                  </div>
               )}

               {nextIndustry && (
                  <div className="sm:text-right sm:ml-auto">
                     <span className="text-gray-500 text-sm mb-2 block">Next Industry</span>
                     <Link
                        to={`/industries/${nextIndustry.id}`}
                        className="group flex items-center justify-end text-lg font-semibold text-hist-blue hover:text-hist-blue-dark"
                     >
                        {nextIndustry.title}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default IndustryDetail;
