import { useTransform, motion } from "framer-motion";
import React from "react";
import About from "../components/About";

const Section2 = () => {
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -0.5]);

  return (
    <motion.div className="relative h-screen">
      <div className="w-full h-screen bg-white text-black overflow-hidden py-10 px-5 relative">
        <h1 className=" capitalize font-400 text-xl md:text-xl mb-10">
          tech stack
        </h1>
        {/* <About /> */}
      </div>
    </motion.div>
  );
};

export default Section2;
