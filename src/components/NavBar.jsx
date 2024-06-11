import React from "react";
import "../css/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      {/* {Sidebar} */}
      <Sidebar />

      <section className="wrapper">
        <motion.span //This is the main container that will animate from the initial to the animate state.
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Louie's Artistic Expansion
        </motion.span>
        <article className="social">
          <section className="buttons">
            <Link to="/webart">
              <motion.button>View Artworks</motion.button>
            </Link>
            {/* <Link to="/contact">
              <motion.button>Contact Me</motion.button>
            </Link> */}
          </section>
        </article>
      </section>
    </nav>
  );
}
export default NavBar;
