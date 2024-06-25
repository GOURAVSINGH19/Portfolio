import Project from "../components/Project/Project";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import PhoneCard from "../components/Card/PhoneCard";
import Magnetic from "../components/Magnetic/Magnetic";
import { motion } from "framer-motion";
// import gsap from 'gsap';
import Rounded from "../components/Btn/Roundedbtn";
import { Link } from "react-router-dom";
const projects = [
  {
    title: "C2 Montreal",
    src: "https://images.unsplash.com/photo-1718414738167-0dd5de626229?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "https://plus.unsplash.com/premium_photo-1705091308852-4711861c6c7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "https://plus.unsplash.com/premium_photo-1718358631642-a81ba2e960b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D",
    color: "#EFE8D3",
  },
  {
    title: "Locomotive",
    src: "https://plus.unsplash.com/premium_photo-1686339720996-fc578ae07dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
    color: "pink",
  },
];

export default function Home() {
  // const [modal, setModal] = useState({ active: false, index: 0 });
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect( () => {
  //   //Move Container
  //   xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
  //   yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
  //   //Move cursor
  //   xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
  //   yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
  //   //Move cursor label
  //   xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
  //   yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  // }, [])

  // const moveItems = (x, y) => {
  //   xMoveContainer.current(x)
  //   yMoveContainer.current(y)
  //   xMoveCursor.current(x)
  //   yMoveCursor.current(y)
  //   xMoveCursorLabel.current(x)
  //   yMoveCursorLabel.current(y)
  // }
  // const manageModal = (active, index, x, y) => {
  //   moveItems(x, y)
  //   setModal({active, index})
  // }

  // onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}}
  return (
    // <div>
    //   <style>
    //     {`
    //       .bg-image {
    //       background-image: url(
    //        ${projects[modal.index].src}
    //        );         
    //        }
    //     `}
    //   </style>
    //   <div
    //     className={`h-screen w-screen relative items-center justify-center bg-cover bg-center bg-image text-white mb-2`}
    //   >
    //     {windowWidth < (420 || 520) ? (
    //       <div className="relative px-5 sm:absolute left-[3%] top-0 mb-2">
    //         <h1 className="sm:text-[5rem] text-[2rem] text-white">Projects</h1>
    //       </div>
    //     ) : (
    //       <div className="relative w-screen max-w-screen-xl sm:absolute left-[2%] top-0">
    //         <div className="w-fit">
    //           <Magnetic>
    //             <h1 className=" sm:text-[5rem] text-[2rem] text-white">
    //               Projects
    //             </h1>
    //           </Magnetic>
    //         </div>
    //         <div className="border-b-2 h-[1px] py-1 border-zinc-400 opacity-[.6]"></div>
    //       </div>
    //     )}
    //     {windowWidth < 720 ? (
    //       <PhoneCard />
    //     ) : (
    //       <div>
    //         <div className="body">
    //           {projects.map((project, index) => {
    //             return (
    //               <Project
    //                 index={index}
    //                 title={project.title}
    //                 setModal={setModal}
    //                 key={index}
    //               />
    //             );
    //           })}
    //         </div>
    //         <div className="">
    //           <Card modal={modal} projects={projects} />
    //         </div>
    //       </div>
    //     )}
    //     <div className="absolute z-10 bottom-13 left-[50%]  flex items-center justify-center ">
    //       {windowWidth < 420 ? (
    //         <button className="px-3 py-2  w-28 sm:px-3 sm:py-4 sm:w-60 text-black rounded-md bg-white ">
    //           view more
    //         </button>
    //       ) : (
    //         <Link to="/">
    //         <Rounded>
    //           <h2>view more</h2>
    //         </Rounded>
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <h1>hey</h1>
  );
}
