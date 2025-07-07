import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, ArrowRight, Globe, Briefcase, Layers, Code, Server, BarChart2 } from "lucide-react";

export function CareersSection() {
   const jobCategories = [
      { name: "Engineering", icon: <Code className="w-5 h-5" />, count: 24 },
      { name: "Product", icon: <Layers className="w-5 h-5" />, count: 12 },
      { name: "Data Science", icon: <BarChart2 className="w-5 h-5" />, count: 8 },
      { name: "Infrastructure", icon: <Server className="w-5 h-5" />, count: 15 },
   ];

   const openPositions = [
      {
         title: "Frontend Developer",
         type: "Full-time",
         location: "Remote",
         department: "Engineering",
      },
      {
         title: "UX Designer",
         type: "Contract",
         location: "San Francisco, CA",
         department: "Product",
      },
      {
         title: "Data Analyst",
         type: "Full-time",
         location: "New York, NY",
         department: "Data Science",
      },
      {
         title: "DevOps Engineer",
         type: "Full-time",
         location: "Remote",
         department: "Infrastructure",
      },
   ];

   return (
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-800 mb-3">Join Our Team</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  We're building the future of work. Come help us create products that millions love to use every day.
               </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
               <Card className="bg-white shadow-sm border border-gray-100">
                  <CardContent className="p-6">
                     <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Search className="h-5 w-5 text-gray-400" />
                           </div>
                           <Input placeholder="Search jobs..." className="pl-10 w-full" />
                        </div>
                        <div className="flex-1 relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Briefcase className="h-5 w-5 text-gray-400" />
                           </div>
                           <Input placeholder="All Departments" className="pl-10 w-full" />
                        </div>
                        <div className="flex-1 relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Globe className="h-5 w-5 text-gray-400" />
                           </div>
                           <Input placeholder="All Locations" className="pl-10 w-full" />
                        </div>
                        <Button className="bg-hist-blue hover:bg-hist-blue-dark text-white">Search Jobs</Button>
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* Job Categories */}
            <div className="mb-16">
               <h3 className="text-xl font-semibold text-gray-800 mb-6">Explore by Category</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {jobCategories.map((category) => (
                     <Card key={category.name} className="hover:shadow-md transition-shadow border border-gray-100">
                        <CardContent className="p-6">
                           <div className="flex items-center space-x-4">
                              <div className="p-3 rounded-lg bg-hist-blue/10 text-hist-blue">{category.icon}</div>
                              <div>
                                 <h4 className="font-medium text-gray-800">{category.name}</h4>
                                 <p className="text-sm text-gray-500">{category.count} open positions</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>

            {/* Open Positions */}
            <div>
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Open Positions</h3>
                  <Button variant="outline" className="text-hist-blue border-hist-blue">
                     View all positions
                  </Button>
               </div>

               <div className="space-y-4">
                  {openPositions.map((job, index) => (
                     <Card key={index} className="hover:shadow-md transition-shadow border border-gray-100">
                        <CardContent className="p-6">
                           <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="mb-4 md:mb-0">
                                 <h4 className="font-medium text-lg text-gray-800">{job.title}</h4>
                                 <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                       {job.type}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                       {job.location}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                       {job.department}
                                    </span>
                                 </div>
                              </div>
                              <Button variant="outline" className="text-hist-blue border-hist-blue group">
                                 Apply Now
                                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>

            {/* Culture Section */}
            <div className="mt-20">
               <Card className="border border-gray-100 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                     <div className="md:w-1/2 p-10 bg-hist-blue/5">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Culture</h3>
                        <p className="text-gray-600 mb-6">
                           At our company, we believe in fostering innovation, collaboration, and continuous learning.
                           We value diversity and create an environment where everyone can thrive.
                        </p>
                        <div className="space-y-4">
                           <div className="flex items-start space-x-3">
                              <div className="p-1 rounded-full bg-hist-blue/10 text-hist-blue mt-1">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              </div>
                              <span className="text-gray-700">Flexible work arrangements</span>
                           </div>
                           <div className="flex items-start space-x-3">
                              <div className="p-1 rounded-full bg-hist-blue/10 text-hist-blue mt-1">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              </div>
                              <span className="text-gray-700">Competitive compensation</span>
                           </div>
                           <div className="flex items-start space-x-3">
                              <div className="p-1 rounded-full bg-hist-blue/10 text-hist-blue mt-1">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              </div>
                              <span className="text-gray-700">Professional development</span>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2 bg-gradient-to-br from-hist-blue/10 to-hist-blue/5 p-10 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4">
                           {["Team Retreats", "Health Benefits", "Parental Leave", "Stock Options"].map((item) => (
                              <div
                                 key={item}
                                 className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 text-center"
                              >
                                 <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-hist-blue/10 flex items-center justify-center text-hist-blue">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                 </div>
                                 <span className="text-gray-700 font-medium">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </Card>
            </div>
         </div>
      </section>
   );
}
