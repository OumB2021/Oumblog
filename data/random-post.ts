import { connectDB } from "@/lib/mongodb";
import { IPost, Post } from "@/models/Post";
import { IUser } from "@/models/User";

export async function getTopPicked() {
  await connectDB();

  const trendingPosts = await Post.aggregate([
    { $sample: { size: 5 } }, // 🔹 Select 5 random posts
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$category" },
    { $unwind: "$user" },
    {
      $project: {
        slug: 1,
        title: 1,
        description: 1,
        image: 1,
        views: 1,
        "category.title": 1,
        "user.name": 1,
        "user.image": 1,
        createdAt: 1,
      },
    },
  ]);

  return trendingPosts as (Omit<IPost, "user"> & { user: IUser })[];
}
