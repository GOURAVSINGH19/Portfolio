import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Pages/Preloader/Preloader";
import Links from "./Router/Router";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Links/>
    </div>
  );
};



export default App;
