// app/api/user/upgrade/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model"; // make sure your user model exists

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    await connectToDB();

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.isPremium = true;
    await user.save();

    return NextResponse.json({ message: "User upgraded to premium" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to upgrade user" }, { status: 500 });
  }
}

