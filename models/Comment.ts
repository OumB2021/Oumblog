import { IPost } from "./Post";
import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";

export interface IComment extends Document {
  content: string;
  user: IUser;
  post: mongoose.Schema.Types.ObjectId | IPost;
  createdAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Comment =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);
