import { connectDB } from "@/lib/mongodb";
import { IPost, Post } from "@/models/Post";
import { IUser } from "@/models/User";

export async function getTrendingPosts() {
  await connectDB();

  const trendingPosts = await Post.find()
    .sort({ views: -1 })
    .limit(5)
    .populate({ path: "category", select: "title color" })
    .populate({ path: "user", select: "name" });

  return trendingPosts as (Omit<IPost, "user"> & { user: IUser })[];
}
