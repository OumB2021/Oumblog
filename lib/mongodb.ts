import mongoose from "mongoose";

// dotenv.config();
export const connectDB = async () => {
  const connectionUrl =
    "mongodb+srv://baarryoumar:jkjkjk94@cluster0.ztty5.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0";

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
