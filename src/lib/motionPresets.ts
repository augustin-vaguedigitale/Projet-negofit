import { Variants } from "framer-motion";

// 🎯 Container qui applique un effet de cascade
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🎨 Courbes easing recommandées
export const easings = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeIn: [0.12, 0, 0.39, 0] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
};
// ✨ Fade In vers le bas
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.easeOut },
  },
};

// ✨ Fade In vers le haut
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// 👉 Variante fadeIn vers la gauche
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// 👉 Variante fadeIn vers la droite
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// 🟠 Hover underline (trait orange qui s’allonge)
export const hoverUnderline: Variants = {
  rest: { width: 0, opacity: 0 },
  hover: {
    width: "20px",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// 🟠 Overlay rectangulaire fluide (ex: Promo cards)
export const cardOverlay: Variants = {
  rest: { width: "24px", height: "24px", opacity: 1 },
  hover: { width: "100%", height: "100%", opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.easeOut },
  },
};
