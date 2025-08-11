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
   Clock,
   Calendar,
   ThumbsUp,
   Reply,
} from "lucide-react";
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
      <Card className="overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-0 shadow-lg">
         <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
               <div className="relative">
                  <Avatar className="w-24 h-24 ring-4 ring-white shadow-lg">
                     <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
                     <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {author.name
                           .split(" ")
                           .map((n) => n[0])
                           .join("")}
                     </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
               </div>

               <div className="flex-1 space-y-4">
                  <div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-1">{author.name}</h3>
                     <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{author.role}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">{author.bio}</p>

                  <div className="flex gap-3">
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
         </CardContent>
      </Card>
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
   const renderComment = (comment: any, isReply = false) => {
      return (
         <div key={comment.id} className={`${isReply ? "ml-12 mt-4" : "mb-8"}`}>
            <Card className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
               <CardContent className="p-6">
                  <div className="flex gap-4">
                     <Avatar className="w-10 h-10 ring-2 ring-white shadow-md">
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm">
                           {comment.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </AvatarFallback>
                     </Avatar>

                     <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                           <div>
                              <h4 className="font-semibold text-slate-900">{comment.author}</h4>
                              <p className="text-sm text-slate-500">{comment.date}</p>
                           </div>
                        </div>

                        <p className="text-slate-700 leading-relaxed">{comment.content}</p>

                        <div className="flex items-center gap-4">
                           <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {comment.likes > 0 ? comment.likes : "Like"}
                           </Button>
                           <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600">
                              <Reply className="w-4 h-4 mr-1" />
                              Reply
                           </Button>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {comment.replies?.map((reply) => renderComment(reply, true))}
         </div>
      );
   };

   if (comments.length === 0) {
      return (
         <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
            <CardContent className="p-12 text-center">
               <MessageCircle className="w-16 h-16 mx-auto text-slate-400 mb-4" />
               <h3 className="text-xl font-semibold text-slate-900 mb-2">No comments yet</h3>
               <p className="text-slate-600">Be the first to share your thoughts!</p>
            </CardContent>
         </Card>
      );
   }

   return (
      <div className="space-y-8">
         <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-900">Discussion</h3>
            <Badge variant="secondary" className="text-sm">
               {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </Badge>
         </div>

         <div className="space-y-6">{comments.map((comment) => renderComment(comment))}</div>

         <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
               <h4 className="font-semibold text-slate-900 mb-4">Join the conversation</h4>
               <div className="space-y-4">
                  <Textarea
                     placeholder="Share your thoughts and insights..."
                     className="min-h-[120px] border-0 bg-white/80 backdrop-blur-sm shadow-sm"
                  />
                  <div className="flex justify-between items-center">
                     <p className="text-sm text-slate-500">Be respectful and constructive</p>
                     <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        Post Comment
                     </Button>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   );
};

const BlogDetails = () => {
   const { id } = useParams<{ id: string }>();
   const article = blogArticles.find((article) => article.id === id);

   if (!article) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <Card className="max-w-md border-0 shadow-xl">
               <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                     <span className="text-white text-2xl font-bold">!</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h2>
                  <p className="text-slate-600 mb-6">
                     The article you're looking for doesn't exist or may have been removed.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600">
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
      <div className="space-y-2 bg-gradient-to-br from-slate-50 via-white to-slate-50">
         {/* Hero Section */}
         <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
               <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-4 text-slate-300">
                     <Calendar className="w-5 h-5" />
                     <span>{article.date}</span>
                     <Separator orientation="vertical" className="h-4 bg-slate-600" />
                     <Clock className="w-5 h-5" />
                     <span>{article.readTime}</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                     {article.title}
                  </h1>

                  <div className="flex items-center justify-center gap-4">
                     <Avatar className="w-12 h-12 ring-4 ring-white/20">
                        <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                           {article.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </AvatarFallback>
                     </Avatar>
                     <div className="text-left">
                        <p className="font-semibold text-white">{article.author.name}</p>
                        <p className="text-slate-300 text-sm">{article.author.role}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Content */}
         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {/* Featured Image */}
            <div className="max-w-4xl mx-auto relative -mt-32 mb-12">
               <Card className="overflow-hidden border-0 shadow-2xl">
                  <img
                     src={article.image || "/placeholder.svg"}
                     alt={article.title}
                     className="w-full h-[400px] object-cover"
                  />
               </Card>
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between mb-12">
               <div className="flex items-center gap-4">
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

               <div className="flex gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                     <Badge key={tag} variant="secondary" className="rounded-full">
                        #{tag}
                     </Badge>
                  ))}
               </div>
            </div>

            {/* Article Content */}
            <Card className="max-w-7xl border-0 shadow-lg mb-16">
               <CardContent className="p-8 md:p-12">
                  <div
                     className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-slate-900"
                     dangerouslySetInnerHTML={{ __html: article.content }}
                  />
               </CardContent>
            </Card>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-16">
               {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-full px-4 py-2 text-sm">
                     #{tag}
                  </Badge>
               ))}
            </div>

            {/* Author Card */}
            <div className="mb-16">
               <AuthorCard author={article.author} />
            </div>

            {/* Comments */}
            <div className="mb-16">
               <CommentSection comments={article.comments} />
            </div>

            {/* Navigation */}
            <div className="grid md:grid-cols-2 gap-6">
               {prevArticle && (
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                     <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                           <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                           <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Previous</span>
                        </div>
                        <Link to={`/blog/${prevArticle.id}`} className="block">
                           <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {prevArticle.title}
                           </h3>
                        </Link>
                     </CardContent>
                  </Card>
               )}

               {nextArticle && (
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                     <CardContent className="p-6 text-right">
                        <div className="flex items-center justify-end gap-3 mb-3">
                           <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Next</span>
                           <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <Link to={`/blog/${nextArticle.id}`} className="block">
                           <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {nextArticle.title}
                           </h3>
                        </Link>
                     </CardContent>
                  </Card>
               )}
            </div>
         </div>
      </div>
   );
};

export default BlogDetails;
