import React from "react";
import "../css/theory.scss";
import { motion } from "framer-motion";
import scroll from "../images/scroll.png";
import baghi from "../images/bhaghi.png";

function TheoryContent() {
  const textVariant = {
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
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const textContentVariant = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-150%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <main className="heros">
      <section className="wrappers">
        <motion.h2
          className="headone"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          Essay on Net/Web Art
        </motion.h2>
        <motion.section //This is the main container that will animate from the initial to the animate state.
          className="textContainers"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.section className="scrollBtn">
            <motion.img
              src={scroll}
              alt=""
              variants={textVariant}
              animate="scrollButton"
            />
          </motion.section>

          <motion.h1 variants={textVariant}>A Pen by Baghi ArtWork</motion.h1>

          <motion.p variants={textContentVariant} className="textContent">
            The artwork that I decided to go with for my assignment is called “A
            Pen by Baghi”. I do not know if the artist attempted to make it an
            artwork or just an interactive piece. but to me, it resonated with
            me to the point that I see it as “Valuable Artwork”. The artist goes
            by Baghi, I am not aware if that is his real name, but his Username
            on CodePen is “@Baghi_9999”. This piece of art can be found on
            CodePen: https://codepen.io/Baghi_9999/pen/zYJKVwZ , an environment
            for developers and designers to show off their work and learn. This
            space has a lot of influence on upcoming web designers and
            developers, I believe putting the artwork there would inspire so
            many Artists.
          </motion.p>
          <motion.p variants={textVariant} className="textContent">
            This artwork is an interactive web art project that lives within a
            software called Codepen. It was made and posted on 26 February 2023.
            And I chose it because it resonates with me on a personal level as
            an interactive web art. I will go further into it as to why I chose
            it.
          </motion.p>
          <motion.p variants={textContentVariant} className="textContent">
            Let’s understand what Web Art is. Web art is a huge concept, however
            it’s created by lines of code that are sent to web browsers so they
            can be rendered. Its characteristics make it able to reach anyone
            globally, be interactive, be able to be accessed by anyone and be
            immaterial (Ricci 2020). The home of art is no longer in museums
            only, it also exist in the Online Platforms (Carrier, 2020). I also
            feel like the credit should go to the home of the art, the web page,
            as its “not only the art that gave us the art feeling but also the
            web page” (Park, 2007).
          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 8 }}
            src={baghi}
            alt="Figure 1, My chosen Artwork"
            className="netArt"
          />
          <motion.p variants={textVariant} className="textContent">
            This artwork cannot even be described, that’s how amazing it is,
            however. It uses the strings that exist within a monitor, basically
            a monitor and a mouse as its primary material. The strings within
            the monitor exist within the programming language that exists within
            the web space/internet, that gets transformed into digital visual
            element within the virtual space of the artwork. This digital space
            allows for it to be manipulated in sort of ways that are unique to
            the online environment, showing how the web space is a creative
            medium. What I mean by that is that this artwork is made up of
            strings basically that you cannot interact with materialistic,
            (cannot touch basically). These strings exist within a virtual space
            called the internet that you cannot access without a device that can
            access the internet and has a monitor and a mouse to interact with
            the artwork, (a laptop or computer). According to Danae(2019) this
            is called New Aesthetics. “A combination of virtual and the physical
            internet” (Danae 2019).
          </motion.p>
          <motion.p variants={textContentVariant} className="textContent">
            Although as I mentioned that this artwork exists within a virtual
            space, viewers can engage with it within the web space/virtual
            space. An environment that is dynamic in ways that the artwork can
            be arranged and displayed in real time, and interacted with. This
            artwork, or web art to be specific, represents the evolution of the
            traditional artworks of the past that their material was interacted
            with in person and existed in the real world, now viewers can
            navigate this artwork in the virtual space, over time, and interact
            with it in ways unimaginable without the fear of damaging the
            artwork, and for me that “increases the user experience of the
            viewers”. Providing them with an unimaginable experience. Now this
            artwork provides sensorial experiences through its interactive
            interface. Viewers can interact with it by navigating through the
            virtual space, just dragging your mouse over the strings will
            provide a feeling even I cannot understand. When you drag the mouse
            over the strings, its just like opening your curtains as the strings
            will move also to the side. And when you go down, the strings will
            stretch and bounce back up. This interactive aspect makes the user
            be considered part of the artwork’s behavior and change. And in this
            space (Codepen), the viewer has the ability to not only be a viewer
            but also be an artist as you have the ability to change the artwork.
            As you can see in figure 1 below, you have access to the code that
            brings the artwork to life, you can manipulate it as you see fit.
          </motion.p>

          <motion.p variants={textVariant} className="textContent">
            Within the web space, I do not know if this artwork has meaning to
            it, but as Stuart Hall once mentioned, that the Audiences are the
            ones that give meaning to things and meaning is not fixed. However,
            this artwork might not have meaning but it gives a sense of calm,
            peace and hope. Those strings to me, their ends look like stars that
            give hope, and no matter how many times you try to shatter or tear
            or pull off one, it will always bounce back to its original
            position. Giving a sense of hope and dreams. Their arrangement and
            positions, and the color give off that sense. Now with that, this
            artwork allows viewers to interact with it and create their own
            stories and meaning through it (Hall, 1997).
          </motion.p>
          <motion.p variants={textContentVariant} className="textContent">
            The Visual presentation of this artwork is minimalistic, yet it
            captivates the user. This artwork has nothing but 2 colors. The
            background, which is black and the art, which is gold, arranged in a
            2-dimensional space that resembles a Sky at night with only stars.
            The use of the darkness and the strings creates an interactive
            experience for viewers because at first you are captivated by the
            beautiful golden color, then you ask yourself that what are you
            supposed to do, and you drag your mouse over the strings, and
            everything just pauses in the real life as you are captivated by the
            golden strings. Adding an element of surprise and discovery,
            inviting users to explore and interact with the artwork (Thorlacius,
            2007).
          </motion.p>
          <motion.p variants={textVariant} className="textContent">
            I probably mentioned this but the most captivating thing about this
            artwork is its interactivity. Viewers can actively engage with the
            artwork by minimal gestures, just by moving the mouse over the
            strings and letting the strings follow the mouse till they snap, and
            other ones follow the mouse shows how they give off a sense of
            exploration. Its more like you want to see how far you can stretch
            all the strings. and for those who are interested in the code, you
            have the ability to change the artwork by interacting with the code
            instead, turning you from an observer into one of the artists
            (Danae, 2019).
          </motion.p>
          <motion.p variants={textContentVariant} className="textContent">
            In conclusion, this artwork shows how new/web art has challenged and
            transformed our understanding of art in this digital age, and
            through technology, its aesthetics, technical understandings and
            interactivity, the artwork shows the potential of the internet as a
            medium for exploring creative works, and its an example of how the
            power of technology can create something so immersive for the
            audience worldwide.{" "}
          </motion.p>

          <motion.section variants={textVariant} className="buttonss">
            <motion.button variants={textVariant}>View Artworks</motion.button>
            <motion.button variants={textVariant}>Contact Me</motion.button>
          </motion.section>
        </motion.section>
      </section>
      <motion.section
        className="slidingTextContainers"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Amazing Web Designer
      </motion.section>
    </main>
  );
}

export default TheoryContent;
