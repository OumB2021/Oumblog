import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) {
    return new Response("Invalid slug", { status: 400 });
  }
  const decodedSlug = decodeURIComponent(slug.trim());
  try {
    await connectDB();
    const post = await Post.findOne({ decodedSlug }).populate(
      "category",
      "title"
    );
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
