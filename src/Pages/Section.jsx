import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Canvas from "../components/Canvas";
import Magnetic from "../components/Magnetic/Magnetic";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];

const Section = ({ scrollYProgress }) => {
  const ref = useRef();
  const [bgcolor, setBgColor] = useState("#000");
  const [textColor, setTextColor] = useState("#000");

  const changeBgColor = () => {
    setBgColor(bgcolor === "#000" ? "#C3E956" : "#000");
    setTextColor(textColor === "#000" ? "#1F4B2C" : "#000");
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate, transition: "background-color 2s ease" }}
      className={`sticky top-0 h-screen ${
        bgcolor === "#000" ? "bg-black" : "bg-[#C3E956]"
      }  ${
        textColor === "#000" ? "text-white" : "text-[#1F4B2C]"
      } overflow-hidden  rounded-sm`}
    >
      <div className="px-10 py-4 flex justify-between items-center">
        <div className="capitalize cursor-pointer">
          <Magnetic>
          <Link to="/Touch" className="flex items-center gap-2 underline">
            get in touch
            <MdOutlineArrowOutward/>
          </Link>
          </Magnetic>
        </div>

        <div className="rounded-full bg-pink-700 py-2 px-3">
          <button onClick={changeBgColor} className="capitalize">
            Toggle
          </button>
        </div>

        <div className="flex gap-10">
          {navItems.map((item, i) => (
          <Magnetic>
            <Link key={i} to={item.href} className="capitalize">
              {item.title}
            </Link>
          </Magnetic>
          ))}
        </div>
      </div>

      <motion.div
        style={{ transition: "background-color 2s ease" }}
        className={`w-full py-10  rounded-tr-3xl mt-15 flex justify-center  ${
          bgcolor === "#000" ? "bg-black" : "bg-[#C3E956]"
        }  `}
      >
        <div className="   w-full flex gap-9 overflow-hidden whitespace-nowrap  select-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <div className=" marquee flex gap-10 justify-start">
              <div>
              <h1 className="text-[20vw] opacity-[.3]  leading-none uppercase pt-19 text-zinc-700">
                GOURAV SINGH
              </h1>
              </div>
              <div>
              <h1 className="text-[20vw] opacity-[.3]  leading-none uppercase pt-19 text-zinc-700">
                GOURAV SINGH
              </h1>
              </div>
              <div>
              <h1 className="text-[20vw] opacity-[.3]  leading-none uppercase pt-19 text-zinc-700">
                GOURAV SINGH
              </h1>
              </div>
            </div>
        </div>
      </motion.div>

      <div className=" w-[50%] h-[50%] overflow-hidden absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <Canvas/> 
      </div>

    </motion.div>
  );
};

export default Section;
