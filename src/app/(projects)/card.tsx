"use client";

import { motion } from "framer-motion";
import "./projects.css";
import CardVideo from "./card-video";

export default function Card({
  projectName,
  videoPoster,
  videoSrc,
  href,
}: {
  projectName: string;
  videoPoster: string;
  videoSrc: string;
  href: string;
}) {
  return (
    <>
      <motion.div layout className={"card"}>
        <motion.a className="card-img-container">
          <CardVideo src={videoSrc} poster={videoPoster} />
        </motion.a>

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
      </motion.div>
    </>
  );
}
