import React from "react";
import "../css/navbar.scss";
// import "../css/global.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

function NavBar() {
  return (
    <nav className="navbar">
      {/* {Sidebar} */}
      <Sidebar />
      {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/theory">Theory</Link></li>
            <li><Link to="/design">Design</Link></li>
            <li><Link to="/webart">WebArt</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul> */}

      <section className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Louie's Artistic Expansion
        </motion.span>
        <article className="social">
          <button>
            <img src="/facebook.png" alt="" />
          </button>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
        </article>
      </section>
    </nav>
  );
}
export default NavBar;
