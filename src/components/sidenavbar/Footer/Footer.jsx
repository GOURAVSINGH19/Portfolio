import { Link } from "react-router-dom";
import "./Style.css";
import Magnetic from "../../Magnetic/Magnetic";

const navItems = [
  {
    title: "Github",
    href: "https://github.com/GOURAVSINGH19",
  },
  {
    title: "Instagram",
    href: "/instagram",
  },
  {
    title: "linkedin",
    href: "/linkedin",
  },
];

export default function index() {
  return (
    <div className="footer">
      <div className="w-[100%]">
        <h1 className="text-zinc-400  text-[15px] border-b-2  border-zinc-500">
          socials
        </h1>
      </div>
      {navItems.map(({ title, href }) => (
        <div className="pt-3 flex  text-[15px]">
            <Magnetic>
              <Link target="_blank" to={href} className=" text-white  font-[100] ">
                {title}
              </Link>
            </Magnetic>
        </div>
      ))}
    </div>
  );
}
