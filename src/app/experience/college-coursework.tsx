// import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ClassAccordion from "./class-accordion";

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

export default function CollegeCoursework() {
  const previewCoursework = classesTaken.slice(0, 3).map((course, i) => {
    return <li key={`course-${i}`}>{course}</li>;
  });

  return (
    <>
      {previewCoursework}
      <li>
        <ClassAccordion classesTaken={classesTaken} />
      </li>
    </>
  );
}
