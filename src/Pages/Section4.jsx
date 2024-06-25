import React from "react";
import { Link } from "react-router-dom";
import Magnetic from "../components/Magnetic/Magnetic";
import Rounded from "../components/Btn/Roundedbtn";
import { motion } from "framer-motion";
import Earth from "../Animation/Earth";
const Section4 = () => {
  return (
    <motion.div className="relative h-screen w-screen">
      <div className="text-white  absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]  w-screen flex flex-col justify-center items-center z-10">
        <h1 className="capitalize text-[3rem] sm:text-[6rem] md:text-[8rem] pointer-events-none">
          Gourav Singh
        </h1>
        <Link to="/" className=" flex  justify-center mt-3">
          <Rounded data-scroll data-scroll-speed={3}>
            <h2>let's talk!</h2>
          </Rounded>
        </Link>
      </div>
      <div className="text-white overflow-hidden">
        <div className=" flex  flex-col sm:flex sm:flex-row gap-10 items-center justify-evenly py-5 ">
          <Rounded>
            <h2 className="sm:w-32 md:w-40 flex justify-center items-center text-sm rounded-sm">gouravsingh4495@gamil.com</h2>
          </Rounded>
          <Rounded>
            <h2 className="w-15 sm:w-32 md:w-40  text-sm rounded-sm">+91 954 1560 130</h2>
          </Rounded>
        </div>
        <div className="h-[60vw] sm:h-[28vw] md:h-[30vw] w-screen absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
          <Earth /> 
        </div>
        <div className="w-screen flex  items-center justify-center absolute  bottom-24 sm:bottom-5">
          <div className="flex gap-10">
            <Link to="/">
              <Magnetic>
                <h1>Instagram</h1>
              </Magnetic>
            </Link>
            <Link to="/">
              <Magnetic>
                <h1>Github</h1>
              </Magnetic>
            </Link>
            <Link to="/">
              <Magnetic>
                <h1>Linkedin</h1>
              </Magnetic>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section4;
