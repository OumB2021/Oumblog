import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  createdAt: Date;
}

// ✅ Ensure Mongoose is connected before defining the model
const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
  },
  { timestamps: true }
);

// ✅ Use a global variable to prevent model redefinition
export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
