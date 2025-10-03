import { NextResponse } from "next/server";
import pb from "@/lib/pocketBase/pocketbase";

function checkAuth(req: Request) {
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${process.env.API_KEY_SECRET}`;
}

// ✅ Créer un produit (avec ou sans image)
export async function POST(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const contentType = req.headers.get("content-type") || "";

    let record;
    if (contentType.includes("multipart/form-data")) {
      // Si tu envoies un fichier (ex: via dashboard custom)
      const formData = await req.formData();
      record = await pb.collection("products").create(formData);
    } else {
      // Sinon simple JSON
      const body = await req.json();
      record = await pb.collection("products").create(body);
    }

    return NextResponse.json({ ok: true, data: record });
  } catch (error: any) {
    console.error("Create error:", error.message || error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}

// ✅ Mettre à jour un produit
export async function PUT(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const id = formData.get("id")?.toString();
      if (!id) throw new Error("Missing product id");
      const data = formData;
      const record = await pb.collection("products").update(id, data);
      return NextResponse.json({ ok: true, data: record });
    } else {
      const body = await req.json();
      const { id, ...data } = body;
      if (!id) throw new Error("Missing product id");
      const record = await pb.collection("products").update(id, data);
      return NextResponse.json({ ok: true, data: record });
    }
  } catch (error: any) {
    console.error("Update error:", error.message || error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}

// ✅ Supprimer un produit
export async function DELETE(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    if (!id) throw new Error("Missing product id");

    await pb.collection("products").delete(id);
    return NextResponse.json({ ok: true, message: "Product deleted" });
  } catch (error: any) {
    console.error("Delete error:", error.message || error);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}


