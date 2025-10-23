import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

// Schéma Zod pour valider les données
const contactSchema = z.object({
  full_name: z.string().min(4, "Nom requis (4 caractères min)"),
  email: z.email("Email invalide"),
  subject: z.string().min(2, "Objet requis"),
  phone: z.string().max(30, "Votre numéro de portable est requis"),
  message: z.string().min(10, "Message trop court (10 caractères min)"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    // Créer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true pour 465, false pour 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu du mail
    const mailOptions = {
      from: `"Site Web Negofit" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL, // adresse de réception
      subject: `Nouveau message : ${validated.subject}`,
      text: `
        Nom : ${validated.full_name}
        Email : ${validated.email}
        Téléphone : ${validated.phone || "non fourni"}
        Message :
        ${validated.message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><b>Nom :</b> ${validated.full_name}</p>
        <p><b>Email :</b> ${validated.email}</p>
        <p><b>Téléphone :</b> ${validated.phone || "non fourni"}</p>
        <p><b>Objet :</b> ${validated.subject}</p>
        <p><b>Message :</b><br/>${validated.message}</p>
      `,
    };

    // Envoi
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true, message: "Email envoyé avec succès" }, { status: 200 });
  } catch (err:any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: err.flatten() }, { status: 422 });
    }
    console.error("Erreur API contact:", err.message, err);
    return NextResponse.json({ ok: false, message: "Erreur serveur" }, { status: 500 });
  }
}
