import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/sidebar.scss";
import Links from "./sub/sidebarLinks/Links";
import ToggleButton from "./sub/sidebarLinks/ToggleButton";

function Sidebar() {
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
    <motion.section className="sidebar" animate={open ? "open" : "closed"}>
      <motion.section className="bg" variants={variants}>
        <Links />
      </motion.section>
      <ToggleButton setOpen={setOpen} />
    </motion.section>
  );
}

export default Sidebar;