import mongoose, { Schema, Document, Model } from "mongoose";
import { IPost } from "./Post";

export interface ICategory extends Document {
  slug: string;
  title: string;
  color: string;
  image: string;
  posts: IPost[];
}

const CategorySchema = new Schema<ICategory>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

// Ensure the model is registered only once
const Category: Model<ICategory> = mongoose.model("Category", CategorySchema);

export default Category;
