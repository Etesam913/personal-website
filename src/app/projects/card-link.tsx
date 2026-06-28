"use client";
import { motion, useReducedMotion } from "motion/react";

export default function CardLink({
  projectName,
  href,
}: {
  projectName: string;
  href: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
      whileFocus={prefersReducedMotion ? undefined : { scale: 1.1 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      className="card-link"
    >
      {projectName}
    </motion.a>
  );
}
