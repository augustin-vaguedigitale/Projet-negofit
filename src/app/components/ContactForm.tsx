"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Phone } from "lucide-react";

// Schema Zod (réutilisable côté serveur également)
export const contactSchema = z.object({
  full_name: z.string().min(4, "Nom requis (4 caractères min)"),
  email: z.email("Email invalide"),
  subject: z.string().min(2, "Objet requis"),
  phone: z.string().max(30, "Votre numéro de portable est requis"),
  message: z.string().min(10, "Message trop court (10 caractères min)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<null | "loading" | "success" | "error">(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("Server error", body);
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      // keep success message for a short moment, or remove if you like
      setTimeout(() => {
        if (status === "success") setStatus(null);
      }, 4500);
    }
  }

  return (
    <section className="contact-section py-12 md:py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white p-6 md:p-10 shadow-lg"
        >
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Contactez-nous</h2>
            
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* full_name */}
              <div>
                <label className="block text-sm mb-1">Nom et Prénom*</label>
                <input
                  {...register("full_name")}
                  className={`w-full bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    errors.full_name ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Votre Nom Complet"
                />
                {errors.full_name && (
                  <p className="mt-1 text-xs text-red-400">{errors.full_name.message}</p>
                )}
              </div>

              {/* email */}
              <div>
                <label className="block text-sm mb-1">Adresse Email*</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    errors.email ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Adresse Email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* subject */}
              <div>
                <label className="block text-sm mb-1">Objet*</label>
                <input
                  {...register("subject")}
                  className={`w-full bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    errors.subject ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Objet"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              {/* phone */}
              <div>
                <label className="block text-sm mb-1">Téléphone</label>
                <input
                  {...register("phone")}
                  className="w-full bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Téléphone"
                  
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                )}
              </div>

              {/* message - full width */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Message*</label>
                <textarea
                  {...register("message")}
                  rows={6}
                  className={`w-full bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    errors.message ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Écrivez ici votre message"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* submit */}
              <div className="md:col-span-2 flex items-center justify-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-3 bg-transparent border border-orange-400 text-orange-400 px-6 py-2 hover:bg-orange-400 hover:text-white transition"
                >
                  {status === "loading" ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : null}
                  Envoyer
                </button>
              </div>
            </div>
          </form>

          {/* status messages */}
          <div className="mt-4">
            {status === "success" && (
              <p className="text-sm text-green-400">Message envoyé avec succès. Nous vous répondrons bientôt.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Une erreur est survenue. Réessayez plus tard.</p>
            )}
          </div>
        </motion.div>

        {/* Contact Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className=" text-center gap-4 p-4 bg-white rounded-lg shadow-gray-400 shadow-2xl" >
            <div className="w-14 h-14 rounded-full bg-orange-100 mx-24 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600 pt-3">Adresse</p>
              <p className="text-sm font-medium">10 BP 3344 Abidjan 10, Marcory Espace La Madone</p>
            </div>
          </div>

          <div className="text-center gap-4 p-4 bg-white rounded-lg shadow-gray-400 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-24">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Email</p>
              <p className="text-sm font-medium">secretariat@negofit.org</p>
            </div>
          </div>

          <div className="text-center gap-4 p-4 bg-white rounded-lg shadow-gray-400 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-24 ">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Téléphone</p>
              <p className="text-sm font-medium">+225 0707013713</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
