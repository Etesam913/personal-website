"use client";
import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      id="main-content"
      tabIndex={-1}
      key={pathname}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.main>
  );
}
