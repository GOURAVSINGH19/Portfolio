import { Environment, OrbitControls } from "@react-three/drei";
import { Me } from "./me";
const Experience = () => {
  return (
    <>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
      <Environment preset="sunset"/>
      <group position-y={-1}>
        <Me/>
      </group>
    </>
  );
};

export default Experience;
