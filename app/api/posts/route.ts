import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";
import { Post } from "@/models/Post";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const session = await auth();
    // if (!session || !session.user) {
    //   return new Response("User not authenticated", { status: 401 });
    // }

    await connectDB();
    const posts = await Post.find({});
    if (posts) {
      return new Response(JSON.stringify(posts), { status: 200 });
    }
    return new Response("No posts found", { status: 404 });
  } catch (error) {
    console.log("error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
