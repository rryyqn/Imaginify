//clerkId, email, username, photo, firstName, lastName, planId, creditBalance

import { model, models, Schema } from "mongoose";

interface User {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: string;
  creditBalance: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 20 },
});

const User = models?.User || model("User", UserSchema);
export default User;
