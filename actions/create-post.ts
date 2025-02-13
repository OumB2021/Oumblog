"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Not authenticated");
  }

  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  await connectDB();

  const newPost = await Post.create({
    slug: title.toLowerCase().replace(/ /g, "-"),
    title,
    description: content,
    image: "",
    views: 0,
    category: "some-category-id",
    user: session.user.email,
  });

  console.log("✅ Post created:", newPost.title);

  revalidatePath("/");
};
