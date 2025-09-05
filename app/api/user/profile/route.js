//app/api/user/profile/route.js

import { NextResponse } from "next/server"
import connectToDatabase from "@/lib/mongodb"
import User from "@/models/User"


export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ user: null }, { status: 200 });

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase()
    const body = await req.json()


    const { name, email, username, profilePicture, bio, upi } = body
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 })

    const user = await User.findOneAndUpdate(
      { email },
      { name, username, profilePicture, bio, upi, updatedAt: new Date() },
      { upsert: true, new: true }
    )

    return NextResponse.json({ success: true, user }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
