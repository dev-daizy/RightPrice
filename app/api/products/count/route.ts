
import { NextResponse } from "next/server";
import Product from "@/lib/models/product.model";
import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";
import mongoose from "mongoose";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ count: 0, isPremium: false });
  }

  try {
    await connectToDB();

    const user = await User.findById(userId);
    if (!user) return NextResponse.json({ count: 0, isPremium: false });

    const count = await Product.countDocuments({ userId: new mongoose.Types.ObjectId(userId) });

    return NextResponse.json({ count, isPremium: user.isPremium });
  } catch (error) {
    console.error("Error fetching product count:", error);
    return NextResponse.json({ count: 0, isPremium: false });
  }
}