import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Menubtn from "../components/Btn/Menubtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import Magnetic from "../components/Magnetic/Magnetic";
import Middletext from "../Animation/Middletext";
import Canvas from "../components/Canvas";
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

const Section = () => {
  
  return (
    <div
      className={`sticky top-0 h-screen  overflow-hidden  rounded-sm`}
    >
      <div className="sm:px-15 sm:py-10 py-8 px-8 flex justify-between items-center relative ">
        <div>
          <Magnetic>
            <Link
              to="/Touch"
              className="link flex cursor-pointer items-center gap-2 capitalize text-zinc-400 text-sm md:text-[15px]"
            >
              get in touch
              <MdOutlineArrowOutward />
            </Link>
          </Magnetic>
        </div>

        {/* animation btn */}
        {/* <div className="flex gap-5 w-[10%]  items-center relative">
          <div className="w-3 h-3  cursor-pointer bg-red-50 rounded-full"></div>
          <div className="absolute -top-2 left-10">
            <ul className="flex items-center flex-col gap- w-24  border-2 border-gray-200 ">
              <li>Thriller</li>
              <li>Texting</li>
              <li>Ani</li>
            </ul>
          </div>
        </div> */}

        <div className="hidden sm:flex gap-10  items-center">
          {navItems.map((item, i) => (
            <Magnetic>
              <Link
                key={i}
                to={item.href}
                className="capitalize text-sm md:text-lg "
              >
                <h1>{item.title}</h1>
              </Link>
            </Magnetic>
          ))}
        </div>
        {/* menubtn */}
        <div className=" sm:hidden ">
          <Menubtn />
        </div>
      </div>
      {/* middle section */}
      <div
        style={{ transition: "background-color 2s ease" }}
        className={`w-full py-10  rounded-tr-3xl mt-15 flex justify-center `}
      >
        <div className="overflow-hidden select-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <Middletext />
        </div>
      </div>

      <div className=" w-[80%] h-[80%]  absolute top-[50%] left-[50%]    inset-0 -translate-x-1/2 -translate-y-1/2">
        <Canvas />
      </div>
    </div>
  );
};

export default Section;
