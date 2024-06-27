import React from "react";
import Rounded from "../components/Btn/Roundedbtn";

const About = () => {
  return (
    <div className="w-[100%] min-h-[60%] px-5 flex justify-center items-center flex-col">
      <div className="max-w-screen-2xl w-auto  flex justify-evenly items-center  p-10">
        <h3 className="sm:text-[2px] md:text-[2rem] font-300 capitalize tracking-tighter ">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </h3>
        <h3 className=" text-md font-800  text-gray-500 hover:text-zinc-400 transform-all duration-300 tracking-tighter   ease-linear">
         The
          combination of my passion for design, code & interaction positions me
          in a unique place in the web design world
        </h3>
      </div>
      <div className="absolute bottom-28 w-[20%]  py-5 text-black capitalize font-extralight hover:text-white ">
        <Rounded>
          <h2>about</h2>
        </Rounded>
      </div>
    </div>
  );
};

export default About;
