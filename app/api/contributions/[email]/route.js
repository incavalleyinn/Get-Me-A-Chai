//api/contributions/[email]/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contribution from "@/models/Contribution";
import Email from "next-auth/providers/email";

export async function GET(req, { params }) {
  const { email } = await params;

  try {
    await connectDB();
    const contributions = await Contribution.find({ creatorEmail: email }).sort({ createdAt: -1 });
    return NextResponse.json(contributions, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch contributions" }, { status: 500 });
  }
} 
