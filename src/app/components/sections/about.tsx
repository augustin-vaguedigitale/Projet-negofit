"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckSquare, Phone, CalendarDays, Square } from "lucide-react";

// Variants globaux
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export default function About() {
  return (
    <section id="a-propos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="flex justify-center"
          >
            <Image
              src="/assets/img/about/usine2.jpg"
              alt="usine"
              width={600}
              height={600}
              className="shadow-lg object-cover"
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.5}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0.7}
              className="text-2xl md:text-4xl font-semibold text-indigo-950"
            >
              Négoce Technique En Fourniture Industrielle
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={0.9}
              className="text-gray-500 leading-relaxed inline-flex md:flex justify-between"
            >
              {/*Petit carré*/}
             <span><Square size={16} className="bg-orange-400 text-orange-400 mx-3 mt-1"/></span>
              Negofit SARL, située à Abidjan Marcory, est un leader en Côte
              d'Ivoire dans le négoce technique et la fourniture industrielle.
              Nous offrons une gamme complète d'équipements de laboratoire, de
              cantine, de tuyauterie, et de machines pour les industries
              agroalimentaires et chimiques.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={1.1}
              className="text-gray-500 leading-relaxed"
            >
              Nos solutions innovantes et notre expertise nous permettent de
              répondre aux besoins de nos clients avec professionnalisme et
              excellence.
            </motion.p>

            {/* Liste avec icônes */}
            <motion.ul
              variants={fadeInUp}
              custom={1.3}
              className="space-y-3 mt-6 block lg:flex justify-between"
            >
              <li className="flex items-center gap-3">
                <CheckSquare className="text-orange-500 w-5 h-5" />
                <span>Industrie agroalimentaire</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckSquare className="text-orange-500 w-5 h-5" />
                <span>Industrie chimique</span>
              </li>
            </motion.ul>

            {/* Contact infos */}
            <motion.div
              variants={fadeInUp}
              custom={1.5}
              className="grid sm:grid-cols-2 gap-6 mt-8"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-orange-500">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="text-gray-500">Appelez-nous :</h5>
                  <p className="text-gray-700">+225 21 34 34 34</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-orange-500">
                  <CalendarDays className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="text-gray-500">Disponible :</h5>
                  <p className="text-gray-700">Lundi au Samedi<br />9h - 18h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
