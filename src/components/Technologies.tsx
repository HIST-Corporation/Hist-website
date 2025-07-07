import React, { useState } from "react";


const Technologies = () => {
   const technologies = [
         {
      name: "React",
      category: "Frontend",
      color: "#61DAFB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      animation: "hover:animate-spin",
   },
   {
      name: "Node.js",
      category: "Backend",
      color: "#8CC84B",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      animation: "hover:animate-bounce",
   },
   {
      name: "Python",
      category: "Backend",
      color: "#3776AB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      animation: "hover:animate-ping",
   },
   {
      name: "Django",
      category: "Framework",
      color: "#092E20",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      animation: "hover:animate-spin",
   },
   {
      name: "Flutter",
      category: "Mobile",
      color: "#02569B",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      animation: "hover:animate-bounce",
   },
   {
      name: "AWS",
      category: "Cloud",
      color: "#FF9900",
      logo: "https://static.cdnlogo.com/logos/a/19/aws.svg",
      animation: "hover:animate-ping",
   },
   {
      name: "Azure",
      category: "Cloud",
      color: "#0089D6",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      animation: "hover:animate-spin",
   },
   {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      animation: "hover:animate-bounce",
   },
   {
      name: "PostgreSQL",
      category: "Database",
      color: "#336791",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      animation: "hover:animate-ping",
   },
   {
      name: "Docker",
      category: "DevOps",
      color: "#2496ED",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      animation: "hover:animate-spin",
   },
   {
      name: "Kubernetes",
      category: "DevOps",
      color: "#326CE5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      animation: "hover:animate-bounce",
   },
   {
      name: "TensorFlow",
      category: "AI/ML",
      color: "#FF6F00",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      animation: "hover:animate-ping",
   },
   {
      name: "Next.js",
      category: "Framework",
      color: "#000000",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      animation: "hover:animate-spin",
   },
   {
      name: "Vue.js",
      category: "Frontend",
      color: "#4FC08D",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      animation: "hover:animate-bounce",
   },
   {
      name: "GraphQL",
      category: "API",
      color: "#E10098",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      animation: "hover:animate-ping",
   },
   ];

   const categories = [...new Set(technologies.map((tech) => tech.category))];

   const [activeCategory, setActiveCategory] = useState("All");

   const filteredTechs =
      activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory);

   return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
         {/* Background elements */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400 blur-3xl"></div>
         </div>

         <div className="container mx-auto px-4 max-w-6xl relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cutting-Edge{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                     Technology Stack
                  </span>
               </h2>

               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We leverage the latest and most reliable technologies to build scalable, secure, and high-performance
                  solutions for our clients.
               </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
               <button
                  onClick={() => setActiveCategory("All")}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                     activeCategory === "All"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-white text-gray-700 shadow hover:shadow-md"
                  }`}
               >
                  All Technologies
               </button>

               {categories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setActiveCategory(category)}
                     className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                        activeCategory === category
                           ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                           : "bg-white text-gray-700 shadow hover:shadow-md"
                     }`}
                  >
                     {category}
                  </button>
               ))}
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
               {filteredTechs.map((tech, index) => (
                  <div
                     key={tech.name}
                     className="tech-card bg-white rounded-2xl p-5 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                     style={{
                        animation: `fadeIn 0.5s ease-out ${index * 0.05}s forwards`,
                        opacity: 0,
                     }}
                  >
                     <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${tech.animation}`}
                        style={{ backgroundColor: `${tech.color}20` }}
                     >
                        <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
                     </div>
                     <h4 className="text-lg font-semibold text-gray-800 mb-1">{tech.name}</h4>
                     <span className="text-sm text-gray-500">{tech.category}</span>
                  </div>
               ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
               <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white bg-opacity-10"></div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white bg-opacity-10"></div>

                  <div className="relative z-10">
                     <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Technology Solution?</h3>
                     <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our expert team can adapt to any technology stack or recommend the best solution for your
                        specific needs.
                     </p>
                     <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
                        Discuss Your Project
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Technologies;
