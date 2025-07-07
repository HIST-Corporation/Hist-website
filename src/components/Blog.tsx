import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
   const articles = [
      {
         title: "The Future of AI in Enterprise Solutions",
         category: "Technology",
         image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
         excerpt:
            "Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation.",
         readTime: "5 min read",
         date: "June 15, 2023",
      },
      {
         title: "Sustainable Tech: Building Green Software",
         category: "Sustainability",
         image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
         excerpt: "Practical strategies for reducing the carbon footprint of your digital products and services.",
         readTime: "4 min read",
         date: "May 28, 2023",
      },
      {
         title: "Cybersecurity Trends for 2023",
         category: "Security",
         image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
         excerpt: "An in-depth look at the emerging threats and defensive strategies in the cybersecurity landscape.",
         readTime: "6 min read",
         date: "April 12, 2023",
      },
      {
         title: "UX Design Principles for Complex Systems",
         category: "Design",
         image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
         excerpt: "How to maintain usability and clarity when designing for sophisticated enterprise applications.",
         readTime: "7 min read",
         date: "March 22, 2023",
      },
      {
         title: "The Evolution of Cloud Architecture",
         category: "Cloud",
         image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
         excerpt: "From monolithic to serverless: tracing the progression of cloud computing paradigms.",
         readTime: "8 min read",
         date: "February 18, 2023",
      },
      {
         title: "Data Governance in the Age of Privacy Regulations",
         category: "Compliance",
         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
         excerpt: "Best practices for maintaining compliance with GDPR, CCPA, and other data protection laws.",
         readTime: "5 min read",
         date: "January 5, 2023",
      },
   ];

   return (
      <section id="blog" className="py-20 bg-gradient-to-br from-white to-slate-50">
         <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Insights &<span className="text-gradient"> Perspectives</span>
               </h2>

               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover thought leadership articles, industry trends, and practical advice from our experts.
               </p>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
               {articles.map((article, index) => (
                  <Card
                     key={index}
                     className="group hover:shadow-xl transition-all duration-300 border-0 blog-shadow hover:blog-glow animate-fade-in overflow-hidden"
                     style={{ animationDelay: `${index * 0.1}s` }}
                  >
                     <div className="relative overflow-hidden">
                        <img
                           src={article.image}
                           alt={article.title}
                           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                           <Badge className="bg-white text-sapphire-700 hover:bg-white">{article.category}</Badge>
                        </div>
                     </div>

                     <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                           <span>{article.date}</span>
                           <span>{article.readTime}</span>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>

                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.excerpt}</p>

                        <Button variant="outline" className="w-full mt-4 group-hover:bg-sapphire-50 transition-colors">
                           Read Article
                        </Button>
                     </CardContent>
                  </Card>
               ))}
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
               <Button
                  size="lg"
                  variant="outline"
                  className="border-sapphire-500 text-sapphire-600 hover:bg-sapphire-50 hover:shadow-lg transition-all duration-300"
               >
                  View All Articles
               </Button>
            </div>
         </div>
      </section>
   );
};

export default BlogSection;
