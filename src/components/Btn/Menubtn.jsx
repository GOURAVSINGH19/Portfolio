import './Menubtn.css'
import { useEffect, useState } from 'react';
import Nav from '../sidenavbar/Nav';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Magnetic from '../Magnetic/Magnetic'

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
    <div className="main">
      <div className="header px-5">
      <Magnetic>
        <div onClick={() => {setIsActive(!isActive)}} className="button">
          <div className={`${"burger"} ${isActive ? "burgerActive" : ""}`}></div>
        </div>
      </Magnetic>
      </div>
    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}