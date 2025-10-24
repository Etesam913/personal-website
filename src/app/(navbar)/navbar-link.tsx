"use client";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import "./index.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const path = usePathname();
  const isActiveLink = path === href;

  return (
    <motion.span
      tabIndex={-1}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      className="navbar-link-container"
    >
      <Link
        aria-current={isActiveLink ? "page" : undefined}
        href={href}
        className="navbar-link"
        data-active-page={isActiveLink}
      >
        {children}
      </Link>
    </motion.span>
  );
}
