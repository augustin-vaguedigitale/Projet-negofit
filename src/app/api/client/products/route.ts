import pb from "@/lib/pocketBase/pocketbase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const records = await pb.collection("products").getFullList({ sort: "-created" });

    const data = records.map((rec) => ({
      id: rec.id,
      title: rec.title,
      description: rec.description,
      imageUrl: rec.image
        ? `${process.env.NEXT_PUBLIC_PB_URL}/api/files/products/${rec.id}/${rec.image}`
        : null,
    }));

    return NextResponse.json(data);// ✅ on renvoie directement un tableau
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
