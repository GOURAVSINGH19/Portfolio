import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { menuSlide } from "../anim";
import Link from "./Link/Link";
import Footer from "./Footer/Footer"
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export default function index() {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div
        onMouseLeave={() => {
          setSelectedIndicator(location.pathname);
          }}
        className="nav h-[50%] capitalize"
      >
        <h1 className="text-zinc-400  text-[15px] border-b-2  border-zinc-500">Navigation</h1>
        {navItems.map((data, index) => {
          return (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            ></Link>
          );
        })}
      </div>
        <Footer/>
    </motion.div>
  );
}
