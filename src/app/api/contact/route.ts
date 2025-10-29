// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Schéma Zod pour validation
const contactSchema = z.object({
  full_name: z.string().min(4, "Nom requis (4 caractères min)"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(2, "Objet requis"),
  phone: z.string().max(30, "Numéro invalide"),
  message: z.string().min(10, "Message trop court (10 caractères min)"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);
   

    const data = await resend.emails.send({
      from: `Negofit <${process.env.FROM_EMAIL}>`,
      to: [process.env.TO_EMAIL!],
      subject: `📩 Nouveau message : ${validated.subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${validated.full_name}</p>
        <p><strong>Email :</strong> ${validated.email}</p>
        <p><strong>Téléphone :</strong> ${validated.phone}</p>
        <p><strong>Message :</strong></p>
        <p>${validated.message}</p>
      `,
    });

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: err.flatten() }, { status: 422 });
    }
    console.error("Erreur API contact :", err);
    return NextResponse.json({ ok: false, message: "Erreur serveur" }, { status: 500 });
  }
}
