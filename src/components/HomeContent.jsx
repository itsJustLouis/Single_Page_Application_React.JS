import { motion } from "framer-motion";
import React from "react";
import "../css/home.scss";
import scroll from "../images/scroll.png";
import hero from "../images/hero.png";
import { Link } from "react-router-dom";

function HomeContent() {
  const textVariants = {
    //Variants allow me to create smooth animations using the initial state and the animate state, from framermotion.
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <main className="hero">
      <section className="wrapper">
        <motion.section //This is the main container that will animate from the initial to the animate state.
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="nameTxt">
            LOUIS MONAWE
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and Game Designer
          </motion.h1>
          <motion.section variants={textVariants} className="buttons">
            {/*Due to a slighly layer problem, these buttons will not work because of the layers, i have to choose between the navigation and te layer*/}
            <Link to="/webart">
              <motion.button variants={textVariants}>
                View Artworks
              </motion.button>
            </Link>
            <Link to="../pages/contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </Link>
          </motion.section>
          <motion.img src={scroll} alt="" variants={textVariants} />
        </motion.section>
      </section>
      <motion.section
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Designer Writter Game Maker
      </motion.section>
      <section className="imageContainer">
        <img src={hero} alt="" />
      </section>
    </main>
  );
}

export default HomeContent;
