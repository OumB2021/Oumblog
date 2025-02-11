import "server-only";

import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";

export async function getCategories() {
  // Ensure the database connection is established
  await connectDB();

  // Get the authenticated user session
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("User not authenticated"); // Throw an error for server-side handling
  }

  try {
    // Fetch categories with their associated posts
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    throw new Error("Error fetching categories");
  }
}
