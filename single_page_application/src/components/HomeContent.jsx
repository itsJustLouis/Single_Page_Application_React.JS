import { animate, motion } from "framer-motion";
import React from "react";

function HomeContent() {
  const textVariants = {
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
        <motion.section
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>LOUIS MONAWE</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and Game Designer
          </motion.h1>
          <motion.section variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>View Artworks</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.section>
          <motion.img src="/scroll.png" alt="" variants={textVariants} />
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
        <img src="/hero.png" alt="" />
      </section>

      {/* <h1 className="Welcome-text">Welcome to Louis Monawe's HomePage</h1> */}
    </main>
  );
}

export default HomeContent;
