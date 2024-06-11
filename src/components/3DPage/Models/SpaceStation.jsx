/*
tutorial video watched: https://www.youtube.com/watch?v=FkowOdMjvYo


Author: AntijnvanderGun (https://sketchfab.com/AntijnvanderGun)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db

"Earth" (https://skfb.ly/6UoZv) by absolution is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

//in this code i converted a glb 3d model downloaded from Sketchfab in https://gltf.pmnd.rs/ and converted it to a jsx code
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import space_station from "../../../assets/3d/earth.glb";
import { a } from "@react-spring/three";

//props will help with the rotation of the spacehouse
const SpaceModel = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const spaceIslandRef = useRef();

  //getting access to the three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(space_station);

  //using ref to get last mouse position
  const lastX = useRef(0);
  const rotationSpeed = useRef(-5); //for rotation speed
  const dampingFactor = 0.95;

  //when you hold mouseclick down,
  const HandlePointerDown = (e) => {
    e.stopPropagation(); //it wont bother other functions
    e.preventDefault(); //wont reload page
    setIsRotating(true); //set rotation on

    //figure out if its a touchevent on a phone or a mouse click
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };
  //mouse button up
  const HandlePointerUp = (e) => {
    e.stopPropagation(); //it wont bother other functions
    e.preventDefault(); //wont reload page
    setIsRotating(false); //set rotation on
  };
  //when you mouse while mouse button on click
  const HandlePointerMove = (e) => {
    e.stopPropagation(); //it wont bother other functions
    e.preventDefault(); //wont reload page

    if (isRotating) {
      //figure out if its a touchevent on a phone or a mouse click
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      spaceIslandRef.current.rotation.y += delta * 0.01 * Math.PI;
    }
  };

  //move with keyboard
  const HandleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      spaceIslandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      spaceIslandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };
  const HandleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  //using this from threefiber to control the rotation and stop it
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      spaceIslandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = spaceIslandRef.current.rotation.y;

      //normalizing the rotation value so its in the same range and so that the Switch statement will be able to detect the current stage based on the normalized rotation
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        // If the calculated rotation falls within this range, set the current stage to 5 and displaay what is in stagge 5
        case normalizedRotation >= 2.5 && normalizedRotation <= 3:
          setCurrentStage(5);
          break;
        case normalizedRotation >= 4.5 && normalizedRotation <= 5:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0 && normalizedRotation <= 1:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 1.5 && normalizedRotation <= 2:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 3.5 && normalizedRotation <= 4:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", HandlePointerDown);
    canvas.addEventListener("pointerup", HandlePointerUp);
    canvas.addEventListener("pointermove", HandlePointerMove);
    document.addEventListener("keydown", HandleKeyDown);
    document.addEventListener("keyup", HandleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", HandlePointerDown);
      canvas.removeEventListener("pointerup", HandlePointerUp);
      canvas.removeEventListener("pointermove", HandlePointerMove);
      document.removeEventListener("keydown", HandleKeyDown);
      document.removeEventListener("keyup", HandleKeyUp);
    };
  }, [gl, HandlePointerDown, HandlePointerUp, HandlePointerMove]);

  //this code is the mesh for the plan that i got from the glb 3d object after i imported it into this link and it got converted into jsx code https://gltf.pmnd.rs/
  return (
    <a.group ref={spaceIslandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.123}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-700, -100, 3700]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100000}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
};

useGLTF.preload(space_station);
export default SpaceModel;
