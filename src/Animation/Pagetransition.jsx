import React from "react";
import { motion } from "framer-motion";
import Section from "../Pages/Section";
import Section2 from "../Pages/Section2";
import Section3 from "../Pages/Section3";
import Section4 from "../Pages/Section4";

const Randomdelay = (rowindex, totalrow) => {
  const blockDelay = Math.random() * 0.5;
  const rowdelay = (totalrow - rowindex - 1) * 0.05;
  return blockDelay + rowdelay;
};
const Transition = () => {
  return () => (
    <>
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <div className="blocks-container transition-in">
        {Array.from({ length: 10 }).map((_, rowindex) => (
          <div>
            {Array.from({ length: 11 }).map((_, blockindex) => (
              <motion.div
                key={blockindex}
                className="block"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Randomdelay(rowindex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="blocks-container transition-out">
        {Array.from({ length: 10 }).map((_, rowindex) => (
          <div>
            {Array.from({ length: 11 }).map((_, blockindex) => (
              <motion.div
                key={blockindex}
                className="block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Randomdelay(rowindex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;
