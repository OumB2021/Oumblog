import mongoose from "mongoose";
import { Post } from "@/models/Post";
import { User } from "@/models/User";
import { Category } from "@/models/Category";
import { connectDB } from "@/lib/mongodb";

// Random post data with longer descriptions
const postData = [
  {
    slug: "ultimate-style-guide",
    title: "The Ultimate Style Guide for 2025",
    description:
      "Fashion trends evolve every year, and 2025 is no exception. This ultimate guide covers everything from streetwear to high-end fashion, helping you curate a wardrobe that blends comfort with cutting-edge style. Whether you're looking to upgrade your casual outfits or add statement pieces to your collection, we've got you covered with expert tips and style inspirations.",
    image: "/style-guide.jpg",
    categorySlug: "style",
  },
  {
    slug: "culture-shock-explained",
    title: "Culture Shock: What It Means & How to Adapt",
    description:
      "Moving to a new country or traveling abroad can be an exciting yet challenging experience. Culture shock affects many individuals, often leading to feelings of disorientation and homesickness. In this article, we explore the different stages of culture shock, provide insights from people who have successfully adapted to new environments, and offer actionable tips to help you feel at home anywhere in the world.",
    image: "/culture-shock.jpg",
    categorySlug: "culture",
  },
  {
    slug: "best-coding-practices",
    title: "10 Best Coding Practices for Clean Code",
    description:
      "Writing clean, maintainable code is crucial for any developer, whether you're working on personal projects or collaborating with a team. This guide breaks down the top 10 coding best practices, including proper naming conventions, DRY (Don't Repeat Yourself) principles, efficient debugging techniques, and ways to optimize performance. By following these tips, you'll improve code readability, reduce bugs, and enhance software maintainability.",
    image: "/coding-best-practices.jpg",
    categorySlug: "coding",
  },
  {
    slug: "travel-destinations-2025",
    title: "Top 10 Travel Destinations for 2025",
    description:
      "From hidden gems to must-visit tourist hotspots, 2025 brings a fresh wave of travel inspiration. Whether you're seeking adventure in the mountains, relaxation on tropical beaches, or cultural experiences in historic cities, we've curated the top 10 destinations for your next trip. Find out which places should be on your bucket list, along with travel tips, budget recommendations, and exclusive insights from expert travelers.",
    image: "/travel-2025.jpg",
    categorySlug: "travel",
  },
  {
    slug: "healthy-food-habits",
    title: "5 Healthy Eating Habits for a Better Lifestyle",
    description:
      "Maintaining a nutritious diet is one of the best ways to boost your overall well-being. This guide explores five fundamental eating habits that can transform your health, including meal planning, mindful eating, balancing macronutrients, and incorporating whole foods into your diet. Learn how small changes in your daily routine can lead to long-term benefits, including increased energy, better digestion, and improved mental clarity.",
    image: "/healthy-food.jpg",
    categorySlug: "food",
  },
  {
    slug: "fashion-trends-2025",
    title: "Top Fashion Trends You Should Know in 2025",
    description:
      "Fashion is an ever-changing industry, and staying ahead of the trends can be both exciting and overwhelming. In 2025, we're seeing a mix of nostalgic influences and futuristic designs take center stage. From sustainable clothing choices to bold patterns and textures, this article dives deep into the styles that will define the year. Stay ahead of the game with expert fashion forecasts and styling tips to keep your wardrobe fresh and trendy.",
    image: "/fashion-trends.jpg",
    categorySlug: "fashion",
  },
];

const seedPosts = async () => {
  try {
    await connectDB(); // Connect to MongoDB

    const users = await User.find();
    if (users.length === 0) {
      console.log("❌ No users found. Please create a user first.");
      process.exit(1);
    }

    for (const post of postData) {
      // Find category by slug
      const category = await Category.findOne({ slug: post.categorySlug });

      if (!category) {
        console.log(`❌ Category not found: ${post.categorySlug}`);
        continue;
      }

      // Pick a random user for each post
      const randomUser = users[Math.floor(Math.random() * users.length)];

      const newPost = new Post({
        slug: post.slug,
        title: post.title,
        description: post.description,
        image: post.image,
        category: category._id,
        user: randomUser._id,
      });

      await newPost.save();
      console.log(`✅ Created post: ${post.title}`);
    }

    console.log("🚀 All posts added successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding posts:", error);
    process.exit(1);
  }
};

// Run the script
seedPosts();
