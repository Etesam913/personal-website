"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import GrayFade from "./gray-fade";
import "./projects.css";
import CardVideo from "./card-video";

export default function Card({
  projectName,
  videoPoster,
  videoSrc,
  children,
}: {
  projectName: string;
  videoPoster: string;
  videoSrc: string;
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
      <motion.div layout className={isOpen ? "opened-card" : "card"}>
        <motion.button
          whileHover={{ scale: isOpen ? 1 : 1.05 }}
          className='card-img-container'
          onClick={() => setIsOpen(true)}
        >
          <CardVideo src={videoSrc} isOpen={isOpen} poster={videoPoster} />
        </motion.button>
        <div className='card-name-container'>
          <motion.button
            layout
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='card-link'
            tabIndex={0}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {projectName}
          </motion.button>
          {isOpen && <div className='card-body'>{children}</div>}
        </div>
      </motion.div>
    </>
  );
}
