/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null} >
      <mesh
        geometry={nodes.character_dog.geometry}
        material={nodes.character_dog.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[500,100,5]}
      >
        <mesh
          geometry={nodes.character_dogArmLeft.geometry}
          material={nodes.character_dogArmLeft.material}
          position={[0.2, 0, -0.63]}
        />
        <mesh
          geometry={nodes.character_dogArmRight.geometry}
          material={nodes.character_dogArmRight.material}
          position={[-0.2, 0, -0.63]}
        />
        <group position={[0, 0, -0.7]}>
          <mesh
            geometry={nodes.Cube1339.geometry}
            material={nodes.Cube1339.material}
          />
          <mesh
            geometry={nodes.Cube1339_1.geometry}
            material={materials["Red.034"]}
          />
          <mesh
            geometry={nodes.Cube1339_2.geometry}
            material={materials["Black.026"]}
          />
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf"
);
