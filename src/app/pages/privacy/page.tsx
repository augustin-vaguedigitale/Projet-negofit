"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MoveDownRight } from "lucide-react";
type AccordionItem = {
  id: string;
  title: string;
  content: string | JSX.Element;
};

const items: AccordionItem[] = [
  {
    id: "1",
    title: "Dernière mise à jour : 16 août 2024",
    content: (
      <p>
        Chez Negofit, nous attachons une grande importance à la protection de vos données personnelles.
        Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site.
      </p>
    ),
  },
  {
    id: "2",
    title: "Informations d'identification personnelle",
    content: (
      <p>
        Lorsque vous créez un compte sur Negofit, nous collectons des informations telles que votre nom,
        adresse e-mail, numéro de téléphone, adresse postale, et toute autre information que vous choisissez de fournir. <br />
        <b>Informations d'utilisation :</b> Nous recueillons automatiquement certaines informations lorsque vous visitez notre site. <br />
        <b>Cookies :</b> Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez les désactiver via votre navigateur.
      </p>
    ),
  },
  {
    id: "3",
    title: "Conditions Générales d'Utilisation",
    content: (
      <p>
        Nous nous réservons le droit de modifier ces CGU à tout moment, en fonction des évolutions légales.
        Nous pouvons suspendre, résilier ou limiter l'accès à notre site pour des raisons de maintenance ou autres. <br />
        Le contenu (textes, logos, images) est la propriété de Negofit et protégé par les lois sur la propriété intellectuelle.
      </p>
    ),
  },
];

export default function Privacy() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-50 mt-18" id="privacy">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-orange-600 font-medium">Négofit Sarl</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181D4E] mt-2">
            Politique de Confidentialité de Negofit
          </h2>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Accordéon */}
          <div className="space-y-4">
            {items.map(({ id, title, content }) => (
              <div
                key={id}
                className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleItem(id)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 text-left font-semibold text-gray-900"
                >
                  {title}
                  <motion.span
                    animate={{ rotate: openItem === id ? -80 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-500"
                  >
                    <MoveDownRight />
                  </motion.span>
                </button>

                {/* Contenu animé */}
                <AnimatePresence initial={false}>
                  {openItem === id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-[700] text-sm leading-relaxed">
                        {content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 flex items-center justify-center">
              <Image src="/assets/img/logo1.svg" alt="Privacy Illustration" width={600} height={300} className="object-contain" /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
