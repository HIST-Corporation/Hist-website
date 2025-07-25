import { useParams, Link } from "react-router-dom";
import { blogArticles } from "@/data/blog";

interface AuthorCardProps {
   author: {
      name: string;
      role: string;
      avatar: string;
      bio: string;
      social: {
         twitter?: string;
         linkedin?: string;
         github?: string;
      };
   };
}

const AuthorCard = ({ author }: AuthorCardProps) => {
   return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
         <div className="flex flex-col sm:flex-row gap-6">
            <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full object-cover" />
            <div>
               <h3 className="text-xl font-semibold text-gray-900 mb-1">{author.name}</h3>
               <p className="text-blue-600 text-sm font-medium mb-3">{author.role}</p>
               <p className="text-gray-600 mb-4">{author.bio}</p>
               <div className="flex space-x-4">
                  {author.social.twitter && (
                     <a
                        href={`https://twitter.com/${author.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                     >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                     </a>
                  )}
                  {author.social.linkedin && (
                     <a
                        href={`https://linkedin.com/in/${author.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                     >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                     </a>
                  )}
                  {author.social.github && (
                     <a
                        href={`https://github.com/${author.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 transition-colors"
                     >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

interface CommentSectionProps {
   comments: {
      id: string;
      author: string;
      avatar: string;
      content: string;
      date: string;
      likes: number;
      replies?: {
         id: string;
         author: string;
         avatar: string;
         content: string;
         date: string;
         likes: number;
      }[];
   }[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
   if (comments.length === 0) {
      return (
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Comments</h3>
            <p className="text-gray-500 text-center py-8">No comments yet. Be the first to share your thoughts!</p>
         </div>
      );
   }

   const renderComment = (comment: any, isReply = false) => {
      return (
         <div key={comment.id} className={`mb-6 ${isReply ? "ml-10 pl-4 border-l-2 border-gray-100" : ""}`}>
            <div className="flex gap-3 mb-3">
               <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover" />
               <div className="flex-1">
                  <div className="bg-gray-50 p-4 rounded-lg">
                     <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-900">{comment.author}</h4>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                     </div>
                     <p className="text-gray-700">{comment.content}</p>
                  </div>
                  <div className="flex items-center mt-2 ml-4">
                     <button className="text-gray-500 hover:text-blue-600 flex items-center text-sm">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-4 w-4 mr-1"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                           />
                        </svg>
                        {comment.likes > 0 ? comment.likes : "Like"}
                     </button>
                     <button className="text-gray-500 hover:text-blue-600 ml-4 flex items-center text-sm">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-4 w-4 mr-1"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                           />
                        </svg>
                        Reply
                     </button>
                  </div>
               </div>
            </div>
            {comment.replies?.map((reply) => renderComment(reply, true))}
         </div>
      );
   };

   return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
         <h3 className="text-xl font-semibold text-gray-900 mb-6">Comments ({comments.length})</h3>
         {comments.map((comment) => renderComment(comment))}
         <div className="mt-8">
            <h4 className="font-medium text-gray-900 mb-4">Leave a comment</h4>
            <textarea
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
               rows={4}
               placeholder="Share your thoughts..."
            ></textarea>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
               Post comment
            </button>
         </div>
      </div>
   );
};

const BlogDetails = () => {
   const { id } = useParams();
   const article = blogArticles.find((article) => article.id === id);

   if (!article) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
               <p className="text-gray-600 mb-6">
                  The article you're looking for doesn't exist or may have been removed.
               </p>
            </div>
         </div>
      );
   }

   const currentIndex = blogArticles.findIndex((a) => a.id === id);
   const nextArticle = blogArticles[(currentIndex + 1) % blogArticles.length];
   const prevArticle = blogArticles[(currentIndex - 1 + blogArticles.length) % blogArticles.length];

   return (
      <div className="bg-gradient-to-b from-hist-blue-50 to-white min-h-screen py-16">
         <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          {/* Article Header */}
            <div className="mb-12">
               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">{article.title}</h1>
               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div className="flex items-center">
                     <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                     />
                     <div>
                        <p className="font-medium text-gray-900">{article.author.name}</p>
                        <p className="text-gray-500 text-sm">{article.author.role}</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                     <span>{article.date}</span>
                     <span>•</span>
                     <span>{article.readTime}</span>
                  </div>
               </div>
               <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto rounded-xl shadow-md object-cover mb-10"
               />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
               <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
               {article.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                     #{tag}
                  </span>
               ))}
            </div>

            {/* Author Card */}
            <AuthorCard author={article.author} />

            {/* Comments Section */}
            <CommentSection comments={article.comments} />

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-8 mt-16 pt-8 border-t border-gray-200">
               {prevArticle && (
                  <div className="flex-1">
                     <span className="text-gray-500 text-sm mb-2 block">Previous</span>
                     <Link
                        to={`/blog/${prevArticle.id}`}
                        className="group flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                              clipRule="evenodd"
                           />
                        </svg>
                        {prevArticle.title}
                     </Link>
                  </div>
               )}
               {nextArticle && (
                  <div className="flex-1 sm:text-right">
                     <span className="text-gray-500 text-sm mb-2 block">Next</span>
                     <Link
                        to={`/blog/${nextArticle.id}`}
                        className="group flex sm:justify-end items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                     >
                        {nextArticle.title}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default BlogDetails;
