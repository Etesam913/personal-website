"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

export default function ClassAccordion({
  classesTaken,
}: {
  classesTaken: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const courseworkId = useId();
  const prefersReducedMotion = useReducedMotion();
  const restOfCoursework = classesTaken.slice(3).map((course, i) => {
    return <li key={`course-${i}`}>{course}</li>;
  });
  return (
    <>
      <button
        aria-controls={courseworkId}
        aria-expanded={isOpen}
        className="see-more-button"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {isOpen ? "Hide coursework" : "See all coursework"}{" "}
        <motion.svg
          aria-hidden="true"
          animate={prefersReducedMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
          focusable="false"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z"
            fill="var(--text-color)"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={courseworkId}
            style={{ overflow: "hidden" }}
            initial={prefersReducedMotion ? false : { height: 0 }}
            animate={{
              height: "auto",
              transition: prefersReducedMotion
                ? { duration: 0 }
                : {
                    type: "spring" as const,
                    damping: 16,
                    stiffness: 105,
                  },
            }}
            exit={prefersReducedMotion ? undefined : { height: 0 }}
          >
            {restOfCoursework}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
