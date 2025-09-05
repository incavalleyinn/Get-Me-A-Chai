//app/api/contribute/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contribution from "@/models/Contribution";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    if (!body.creatorEmail) {
      return NextResponse.json({ error: "creatorEmail is required" }, { status: 400 });
    }
    const newContribution = await Contribution.create(body);
    return NextResponse.json(newContribution, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error saving contribution" }, { status: 500 });
  }
}