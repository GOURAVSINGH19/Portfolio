import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";

const Mycanvas = () => {

  return (
    <>
      <Canvas camera={{ position: [0, 2, 5], fov: 28 }} >
        <Experience />
      </Canvas>
    </>
  );
};

export default Mycanvas;