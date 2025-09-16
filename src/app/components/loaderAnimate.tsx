"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderAnimate() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement : 1.5s
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cercle 1 */}
          <motion.div
            className="absolute rounded-full border-2 border-orange-600"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, 10, 60, 70],
              height: [0, 10, 60, 70],
              opacity: [0, 1, 0.1, 0],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          {/* Cercle 2 (décalé d’1s) */}
          <motion.div
            className="absolute rounded-full border-2 border-orange-600"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, 10, 60, 70],
              height: [0, 10, 60, 70],
              opacity: [0, 1, 0.1, 0],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
          />

           {/* Cercle 3 (décalé d’1s) */}
          <motion.div
            className="absolute rounded-full border-2 border-orange-600"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, 10, 60, 70],
              height: [0, 10, 60, 70],
              opacity: [0, 1, 0.1, 0],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
          />
        </motion.div>
        
      )}
    </AnimatePresence>
  );
}
