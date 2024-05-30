import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";

const Mycanvas = () => {
  return (
    <>
      <Canvas
        // style={{ transition: "background-color 2s ease" }}
        // gl={{ alpha: true, antialias: true }}
        // clearColor={'transparent'}
        shadows
        camera={{ position: [-20, 30, 50], fov: 10 }}
      >
        <color attach="background" args={["#ececec"]} />
        {/* <Experience/> */}
      </Canvas>
    </>
  );
};

export default Mycanvas;
