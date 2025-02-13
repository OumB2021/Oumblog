import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import { Post } from "@/models/Post";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const POST_PER_PAGE = 4;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") as string);
  const catSlug = searchParams.get("cat");

  try {
    await connectDB();
    if (!Category) {
      throw new Error("Category is not registered");
    }
    // Check if category
    const query: { category?: string } = {};
    if (catSlug) {
      const category = await Category.findOne({ title: catSlug });
      if (category) {
        query.category = category._id;
      } else {
        return new Response("Category not found", { status: 404 });
      }
    }

    // Get posts
    const posts = await Post.find(query)
      .populate("category", "title")
      .limit(POST_PER_PAGE + 1)
      .skip(POST_PER_PAGE * (page - 1))
      .sort({ createdAt: -1 });

    if (posts) {
      return new Response(JSON.stringify(posts), { status: 200 });
    }
    return new Response("No posts found", { status: 404 });
  } catch (error) {
    console.log("error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
