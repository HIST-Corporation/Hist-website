import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
   Heart,
   MessageCircle,
   Share2,
   Twitter,
   Linkedin,
   Github,
   ArrowLeft,
   ArrowRight,
   ThumbsUp,
   Reply,
} from "lucide-react";
import { blogArticles } from "@/data/blog";
import { useEffect } from "react";

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
      <div className="border-t border-gray-200 pt-8 mt-12">
         <div className="flex items-start gap-6">
            <Avatar className="w-16 h-16">
               <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
               <AvatarFallback className="text-lg font-bold bg-hist-blue text-white">
                  {author.name
                     .split(" ")
                     .map((n) => n[0])
                     .join("")}
               </AvatarFallback>
            </Avatar>

            <div className="flex-1">
               <h3 className="text-xl font-bold text-gray-900 mb-1">{author.name}</h3>
               <p className="text-hist-blue font-medium text-sm mb-3">{author.role}</p>
               <p className="text-gray-600 leading-relaxed mb-4">{author.bio}</p>

               <div className="flex gap-2">
                  {author.social.twitter && (
                     <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a
                           href={`https://twitter.com/${author.social.twitter}`}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Twitter className="w-4 h-4" />
                        </a>
                     </Button>
                  )}
                  {author.social.linkedin && (
                     <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a
                           href={`https://linkedin.com/in/${author.social.linkedin}`}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Linkedin className="w-4 h-4" />
                        </a>
                     </Button>
                  )}
                  {author.social.github && (
                     <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a
                           href={`https://github.com/${author.social.github}`}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Github className="w-4 h-4" />
                        </a>
                     </Button>
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
   const renderComment = (comment: {
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
   }, isReply = false) => {
      return (
         <div key={comment.id} className={`${isReply ? "ml-10 mt-4" : "mb-6"}`}>
            <div className="flex gap-4">
               <Avatar className="w-10 h-10">
                  <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                  <AvatarFallback className="bg-hist-blue text-white text-sm">
                     {comment.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                  </AvatarFallback>
               </Avatar>

               <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                     <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                     <p className="text-sm text-gray-500">{comment.date}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-3">{comment.content}</p>

                  <div className="flex items-center gap-4">
                     <Button variant="ghost" size="sm" className="text-gray-500 hover:text-hist-blue p-0 h-auto">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {comment.likes > 0 ? comment.likes : "Like"}
                     </Button>
                     <Button variant="ghost" size="sm" className="text-gray-500 hover:text-hist-blue p-0 h-auto">
                        <Reply className="w-4 h-4 mr-1" />
                        Reply
                     </Button>
                  </div>
               </div>
            </div>

            {comment.replies?.map((reply) => renderComment(reply, true))}
         </div>
      );
   };

   return (
      <div className="border-t border-gray-200 pt-8 mt-12">
         <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-gray-900">Discussion</h3>
            <Badge variant="secondary" className="text-xs">
               {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </Badge>
         </div>

         {comments.length === 0 ? (
            <div className="text-center py-8">
               <MessageCircle className="w-12 h-12 mx-auto text-gray-300 mb-3" />
               <h3 className="text-lg font-semibold text-gray-900 mb-1">No comments yet</h3>
               <p className="text-gray-500">Be the first to share your thoughts!</p>
            </div>
         ) : (
            <div className="space-y-6">{comments.map((comment) => renderComment(comment))}</div>
         )}

         <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-3">Join the conversation</h4>
            <div className="space-y-3">
               <Textarea
                  placeholder="Share your thoughts and insights..."
                  className="min-h-[100px] border-gray-200 focus:border-hist-blue"
               />
               <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Be respectful and constructive</p>
                  <Button className="bg-hist-blue hover:bg-hist-blue-dark text-white">
                     Post Comment
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

const BlogDetails = () => {
   const { id } = useParams<{ id: string }>();
   const article = blogArticles.find((article) => article.id === id);
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }, [id]);

   if (!article) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="max-w-md">
               <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-hist-blue rounded-full flex items-center justify-center">
                     <span className="text-white text-xl font-bold">!</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Article Not Found</h2>
                  <p className="text-gray-600 mb-5">
                     The article you're looking for doesn't exist or may have been removed.
                  </p>
                  <Button asChild className="bg-hist-blue hover:bg-hist-blue-dark text-white">
                     <Link to="/blog">Back to Blog</Link>
                  </Button>
               </CardContent>
            </Card>
         </div>
      );
   }

   const currentIndex = blogArticles.findIndex((a) => a.id === id);
   const nextArticle = blogArticles[(currentIndex + 1) % blogArticles.length];
   const prevArticle = blogArticles[(currentIndex - 1 + blogArticles.length) % blogArticles.length];

   return (
      <div className="bg-white font-poppins text-gray-800">
         {/* Main Content */}
         <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Back to blog link */}
            <div className="mb-6">
               <Link to="/blog" className="text-hist-blue hover:underline inline-flex items-center text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to blog
               </Link>
            </div>

            {/* Article Header */}
            <header className="mb-10">
               <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <time>{article.date}</time>
                  <Separator orientation="vertical" className="h-4" />
                  <span>{article.readTime}</span>
               </div>

               <h1 className="text-[36px] font-bold text-gray-900 leading-tight mb-6">
                  {article.title}
               </h1>

               <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                     <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                     <AvatarFallback className="bg-hist-blue text-white text-sm">
                        {article.author.name
                           .split(" ")
                           .map((n) => n[0])
                           .join("")}
                     </AvatarFallback>
                  </Avatar>
                  <div>
                     <p className="font-medium text-gray-800">{article.author.name}</p>
                     <p className="text-sm text-gray-500">{article.author.role}</p>
                  </div>
               </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
               <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-auto object-cover"
               />
            </div>

            {/* Article Content */}
            <div className="prose prose-xl max-w-none prose-headings:text-[38px] prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-hist-blue prose-strong:text-gray-900 mb-14">
               <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
               {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-sm">
                     #{tag}
                  </Badge>
               ))}
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between mb-14 pb-8 border-b border-gray-200">
               <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">
                     <Heart className="w-4 h-4 mr-2" />
                     Like
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                     <MessageCircle className="w-4 h-4 mr-2" />
                     Comment
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                     <Share2 className="w-4 h-4 mr-2" />
                     Share
                  </Button>
               </div>
            </div>

            {/* Author Card */}
            <AuthorCard author={article.author} />

            {/* Comments */}
            <CommentSection comments={article.comments} />

            {/* Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 mt-12 border-t border-gray-200">
               {prevArticle && (
                  <Link to={`/blog/${prevArticle.id}`} className="group">
                     <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-hist-blue transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-hist-blue" />
                        <div>
                           <p className="text-xs text-gray-500 mb-1">Previous article</p>
                           <h3 className="font-medium text-gray-900 group-hover:text-hist-blue transition-colors line-clamp-2">
                              {prevArticle.title}
                           </h3>
                        </div>
                     </div>
                  </Link>
               )}

               {nextArticle && (
                  <Link to={`/blog/${nextArticle.id}`} className="group">
                     <div className="flex items-center justify-end gap-3 p-4 rounded-lg border border-gray-200 hover:border-hist-blue transition-colors">
                        <div className="text-right">
                           <p className="text-xs text-gray-500 mb-1">Next article</p>
                           <h3 className="font-medium text-gray-900 group-hover:text-hist-blue transition-colors line-clamp-2">
                              {nextArticle.title}
                           </h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-hist-blue" />
                     </div>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default BlogDetails;