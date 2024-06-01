import React from "react";
import Footer from "../components/Footer";

const Section4 = () => {
  return (
    <div 
      className='relative h-screen bg-black'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed  bottom-0 h-screen w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Section4;
