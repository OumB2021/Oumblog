import Link from "next/link";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import SingleComment from "./single-comment";

function CommentSection() {
  const status = "authenticated";

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-lg md:text-2xl font-bold">Comments</h1>
      {/* Comment input area */}
      {status === "authenticated" ? (
        <div className="flex flex-col mt-4">
          <Textarea
            placeholder="Write a comment..."
            className="w-full bg-white/90 focus-visible:ring-1 focus-visible:ring-ring h-[200px] placeholder:md:text-base placeholder:text-sm"
          />
          <button className="bg-zinc-800 px-4 py-[10px] text-zinc-50 size-fit rounded-md mt-4 self-end">
            Submit
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="bg-zinc-800 px-4 py-[10px] text-zinc-50 size-fit rounded-md mt-4"
        >
          Login to write a comment
        </Link>
      )}

      {/* Comment list */}
      <div className="flex flex-col gap-4 mt-10">
        {Array.from({ length: 4 }).map((post, index) => (
          <SingleComment key={index} />
        ))}
      </div>
    </div>
  );
}
export default CommentSection;
