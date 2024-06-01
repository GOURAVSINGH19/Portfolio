import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="grid  grid-flow-col gap-10  w-screen  h-screen relative left-full overflow-hidden">
      <div className="w-10/12 relative">
        <div className="bg-white  w-80  shadow-md rounded-lg overflow-hidden absolute top-60 ">
          <Link to="/">
            <img
              src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/6605cd104b4f1f496b120c94_coveryes-p-800.png"
              alt="img"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="w-10/12  relative">
        <div className="bg-white  w-80 shadow-md rounded-lg overflow-hidden absolute top-32 left-10">
          <Link to="/">
            <img
              src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/6605cd104b4f1f496b120c94_coveryes-p-800.png"
              alt="img"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="w-10/12  relative">
        <div className="bg-white  w-80 shadow-md rounded-lg overflow-hidden absolute bottom-20 left-10">
          <Link to="/">
            <img
              src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/6605cd104b4f1f496b120c94_coveryes-p-800.png"
              alt="img"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="w-10/12  relative">
        <div className="bg-white  w-80 shadow-md rounded-lg overflow-hidden absolute top-20 left-10">
          <Link to="/">
            <img
              src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/6605cd104b4f1f496b120c94_coveryes-p-800.png"
              alt="img"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
