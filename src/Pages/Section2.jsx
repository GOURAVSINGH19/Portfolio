import { useTransform, motion } from "framer-motion";
import React from "react";
import { FaHtml5 } from "react-icons/fa";

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div className="w-full h-screen bg-black text-white py-10 px-10">
        <h1 className=" capitalize font-400 text-xl md:text-xl mb-10">tech stack</h1>
        <div className="flex gap-10 flex-1">
          <div className=" capitalize  w-2/3  sm:h-36 lg:52">
            <h1 className="sm:text-xl md:text-2xl lg:text-2xl ">language</h1>
            <div className=" w-[20vw] mt-5 flex gap-3">
              <img src="/imgs/html.png" alt="htmlimg"  className="w-10"/>
              <img src="/imgs/css-logo.png" alt="htmlimg"  className="w-10"/>
              <img src="/imgs/javascript.png" alt="htmlimg"  className="w-10"/>
            </div>
          </div>
          <div className="bg-pink-500 w-2/3   sm:h-36 lg:52">
            <h1 className=" capitalize sm:text-xl md:text-2xl lg:text-2xl  ">tools</h1>
            <div className=" w-[20vw]">he</div>
          </div>
          <div className=" bg-pink-500 w-2/3 h-36 sm:h-36 lg:52">
            <h1 className="capitalize ">frameworks</h1>
            <div className=" w-[20vw]">he</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section2;
