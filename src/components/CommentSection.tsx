import { useState } from "react";

interface Comment {
   id: string;
   author: string;
   avatar: string;
   content: string;
   date: string;
   likes: number;
   replies?: Comment[];
}

interface CommentSectionProps {
   comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
   const [newComment, setNewComment] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would send this to your backend
      console.log("New comment:", newComment);
      setNewComment("");
   };

   return (
      <div className="mb-12">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
         </h2>

         {/* Comment Form */}
         <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
               <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  required
               />
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
               Post Comment
            </button>
         </form>

         {/* Comments List */}
         <div className="space-y-6">
            {comments.map((comment) => (
               <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex gap-4">
                     <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full" />
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold">{comment.author}</h4>
                           <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.content}</p>
                        <div className="flex items-center gap-4">
                           <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
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
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                 />
                              </svg>
                              {comment.likes}
                           </button>
                           <button className="text-sm text-gray-500 hover:text-blue-600">Reply</button>
                        </div>

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                           <div className="mt-6 pl-6 border-l-2 border-gray-200 space-y-6">
                              {comment.replies.map((reply) => (
                                 <div key={reply.id} className="flex gap-4">
                                    <img src={reply.avatar} alt={reply.author} className="w-8 h-8 rounded-full" />
                                    <div className="flex-1">
                                       <div className="flex justify-between items-start mb-1">
                                          <h4 className="font-bold">{reply.author}</h4>
                                          <span className="text-sm text-gray-500">{reply.date}</span>
                                       </div>
                                       <p className="text-gray-700 mb-3">{reply.content}</p>
                                       <div className="flex items-center gap-4">
                                          <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
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
                                                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                             </svg>
                                             {reply.likes}
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CommentSection;
