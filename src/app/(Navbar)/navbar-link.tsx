"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import "./navbar.css";
import Link from "next/link";

export default function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.span
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      className='navbar-link-container'
    >
      <Link href={href} className='navbar-link'>
        {children}
      </Link>
    </motion.span>
  );
}
