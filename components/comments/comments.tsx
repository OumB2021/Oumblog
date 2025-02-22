"use client";

import Link from "next/link";
import SingleComment from "./single-comment";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Loader2 } from "lucide-react";
import { IComment } from "@/models/Comment";
import CommentForm from "./comment-form";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
};
function CommentSection({ slug }: { slug: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const { status } = useSession();
  const { data, isLoading } = useSWR(
    `${baseUrl}/api/comments?postSlug=${slug}`,
    fetcher,
    { refreshInterval: 3000 }
  );

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-lg md:text-2xl font-bold">Comments</h1>
      {/* Comment input area */}
      {status === "loading" ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin text-muted-foreground" />
        </div>
      ) : status === "authenticated" ? (
        <CommentForm slug={slug} />
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
