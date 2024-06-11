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
      <h1 className="text-zinc-500 border-b-2  border-zinc-500 font-500 capitalize">socials</h1>
      {navItems.map(({ title, href }) => (
        <div className="w-full pt-2 flex justify-start items-center gap-10 font-500 text-xl ">
          <Magnetic>
            <Link target="_blank" to={href} >
              {title}
            </Link>
          </Magnetic>
        </div>
      ))}
    </div>
  );
}
