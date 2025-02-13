import mongoose from "mongoose";

// dotenv.config();
export const connectDB = async () => {
  const connectionUrl = process.env.MONGODB_URI;

  if (!connectionUrl) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  try {
    await mongoose.connect(`${connectionUrl}`);
    console.log("✅ Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
