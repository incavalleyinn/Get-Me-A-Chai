//models/User.js
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  username: { type: String, unique: true },
  profilePicture: String,
  upi: String,
  bio: { type: String, maxlength: 120 }, // 12 words * avg 10 chars
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);