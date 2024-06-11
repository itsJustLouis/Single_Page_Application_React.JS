//tutorial video watched: https://www.youtube.com/watch?v=FkowOdMjvYo

import React from "react";
import planeScene from "../../../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);

  return (
    <mesh
      scale={[0.0035, 0.0035, 0.0035]}
      position={[-4, 1, 1]}
      rotation={[-4.5, 1.3, -2]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
