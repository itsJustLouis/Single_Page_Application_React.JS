import React from "react";
import "../css/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

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
          <button>
            <img src={facebook} alt="" />
          </button>
          <button>
            <img src={instagram} alt="" />
          </button>
          <button>
            <img src={youtube} alt="" />
          </button>
          {/* <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a> */}
        </article>
      </section>
    </nav>
  );
}
export default NavBar;
