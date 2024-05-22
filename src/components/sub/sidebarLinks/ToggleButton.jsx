import React from "react";
import { motion } from "framer-motion";

function ToggleButton({ setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round" //this will also grow the circle into a huge one so that when i click on that circle it will grow and be huge and you wont notice its a circle but think its a rectangle
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" }, //use figma for this, u draw and export to svg, basically when i click on the hamburger button, it will turn to an x and when i click on the x it will turn into a hamburger
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default ToggleButton;
