import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
   const features = [
      {
         icon: CheckCircle,
         title: "Proven Expertise",
         description: "5+ years of delivering cutting-edge IT solutions",
      },
      {
         icon: Users,
         title: "Client-Centric Approach",
         description: "Tailored solutions that meet specific business needs",
      },
      {
         icon: Target,
         title: "Innovation Focus",
         description: "Leveraging latest technologies for competitive advantage",
      },
      {
         icon: Heart,
         title: "Local Understanding",
         description: "Deep knowledge of Nepal's market and business culture",
      },
   ];

   const teamLeaders = [
      {
         name: "Om Prakash Bhushal",
         role: "Chief Executive Officer",
         description: "Leading HIST with 6+ years of experience in IT strategy and business development.",
         image: "/CEO.jpg",
         linkedin: "#",
         category: "Leadership",
      },
      {
         name: "Kalpana Belbase",
         role: "Chief Financial Officer",
         description: "Expert in Financing in emerging technologies with 7+ years experience.",
         image: "CFO.jpg",
         linkedin: "#",
         category: "Finance",
      },
   ];

   const teamMembers = [
      {
         name: "Dip Ojha",
         role: "Full Stack Developer",
         description: "Specialized in React, Node.js, and cloud technologies with passion for clean code.",
         image: "/dip.jpg",
         linkedin: "#",
         category: "Development",
      },
      {
         name: "Madhav Poudel",
         role: "Cybersecurity Specialist",
         description: "Creating secure and resilient systems to protect against cyber threats.",
         image: "/SI.jpg",
         linkedin: "#",
         category: "Security",
      },
      {
         name: "Ashim Dhakal",
         role: "Graphic Designer",
         description: "Creating visually stunning designs that effectively communicate brand messages.",
         image: "/GD.jpg",
         linkedin: "#",
         category: "Design",
      },
      {
         name: "Bikram Subedi",
         role: "Graphic Designer",
         description: "Creating visually stunning designs that effectively communicate brand messages.",
         image: "/GD2.jpg",
         linkedin: "#",
         category: "Design",
      },
   ];

   const pastFellows = [
      {
         name: "Gaurav Raj Bana",
         role: "Full Stack Developer",
         description: "Expert in building scalable web applications with modern JavaScript frameworks.",
         image: "/bana.jpg",
         linkedin: "#",
         category: "Development",
      },
      {
         name: "Saiman Katwal",
         role: "QA Tester",
         description: "Ensuring software quality through rigorous testing methodologies.",
         image: "/saiman.jpg",
         linkedin: "#",
         category: "Quality Assurance",
      },
   ];

   return (
      <section id="about" className="py-20 bg-gray-100">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
               {/* Left Content */}
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                     Transforming Businesses Through
                     <span className="text-sapphire-600"> Technology Innovation</span>
                  </h2>

                  <p className="text-lg text-gray-600 mb-8">
                     Located in the heart of Kritipur, Kathmandu, HIST (House of Information Science and Technology) is
                     Nepal's premier IT solutions provider. We specialize in creating custom software solutions, SaaS
                     products, and providing comprehensive IT consulting services that drive digital transformation.
                  </p>

                  {/* Mission, Vision */}
                  <div className="space-y-6 mb-8">
                     <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-sapphire-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <Target className="w-4 h-4 text-sapphire-600" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                           <p className="text-gray-600">
                              To empower businesses with innovative technology solutions that drive growth and
                              efficiency.
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-sapphire-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <Eye className="w-4 h-4 text-sapphire-600" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                           <p className="text-gray-600">
                              To be Nepal's leading technology partner, bridging the gap between innovation and
                              practical business solutions.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Why Choose HIST */}
                  <div className="grid md:grid-cols-2 gap-4">
                     {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                           <feature.icon className="w-5 h-5 text-sapphire-600 mt-1 flex-shrink-0" />
                           <div>
                              <h4 className="font-medium text-gray-900">{feature.title}</h4>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Content - Image & Stats */}
               <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-xl">
                     <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        alt="HIST Team Working"
                        className="rounded-lg shadow-xl w-full"
                     />
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
                     <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6 text-center">
                           <div className="text-2xl font-bold text-sapphire-600 mb-2">100%</div>
                           <div className="text-gray-600">Client Satisfaction</div>
                        </CardContent>
                     </Card>

                     <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6 text-center">
                           <div className="text-2xl font-bold text-sapphire-600 mb-2">24/7</div>
                           <div className="text-gray-600">Support Available</div>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>

            {/* Team Section */}
            <div className="mt-20">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Meet Our <span className="text-sapphire-600">Expert Team</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                     Our passionate team of professionals brings together diverse expertise and innovative thinking to
                     deliver exceptional results for our clients.
                  </p>
               </div>

               {/* Leadership Section */}
               <div className="mb-16">
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-gray-800 text-center">Leadership Team</h3>
                     <div className="w-24 h-1 bg-sapphire-500 mx-auto mt-2 mb-8 rounded-full"></div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                     {teamLeaders.map((leader, index) => (
                        <Card
                           key={index}
                           className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden w-full max-w-md"
                        >
                           <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/3 bg-sapphire-50 flex items-center justify-center p-4">
                                 <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="rounded-xl w-24 h-24 md:w-32 md:h-32 object-cover"
                                 />
                              </div>
                              <div className="md:w-2/3 w-full">
                                 <CardContent className="p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                                    <p className="text-sapphire-600 font-medium mb-3">{leader.role}</p>
                                    <p className="text-gray-700 text-sm mb-4">{leader.description}</p>
                                 </CardContent>
                              </div>
                           </div>
                        </Card>
                     ))}
                  </div>
               </div>

               {/* Team Members Section */}
               <div className="mb-16">
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-gray-800 text-center">Our Expert Team</h3>
                     <div className="w-24 h-1 bg-sapphire-500 mx-auto mt-2 mb-8 rounded-full"></div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                     {teamMembers.map((member, index) => (
                        <Card
                           key={index}
                           className="border border-gray-200 hover:shadow-lg transition-shadow w-full max-w-xs"
                        >
                           <div className="bg-sapphire-50 flex justify-center py-6">
                              <img
                                 src={member.image} // or leader.image, fellow.image depending on context
                                 alt={member.name} // same here: use leader.name or fellow.name accordingly
                                 className="rounded-xl w-24 h-24 object-cover"
                              />
                           </div>
                           <CardContent className="p-6 text-center">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                              <p className="text-sapphire-600 font-medium text-sm mb-3">{member.role}</p>
                              <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>

               {/* Past Fellows Section */}
               <div>
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-gray-800 text-center">Past Fellowship Members</h3>
                     <div className="w-24 h-1 bg-sapphire-500 mx-auto mt-2 mb-8 rounded-full"></div>
                     <p className="text-gray-600 text-center max-w-3xl mx-auto">
                        We appreciate the contributions of our past team members who have been part of HIST's journey.
                     </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
                     {pastFellows.map((fellow, index) => (
                        <Card
                           key={index}
                           className="border border-gray-200 hover:shadow-lg transition-shadow w-full max-w-xs"
                        >
                           <div className="bg-sapphire-50 flex justify-center py-6">
                              <img src={fellow.image} alt={fellow.name} className="rounded-xl w-24 h-24 object-cover" />
                           </div>

                           <CardContent className="p-6 text-center">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{fellow.name}</h3>
                              <p className="text-sapphire-600 font-medium text-sm mb-3">{fellow.role}</p>
                              <p className="text-gray-600 text-sm mb-4">{fellow.description}</p>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
