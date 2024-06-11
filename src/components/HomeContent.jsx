//for the particles i followed this tutorial on youtube:  https://www.youtube.com/watch?v=AKM3EodFZek

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "../css/home.scss";
import scroll from "../images/scroll.png";
import hero from "../images/hero.png";
import { Link } from "react-router-dom";
import "../css/noPage.scss";
import "../css/artwork.scss";

import { TweenLite, Circ } from "gsap";

function HomeContent() {
  // Using useRef to access dom elements so i can incorporate the other component in here
  // const backgroundArtRef = useRef(null);

  //will access the DOM elements for the header and canvas.
  const largeHeaderRef = useRef(null);
  const canvasRef = useRef(null);
  let width, height, ctx, points, target;
  let animateHeader = true;

  //will set canvas and header size to screen or window size
  const initHeader = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = `${height}px`;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    //create a grid of points with just small random offsets for my web
    points = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }
    //will find the closest 5 points to each point, the main point and create a circle for that point
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    for (let i in points) {
      const c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[i].circle = c;
    }
  };
  //event listeners for interactions
  const addListeners = () => {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  };
  //interactions
  const mouseMove = (e) => {
    let posx = 0,
      posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  };
  //interactions
  const scrollCheck = () => {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  };
  //for when screensize is reduced it will also update the canvas
  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = `${height}px`;
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
  };
  //start animation loop and initiate the points to shift so it creates a motion
  const initAnimation = () => {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  };
  //will clear the canvas and draw lines between points and their closest points, the points are the circles by the way,
  const animate = () => {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate); //for smooth animations
  };
  //this function snaps to another point showing nice animations through moving to another point like its spreading
  const shiftPoint = (p) => {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(p);
      },
    });
  };
  //as the name suggests this function draws the lines
  const drawLines = (p) => {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      ctx.stroke();
    }
  };
  //and this one the circles
  function Circle(pos, rad, color) {
    this.pos = pos || null;
    this.radius = rad || null;
    this.color = color || null;

    this.draw = function () {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(156,217,249,${this.active})`;
      ctx.fill();
    };
  }
  //this function calculates the distance between 2 points
  const getDistance = (p1, p2) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };
  //cleans up event listener
  useEffect(() => {
    initHeader();
    initAnimation();
    addListeners();
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const textVariants = {
    // Variants allow me to create smooth animations using the initial state and the animate state, from framer motion.
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
      <section id="large-header" className="large-header" ref={largeHeaderRef}>
        <canvas id="demo-canvas" ref={canvasRef}></canvas>

        <section className="wrapper">
          <motion.section
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
              <Link to="/webart">
                <motion.button variants={textVariants}>
                  View Artworks
                </motion.button>
              </Link>
              {/* <Link to="../pages/contact">
                <motion.button variants={textVariants}>
                  Contact Me
                </motion.button>
              </Link> */}
            </motion.section>
            <motion.img src={scroll} alt="" variants={textVariants} />
          </motion.section>
          {/* useref
        <BackgroundArt ref={backgroundArtRef} className="background-art" /> */}
        </section>

        <motion.section
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Programmer Designer Writer Game Maker
        </motion.section>
        <section className="imageContainer">
          <img src={hero} alt="" />
        </section>
      </section>
    </main>
  );
}

export default HomeContent;
