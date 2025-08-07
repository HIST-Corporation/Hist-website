import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const CommentForm = () => {
   return (
      <div className="bg-slate-50 rounded-xl p-6">
         <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
         <form>
            <Textarea placeholder="Share your thoughts..." className="min-h-[120px] mb-4" />
            <div className="flex justify-end">
               <Button type="submit" className="bg-sapphire-600 hover:bg-sapphire-700">
                  Post Comment
               </Button>
            </div>
         </form>
      </div>
   );
};

export default CommentForm;
