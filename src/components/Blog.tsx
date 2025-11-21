import { useState } from "react";
import { Link } from "react-router-dom";

import AuthorCard from "./AuthorCard";
import { blogArticles } from "@/data/blog";

const Blog = () => {
   const [activeCategory, setActiveCategory] = useState("All");
   const [searchQuery, setSearchQuery] = useState("");

   const categories = ["All", ...new Set(blogArticles.map((article) => article.category))];

   const filteredArticles = blogArticles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesSearch =
         article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
   });

   return (
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
               <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
               <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">Insights, stories, and expertise from our team</p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
               <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                     type="text"
                     placeholder="Search articles..."
                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
               <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                     <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                           activeCategory === category
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                     <Link to={`/blog/${article.id}`} key={article.id} className="group block">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                           <div className="relative h-48 overflow-hidden">
                              <img
                                 src={article.image}
                                 alt={article.title}
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-4 left-4">
                                 <span className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                                    {article.category}
                                 </span>
                              </div>
                           </div>
                           <div className="p-6 flex flex-col flex-grow">
                              <div className="flex justify-between text-sm text-gray-500 mb-2">
                                 <span>{article.date}</span>
                                 <span>{article.readTime}</span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                 {article.title}
                              </h3>
                              <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                              <div className="flex items-center mt-auto">
                                 <img
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    className="w-8 h-8 rounded-full mr-2"
                                 />
                                 <span className="text-sm font-medium text-gray-700">{article.author.name}</span>
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            ) : (
               <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Blog;
