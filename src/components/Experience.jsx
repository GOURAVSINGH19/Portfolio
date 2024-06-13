import { Environment, OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import { useControls } from "leva";
const Experience = () => {
  const {animation} = useControls({
    animation: {
      Value: "flair",
      options: ["Thriller", "Shuffling", "flair"],
    },
  });
  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar animation={animation} />
      </group>
    </>
  );
};

export default Experience;
