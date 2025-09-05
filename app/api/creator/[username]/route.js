//app/creator/[username]/route.js
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req, { params }) {
  await connectToDatabase();
  
  const { username } = await params;

  const user = await User.findOne({ username });

  if (!user) {
    return new Response(JSON.stringify({ error: "Creator not found" }), { status: 404 });
  }

  // Return public info + email for contributions
  const { name, username: uname, profilePicture, upi, email, bio } = user;

  return new Response(JSON.stringify({ name, username: uname, profilePicture, upi, email, bio }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
