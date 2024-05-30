import { useScroll, useTransform, motion } from "framer-motion";
import { lazy, useEffect, useRef } from "react";
import Lenis from "lenis";

const Section = lazy(()=>{
  return import ("../Pages/Section")
})

const Section2 = lazy(()=>{
  return import ("../Pages/Section2")
})

const Section3 = lazy(()=>{
  return import ("../Pages/Section3")
})

const Section4 = lazy(()=>{
  return import ("../Pages/Section4")
})



export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]" >
      <Section scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 />
      <Section4/>
    </main>
  );
}
