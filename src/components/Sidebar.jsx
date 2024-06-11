import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/sidebar.scss";
import Links from "./sub/sidebarLinks/Links";
import ToggleButton from "./sub/sidebarLinks/ToggleButton";

function Sidebar() {
  //Variants allow me to create smooth animations using the initial state and the animate state, with this one though, i used the setOpen and Open states to use conditions, from framermotion.
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    //This is the main container that will animate from the initial to the animate state.
    <motion.section className="sidebar" animate={open ? "open" : "closed"}>
      <motion.section className="bg" variants={variants}>
        {open && (
          <p className="parag">
            @2024 Louis Monawe from Wits University. All Right Reserved.
          </p>
        )}
        <Links />
      </motion.section>
      <ToggleButton setOpen={setOpen} />
    </motion.section>
  );
}

export default Sidebar;
