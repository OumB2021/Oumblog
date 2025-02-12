"use client";

import Link from "next/link";
import { Textarea } from "../ui/textarea";
import SingleComment from "./single-comment";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Loader2 } from "lucide-react";
import { IComment } from "@/models/Comment";
import { createComment } from "@/actions/create-comment";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
};
function CommentSection({ slug }: { slug: string }) {
  const { status } = useSession();
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${slug}`,
    fetcher,
    { refreshInterval: 3000 }
  );

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-lg md:text-2xl font-bold">Comments</h1>
      {/* Comment input area */}
      {status === "authenticated" ? (
        <form className="flex flex-col mt-4" action={createComment}>
          <input type="hidden" name="slug" value={slug} />
          <Textarea
            name="comment"
            placeholder="Write a comment..."
            className="w-full bg-white/90 focus-visible:ring-1 focus-visible:ring-ring h-[200px] placeholder:md:text-base placeholder:text-sm"
          />
          <button
            className="bg-zinc-800 px-4 py-[10px] text-zinc-50 size-fit rounded-md mt-4 self-end"
            type="submit"
          >
            Submit
          </button>
        </form>
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
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin text-muted-foreground" />
          </div>
        ) : data.length > 0 ? (
          <div className="flex flex-col gap-3">
            {[...data].reverse().map((item: IComment) => (
              <SingleComment key={item.content} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No comments on this post
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default CommentSection;
