import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectToDatabase();
  const users = await User.find({})
    .sort({ createdAt: -1 })
    .limit(4)
    .select("username profilePicture createdAt");
  return Response.json(users, { status: 200 });
}