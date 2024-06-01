import { Link } from "react-router-dom";
import "../Btn/Style.css";
import Magnetic from "../Magnetic/Magnetic";
export default function Btn() {
  return (
    <div
      data-scroll
      data-scroll-speed={0.1}
      className="relative  h-[400px] flex items-center justify-center "
    >
      <Magnetic>
        <div className="button">
          <Link to="/about">About me</Link>
        </div>
      </Magnetic>
    </div>
  );
}
