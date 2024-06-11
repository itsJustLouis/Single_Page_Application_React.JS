//tutorial video watched: https://www.youtube.com/watch?v=FkowOdMjvYo

//this is for loading
import React from "react";
import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <Html>
      <section className="flex justify-center items-center ">
        <section className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spinS"></section>
      </section>
    </Html>
  );
};

export default Loader;
