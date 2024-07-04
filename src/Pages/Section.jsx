import React from "react";
import Middletext from "../Animation/Middletext";
import Canvas from "../components/Canvas";

const Section = () => {
  return (
    <div
      className={`sticky  w-screen top-0 h-screen  overflow-hidden  rounded-sm  section-1`}
    >
      {/* middle section */}
      <div
        style={{ transition: "background-color 2s ease" }}
        className={`w-full py-10  rounded-tr-3xl mt-15 flex justify-center `}
      >
        <div className="overflow-hidden select-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <Middletext />
        </div>
      </div>

      <div className="w-[50%] h-[50%] sm:w-[60%] md:w-[80%] sm:[60%] md:h-[80%]  absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Canvas />
      </div>
    </div>
  );
};

export default Section;
