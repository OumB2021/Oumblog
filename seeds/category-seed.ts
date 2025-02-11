import mongoose from "mongoose";
import { Category } from "@/models/Category";
import { connectDB } from "@/lib/mongodb";

// Categories with predefined colors & images
const categoryData = [
  {
    slug: "style",
    title: "Style",
    color: "red",
    image: "/style.png",
  },
  {
    slug: "culture",
    title: "Culture",
    color: "yellow",
    image: "/culture.png",
  },
  {
    slug: "coding",
    title: "Coding",
    color: "blue",
    image: "/coding.png",
  },
  {
    slug: "travel",
    title: "Travel",
    color: "purple",
    image: "/travel.png",
  },
  {
    slug: "food",
    title: "Food",
    color: "emerald",
    image: "/food.png",
  },
  {
    slug: "fashion",
    title: "Fashion",
    color: "orange",
    image: "/fashion.png",
  },
];

const seedCategories = async () => {
  try {
    await connectDB(); // Connect to MongoDB

    // Check if categories already exist
    const existingCategories = await Category.countDocuments();
    if (existingCategories > 0) {
      console.log("⚠️ Categories already exist. Skipping seeding.");
      process.exit(0);
    }

    await Category.insertMany(categoryData);
    console.log("🚀 Successfully added 6 categories!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding categories:", error);
    process.exit(1);
  }
};

// Run the script
seedCategories();
