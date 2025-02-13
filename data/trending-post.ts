import { connectDB } from "@/lib/mongodb";
import { IPost, Post } from "@/models/Post";
import { IUser, User } from "@/models/User";

export async function getTrendingPosts() {
  await connectDB();
  if (!User) {
    throw new Error("User is not registered");
  }
  const trendingPosts = await Post.find()
    .sort({ views: -1 })
    .limit(5)
    .populate({ path: "category", select: "title color" })
    .populate({ path: "user", select: "name image" });

  return trendingPosts as (Omit<IPost, "user"> & { user: IUser })[];
}
