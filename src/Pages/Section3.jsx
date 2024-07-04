import Project from "../components/Project/Project";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Earth from "../Animation/Earth";
import { Link } from "react-router-dom";
import Rounded from "../components/Btn/Roundedbtn";
import Magnetic from "../components/Magnetic/Magnetic";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is registered with GSAP
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
export default function Home() {

  // const Earthref = useRef();
  // const projectref= useRef();
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.to("#section3", {
  //     scrollTrigger: {
  //       pin: true,
  //       start: "top center",
  //       end: "bottom 200vh",
  //       scrub: 0.5,
  //       markers: true
  //     }
  //   });
  // }, []);




  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="section3" className="relative bg-[#131313] min-h-[150vh] sm:min-h-[200vh] w-screen p-5 overflow-hidden">
      <div  className="absolute top-0 left-0 right-0 bottom-0">
        <div className=" md:h-[20vw] sm:h-[28vw] h-[20%]  sticky ">
          <Earth />
        </div>
      </div>
      <div className=" w-[95%]   flex flex-col absolute z-2 mt-[100vh]">
        <div className=" w-[100%] p-5 mb-[15vh]">
          <div className="md:w-[35vw] md:h-[40vh] w-[50vw] h-[40vw]  bg-pink-500">
            <Link to="/">
              <img
                src="imgs/normal.png"
                alt="img"
                className="object-cover h-full"
              />
            </Link>
            <div className="flex gap-5 mt-6 items-center ">
              <h1 className="text-[1.3vw]">[001]</h1>
              <Link to="/" className=" cursor-pointer ">
                <Magnetic>
                  <img src="imgs/arrow.svg" alt="img" className="w-7 " />
                </Magnetic>
              </Link>
              <h1 className="text-[1.5vw]">Movie</h1>
            </div>
          </div>
        </div>
        <div className=" w-[100%] p-5 flex justify-end mb-[15vh]">
          <div className="md:w-[35vw] md:h-[40vh] w-[40vw] h-[30vw]  bg-pink-500 ">
            <Link to="/">
              <img
                src="imgs/normal.png"
                alt="img"
                className="object-cover h-full"
              />
            </Link>
            <div className="flex gap-5 mt-6 items-center ">
              <h1 className="text-[1.3vw]">[002]</h1>
              <Link to="/" className=" cursor-pointer ">
                <Magnetic>
                  <img src="imgs/arrow.svg" alt="img" className="w-7 " />
                </Magnetic>
              </Link>
              <h1 className="text-[1.5vw]">Movie</h1>
            </div>
          </div>
        </div>
        <div className=" w-[100%] p-5 mb-[10vh]">
          <div className="md:w-[35vw] md:h-[40vh] w-[60vw] h-[50vw]  bg-pink-500">
            <Link to="/">
              <img
                src="imgs/normal.png"
                alt="img"
                className="object-cover h-full"
              />
            </Link>
            <div className="flex gap-5 mt-6 items-center ">
              <h1 className="text-[1.3vw]">[003]</h1>
              <Link to="/" className=" cursor-pointer ">
                <Magnetic>
                  <img src="imgs/arrow.svg" alt="img" className="w-7 " />
                </Magnetic>
              </Link>
              <h1 className="text-[1.5vw]">Movie</h1>
            </div>
          </div>
        </div>
        <div className=" w-[100%] pt-10 flex md:justify-end justify-center items-center">
          <div className=" cursor-pointer w-[80%] sm:w-[50%] md:w-[20vw]">
            <Link to="/" className="text-black font-bold hover:text-white duration-200 ease-in-out">
              <Rounded>
                <h2>View More</h2>
              </Rounded>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
