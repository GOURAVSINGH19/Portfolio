import React from "react";
import "./Projectcss.css";
import { motion } from "framer-motion";
const Project = ({ index, title, setModal }) => {
  const blur = {
    initial: {
      filter: "blur(0px)",
      opacity: 1,
    },
    open: {
      filter: "blur(4px)",
      opacity: 0.6,
      transition: { duration: 0.3 },
    },
    closed: {
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      initial="initial"
      // animate={setModal.active  ? "open": "closed"}
      variants={ blur}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <h3>react</h3>
    </motion.div>
  );
};

export default Project;
