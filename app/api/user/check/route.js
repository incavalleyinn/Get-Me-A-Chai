// app/api/user/check/route.js
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ exists: false }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // ✅ Include username, profilepic, and id
    return new Response(JSON.stringify({
      exists: true,
      username: user.username || null,
      profilepic: user.profilePicture || null,
      id: user._id.toString(),
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Check profile error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
