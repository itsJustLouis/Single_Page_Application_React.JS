import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Links() {
  const variants = {
    //Variants allow me to create smooth animations using the initial state and the animate state, in this state, i used conditions through the open and closed state, from framermotion.
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }, //when they come up they will move in different directions, basically when i open they will come from up and when i close my nav they will show from the top
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.nav className="links" variants={variants}>
      <ul>
        <motion.li
          variants={itemVariants} //when i hover it will zoom a bit and when i click on it it will shrink a bit
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/theory">Theory</Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/design">Design</Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/webart">WebArt</Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/profile">Profile</Link>
        </motion.li>

        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Links;
