import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Menubtn from "../components/Btn/Menubtn";
import { Link } from "react-router-dom";
import Magnetic from "../components/Magnetic/Magnetic";
const Navbar = () => {
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
  return (
    <div className=" absolute top-0 z-[99]">
      <div className="sm:px-15 sm:py-10 py-8 px-10 relative w-screen flex justify-between items-center">
        <div>
          <Magnetic>
            <Link
              to="/Touch"
              className="link flex cursor-pointer items-center gap-2 capitalize text-zinc-700 font-bold text-sm md:text-[15px]"
            >
              get in touch
              <MdOutlineArrowOutward />
            </Link>
          </Magnetic>
        </div>

        <div className="hidden sm:flex gap-10  items-center">
            <Magnetic>
              <Link
                to="/"
                className="capitalize text-sm md:text-lg text-zinc-700 font-bold  "
              >
                <h1>Home</h1>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/about"
                className="capitalize text-sm md:text-lg text-zinc-700 font-bold  "
              >
                <h1>About</h1>
              </Link>
            </Magnetic>
        </div>
        {/* menubtn */}
        <div className=" sm:hidden ">
          <Menubtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
