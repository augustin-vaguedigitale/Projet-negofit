"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "#a-propos", label: "A propos" },
  { href: "#produits", label: "Produits" },
  { href: "#partners", label: "Partenaires" },
  { href: "/pages/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0D26] text-white pt-16 pb-6" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Haut du footer */}
        <div className="grid md:grid-cols-3 gap-20 mb-16">
          {/* Logo + description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 "
          >
            <Link href="/" className="block">
              <Image
                src="/assets/img/logo_footer.svg"
                alt="Negofit Logo"
                width={220}
                height={60}
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              NEGOFIT SARL est votre partenaire de confiance, en négoce
              technique et en fourniture industrielle basée à Abidjan.
            </p>
          </motion.div>

          {/* Adresse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3 mx-26"
          >
            <h5 className="text-lg font-semibold text-slate-100">Adresse</h5>
            <p className="text-gray-600 text-sm pt-4">
              10 BP 3344 Abidjan  <br></br>10-Bureau : Abidjan <br/>Marcory Bd Gabon<br/> Face Espace<br/>
              LA MADONE
            </p>
            <p className="text-gray-300 text-sm pt-3">
              Email :{" "}
              <a
                href="mailto:secretariat@negofit.org"
                className="text-gray-300"
              >
                secretariat@negofit.org
              </a>
            </p>
            <p className="text-gray-300 text-sm">Tél : +225 0707013713</p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 "
          >
            <h5 className="text-lg pb-4 ms-3 font-semibold">Liens</h5>
            <ul className="flex flex-col space-y-3 text-gray-600 text-sm">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.href}
                  className="relative group pl-6"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Trait orange animé */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-5"></span>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bas du footer */}
        <div className="border-t shadow-2xl bg-transparent border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Negofit SARL. Tous droits réservés.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 md:mt-0"
          >
            <Link
              href="/pages/privacy"
              className="hover:text-orange-400 mr-2"
            >
              Politique de Confidentialité
            </Link>
            |
            <Link
              href="/pages/privacy"
              className="hover:text-orange-400 ml-2"
            >
              Conditions Générales d&apos;Utilisation
            </Link>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
