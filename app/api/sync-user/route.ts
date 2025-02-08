import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth(); // Get userId from Clerk
    console.log("🔹 Authenticated User ID:", userId);

    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Check if user exists in Prisma
    let user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.log("🚀 User not found in Prisma, fetching from Clerk...");
      console.log("clerkClient", clerkClient);

      //   // Create the user in Prisma
      //   user = await prisma.user.create({
      //     data: {
      //       id: clerkUser.id,
      //       firstName: clerkUser.firstName || "Unknown",
      //       lastName: clerkUser.lastName || "User",
      //       email: clerkUser.emailAddresses[0]?.emailAddress || "",
      //       imageUrl: clerkUser.imageUrl || "",
      //     },
      //   });

      console.log("✅ New user created in Prisma:", user);
    }

    return NextResponse.json({ message: "User found", user }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
