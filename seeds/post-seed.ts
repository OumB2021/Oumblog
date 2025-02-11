import mongoose from "mongoose";
import { Post } from "@/models/Post";
import { User } from "@/models/User";
import { Category } from "@/models/Category";
import { connectDB } from "@/lib/mongodb";

// 20 Blog Posts with Real Pexels Image URLs
const postData = [
  {
    slug: "ultimate-style-guide",
    title: "The Ultimate Style Guide for 2025",
    description:
      "Fashion trends evolve every year, and 2025 is no exception. This ultimate guide covers everything from streetwear to high-end fashion, helping you curate a wardrobe that blends comfort with cutting-edge style.",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
    categorySlug: "style",
  },
  {
    slug: "culture-shock-explained",
    title: "Culture Shock: What It Means & How to Adapt",
    description:
      "Moving to a new country or traveling abroad can be an exciting yet challenging experience. Culture shock affects many individuals, often leading to feelings of disorientation and homesickness.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    categorySlug: "culture",
  },
  {
    slug: "best-coding-practices",
    title: "10 Best Coding Practices for Clean Code",
    description:
      "Writing clean, maintainable code is crucial for any developer. This guide breaks down the top 10 coding best practices, including proper naming conventions, DRY principles, and efficient debugging techniques.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    categorySlug: "coding",
  },
  {
    slug: "travel-destinations-2025",
    title: "Top 10 Travel Destinations for 2025",
    description:
      "From hidden gems to must-visit tourist hotspots, 2025 brings a fresh wave of travel inspiration. Whether you're seeking adventure in the mountains or relaxation on tropical beaches, we've got you covered.",
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    categorySlug: "travel",
  },
  {
    slug: "healthy-food-habits",
    title: "5 Healthy Eating Habits for a Better Lifestyle",
    description:
      "Maintaining a nutritious diet is one of the best ways to boost your overall well-being. This guide explores five fundamental eating habits that can transform your health and energy levels.",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    categorySlug: "food",
  },
  {
    slug: "fashion-trends-2025",
    title: "Top Fashion Trends You Should Know in 2025",
    description:
      "Fashion is an ever-changing industry, and staying ahead of the trends can be both exciting and overwhelming. Discover the bold styles and sustainable choices that will define this year.",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categorySlug: "fashion",
  },
  {
    slug: "coding-interview-tips",
    title: "How to Ace Your Next Coding Interview",
    description:
      "From technical questions to behavioral insights, this guide walks you through essential tips and tricks to succeed in coding interviews and land your dream job.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    categorySlug: "coding",
  },
  {
    slug: "street-food-guide",
    title: "The Ultimate Guide to Street Food Around the World",
    description:
      "Street food is a gateway to culture. Explore the best street eats from Asia to South America, and discover what makes each cuisine so unique.",
    image: "https://images.pexels.com/photos/1329475/pexels-photo-1329475.jpeg",
    categorySlug: "food",
  },
  {
    slug: "digital-nomad-lifestyle",
    title: "Living the Digital Nomad Lifestyle: Pros & Cons",
    description:
      "Ever dreamed of working from anywhere? Explore the benefits and challenges of being a digital nomad and how to make it work for you.",
    image: "https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg",
    categorySlug: "travel",
  },
  {
    slug: "sustainable-fashion",
    title: "Why Sustainable Fashion Matters",
    description:
      "Fast fashion is harming the planet. Learn about sustainable alternatives and how you can shop more ethically.",
    image: "https://images.pexels.com/photos/1993766/pexels-photo-1993766.jpeg",
    categorySlug: "fashion",
  },
];

const seedPosts = async () => {
  try {
    await connectDB();

    const users = await User.find();
    if (users.length === 0) {
      console.log(
        "❌ No users found. Please run 'npx tsx seed-users.ts' first."
      );
      process.exit(1);
    }

    for (const post of postData) {
      const category = await Category.findOne({ slug: post.categorySlug });
      if (!category) {
        console.log(`❌ Category not found: ${post.categorySlug}`);
        continue;
      }

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

    console.log("🚀 All 20 posts added successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding posts:", error);
    process.exit(1);
  }
};

seedPosts();
