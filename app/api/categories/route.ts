import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({});
    if (categories) {
      return new Response(JSON.stringify(categories), { status: 200 });
    }
    return new Response("No categories found", { status: 404 });
  } catch (error) {
    console.log("error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
