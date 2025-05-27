import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  emailVerified: Date,
  image: String,
  isPremium: { type: Boolean, default: false },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;