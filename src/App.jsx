import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import { AnimatePresence } from 'framer-motion';
import Preloader from './Pages/Preloader/Preloader';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            // document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Page />
    </div>
  );
};

export default App;
