//tutorial video watched: https://www.youtube.com/watch?v=FkowOdMjvYo

import React, { useEffect, useRef } from "react";
import spacemanModel from "../../../assets/3d/plane.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
//explained all this in ThreeDMain.jsx
const Spaceman = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(spacemanModel);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Spaceman;
