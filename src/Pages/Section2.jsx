import React, { useRef } from "react";
import { Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Magnetic from "../components/Magnetic/Magnetic";
const Section2 = () => {
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -0.5]);
  const scrollEl = useRef();

  return (
    <section
      ref={scrollEl}
      className="w-screen h-[30%] bg-white text-black overflow-hidden py-10 px-5 relative"
    >
      <div className="flex flex-col  h-[60%] gap-5 sm:flex-row items-center sm:flex-wrap md:flex-nowrap justify-center w-[100%] mt-10">
        <div className="w-[100%] sm:w-[100%] md:w-[50%] flex items-center  md:p-10 p-2 ">
          <h3 className="text-[1.7rem] sm:text-[2rem] md:text-[2rem] font-300 capitalize tracking-tighter ">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h3>
        </div>
        <div className="w-[100%] md:w-[30%] xl:w-[20%] md:p-5 mt-2">
          <h3 className="text-[1rem] sm:text-md md:text-md p-2 font-800  text-zinc-400 hover:text-gray-500 transform-all duration-300 tracking-tighter   ease-linear">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Section2;
