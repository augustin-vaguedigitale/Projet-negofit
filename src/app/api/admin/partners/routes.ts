import { NextResponse } from "next/server";
import pb from "@/lib/pocketBase/pocketbase";

function checkAuth(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth || auth !== `Bearer ${process.env.API_KEY_SECRET}`) {
    return false;
  }
  return true;
}

export async function POST(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const record = await pb.collection("partners").create(body);
    return NextResponse.json({ ok: true, record });
  } catch (error) {
    console.error("Create error:", error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, ...data } = body;
    const record = await pb.collection("partners").update(id, data);
    return NextResponse.json({ ok: true, record });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    await pb.collection("partners").delete(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
