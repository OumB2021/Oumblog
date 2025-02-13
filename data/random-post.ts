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
    { $unwind: "$category" }, // 🔹 Ensure category is an object, not an array
    { $unwind: "$user" }, // 🔹 Ensure user is an object, not an array
    {
      $project: {
        slug: 1,
        title: 1,
        description: 1,
        image: 1,
        views: 1,
        createdAt: 1,
        "category.title": 1, // 🔹 Include category title
        "category.color": 1, // 🔹 Include category color
        "user.name": 1,
        "user.image": 1,
      },
    },
  ]);

  return trendingPosts as (Omit<IPost, "user"> & {
    user: IUser;
    category: { title: string; color: string };
  })[];
}
