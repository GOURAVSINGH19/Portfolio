import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../index.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../components/Card";
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {


  return (
    <div className=" w-full h-screen sticky  top-0   overflow-hidden">
      <div className=" max-w-screen-xl w-auto  m-auto h-fulltop-0 ">
        <div className="flex-1 items-center w-max flex relative justify-start">
          <div className="justify-start items-center flex absolute top-20">
            <h1 className="select-work text-black text-[12vw]  font-[400] capitalize ">
              selected
              <br />
              work
            </h1>
          </div>
        </div>
        <div className=" h-full relative left-full ">
          <div className="card">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

{
  /* <div className="items-1 flex h- w-32 bg-red-900 ">
<Link to="/" className="w-[440rem] h-[252rem] block relative overflow-hidden object-cover aspect-square">
  <img
    src="https://images.unsplash.com/photo-1714139797690-969497e4a65e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    alt="img"
  />
</Link>
</div> */
}
