"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = 
        target.tagName === "BUTTON" || 
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.closest("[role='button']") !== null;
      
      setIsHovering(isButton);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 border-2 transition-colors ${
        isHovering ? "border-secondary" : "border-primary"
      }`}
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 15),
        y: mousePosition.y - (isHovering ? 20 : 15),
        width: isHovering ? 40 : 30,
        height: isHovering ? 40 : 30,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}