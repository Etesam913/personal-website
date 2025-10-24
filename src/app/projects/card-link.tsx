"use client";
import { motion } from "motion/react";

export default function CardLink({
  projectName,
  href,
}: {
  projectName: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="card-link"
      tabIndex={0}
    >
      {projectName}
    </motion.a>
  );
}
