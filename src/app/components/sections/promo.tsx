"use client";

import { motion } from "framer-motion";
import { Factory, Package, RefreshCcw, Ship } from "lucide-react";

const promos = [
  {
    id: "import",
    title: "IMPORTATIONS",
    description: "Commerce général de produits importés - Prestations diverses.",
    Icon: Factory,
  },
  {
    id: "export",
    title: "EXPORTATIONS",
    description:
      "Vente de matériels de travaux publics, de matériels agricoles, de matériels et équipements audiovisuels ainsi que divers autres.",
    Icon: Ship,
  },
  {
    id: "exchange",
    title: "ÉCHANGES",
    description:
      "Nous connectons les producteurs locaux aux marchés internationaux et assurons un approvisionnement fiable.",
    Icon: RefreshCcw,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const},
  },
};

export default function Promo() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <h2 id="promo-heading" className="sr-only">
            Nos services (import / export / échanges)
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {promos.map(({ id, title, description, Icon }) => (
              <motion.article
                key={id}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative overflow-hidden bg-white p-8 shadow-md hover:shadow-lg transition border border-gray-100 group cursor-pointer"
              >
                {/* Overlay rectangulaire animé */}
                <motion.div
                  variants={{
                    rest: { width: "24px", height: "24px", opacity: 1 },
                    hover: { width: "100%", height: "100%", opacity: 1 },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-2 right-2 bg-orange-400 z-0"
                />

                {/* Contenu */}
                <div className="relative z-10 flex flex-col items-start gap-4 transition-colors duration-500 group-hover:text-white">
                  {/* Icône */}
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center border border-gray-200 transition-colors duration-500 group-hover:border-white">
                    <Icon className="w-7 h-7 text-orange-500 transition-colors duration-500 group-hover:text-white" />
                  </div>

                  {/* Texte */}
                  <div>
                    <h3
                      id={`promo-${id}-title`}
                      className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-white"
                    >
                      
                      {title}
                    </h3>
                    <p className="mt-3 text-sm text-black leading-relaxed group-hover:text-white">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
