"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const classesTaken = [
  "User Interface Design",
  "Introduction to Databases",
  "Data Structures in Java",
  "Open Source Development",
  "Natural Language Processing",
  "3D UI and Augmented Reality",
  "Advanced Programming",
  "Artificial Intelligence",
  "Introduction to Devops",
  "Discrete Mathematics",
  "Computational Linear Algebra",
  "Introduction to Probability and Statistics",
  "Fundamentals of Computer Systems",
  "Computer Science Theory",
  "Programming Languages and Translators",
  "Database Systems Implementation",
  "Parallel Functional Programming",
  "Visual Interfaces to Computers",
  "Competitive Programming",
  "Introduction to Python",
];

const previewCoursework = classesTaken.slice(0, 3).map((course, i) => {
  return <li key={`course-${i}`}>{course}</li>;
});

const restOfCoursework = classesTaken.slice(3).map((course, i) => {
  return <li key={`course-${i}`}>{course}</li>;
});

export default function CollegeCoursework() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="experience-list">
      {previewCoursework}
      <li>
        <button className="see-more-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "See Less" : "See All"}{" "}
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
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
      </li>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {restOfCoursework}
          </motion.ul>
        )}
      </AnimatePresence>
      {/* <li>
        <ClassAccordion classesTaken={classesTaken} />
      </li> */}
    </ul>
  );
}
