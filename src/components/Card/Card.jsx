import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;

  useEffect(() => {
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseenter", () => {
      setActivebtn(true);
    });
    btn.addEventListener("mouseleave", () => {
      setActivebtn(false);
    });
  }, []);

  return (
    <div className="bg-red-500">
      <div
        className="modalContainer"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="modalSlider pointer-events-none"
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="modal rounded-md"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img src={`${src}`} className="rounded-sm" alt="image" />
              </div>
            );
          })}
        </div>
        <Link to="/" className="btn">
          <motion.div
            className="cursor "
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <motion.div
            className="cursorLabel "
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            View
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
