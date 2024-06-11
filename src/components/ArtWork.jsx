//followed this tutorial for this: https://www.youtube.com/watch?v=AKM3EodFZek
import "../css/noPage.scss";
import "../css/artwork.scss";

import React, { useEffect, useRef } from "react";
import { TweenLite, Circ } from "gsap";
//creates a animation, thats like a spider, spreads to another point in the background, and responds to user interactions through mouse drags
const BackgroundArt = () => {
  const largeHeaderRef = useRef(null);
  const canvasRef = useRef(null);
  let width, height, ctx, points, target;
  let animateHeader = true;

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

    points = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

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

  const addListeners = () => {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  };

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

  const scrollCheck = () => {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = `${height}px`;
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
  };

  const initAnimation = () => {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  };

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
    requestAnimationFrame(animate);
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

  return (
    <section id="large-header" className="large-header" ref={largeHeaderRef}>
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
    </section>
  );
};

export default BackgroundArt;
