"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil"},
  { href: "#a-propos", label: "A propos" },
  { href: "/pages/products", label: "Produits" },
  { href: "#partners", label: "Partenaires" },
  { href: "/pages/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      {/* Bandeau supérieur */}
      <div className="bg-[#0B0D26] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <Mail className="text-orange-600"/>
            <span>secretariat@negofit.org</span>
            <span className="hidden md:inline">|</span>
            <MapPin className="text-orange-600"/>
            <span>10 BP 3344 Abidjan 10, Marcory Espace La Madone</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span>Téléphone : +225 0707013713</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Image
              src="/assets/img/logo1.svg"
              width={220}
              height={60}
              alt="Negofit Logo"
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Menu desktop */}
        <nav className="hidden md:flex flex-1 justify-between ms-28">
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                className="relative group "
                whileHover={{ scale: 1.05 }}
              >
                {/* Trait orange animé */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-5"></span>

                <Link
                  href={link.href}
                  className="pl-6 hover:text-orange-500 transition text-gray-500"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Menu mobile */}
       
        {/* Menu mobile button */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-7 w-7 text-orange-500" /> : <Menu className="h-7 w-7 text-orange-500" />}
          </button>
        </div>
      </div>

      {/* Overlay Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mx-auto mt-2 w-[90%] max-w-sm rounded-lg bg-blue-900/90 text-white py-6 z-40"
          >
            <nav>
              <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="w-full text-center border-b border-white/30 pb-2"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full hover:text-orange-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      
      
    </header>
  );
}
