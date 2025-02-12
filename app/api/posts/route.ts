import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const POST_PER_PAGE = 4;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") as string);
  try {
    await connectDB();
    const posts = await Post.find()
      .populate("category", "title")
      .limit(POST_PER_PAGE + 1)
      .skip(POST_PER_PAGE * (page - 1));

    if (posts) {
      return new Response(JSON.stringify(posts), { status: 200 });
    }
    return new Response("No posts found", { status: 404 });
  } catch (error) {
    console.log("error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
