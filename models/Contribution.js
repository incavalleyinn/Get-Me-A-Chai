//models/Contributions.js
import mongoose from 'mongoose';

const ContributionSchema = new mongoose.Schema({
  fanName: String,
  fanUpi: String,
  amount: Number,
  message: { type: String, maxlength: 100 }, // 10 words * avg 10 chars
  creatorEmail: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contribution || mongoose.model("Contribution", ContributionSchema);
