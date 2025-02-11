import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import { Category } from "@/models/Category";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const session = await auth();
    // if (!session || !session.user) {
    //   return new Response("User not authenticated", { status: 401 });
    // }
    // console.log(session);
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
