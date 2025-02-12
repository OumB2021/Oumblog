import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";

export interface IPost extends Document {
  slug: string;
  title: string;
  description: string;
  image: string;
  views: number;
  category: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId | IUser;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    views: { type: Number, default: 0 },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Post =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
