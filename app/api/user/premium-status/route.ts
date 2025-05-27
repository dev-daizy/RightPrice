import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose"; 
import User from "@/lib/models/user.model"; // 

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID missing" }, { status: 400 });
  }

  await connectToDB();

  const user = await User.findById(userId).select("isPremium");

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ isPremium: user.isPremium });
}
