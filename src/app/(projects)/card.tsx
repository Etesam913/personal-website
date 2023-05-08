"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import GrayFade from "./gray-fade";
import "./projects.css";

export default function Card({
  projectName,
  children,
}: {
  projectName: string;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <>
          <div className='placeholder-box'></div>
          <GrayFade setIsOpen={setIsOpen} />
        </>
      )}
      <motion.div
        layout
        transition={{ type: "spring", damping: 13 }}
        className={isOpen ? "opened-card" : "card"}
      >
        <div className='card-img-container'>
          {isOpen ? (
            <div className='video-container'>
              <video
                preload='none'
                width={"100%"}
                height={"100%"}
                controls
                poster='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-poster.png'
                src='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-demo.mp4'
              />
            </div>
          ) : (
            <Image
              fill
              style={{ objectFit: "cover" }}
              alt='Image Showing XP Newtab Interface'
              priority
              src='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-poster.png'
            />
          )}
        </div>
        <div className='card-name-container'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='card-link'
            tabIndex={0}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {projectName}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
