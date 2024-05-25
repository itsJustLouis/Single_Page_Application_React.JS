import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../css/design.scss";

import wireframe01 from "../images/MobileHomePage.png";
import wireframe02 from "../images/PCHomePage.png";
import wireframe03 from "../images/MobileEssayPage.png";
import wireframe04 from "../images/PCEssayPage.png";
import wireframe05 from "../images/PCDesignPage01.png";
import wireframe06 from "../images/PCDesignPage02.png";
import wireframe07 from "../images/MobileHomePage.png";
import wireframe08 from "../images/MobileHomePage.png";
import wireframe09 from "../images/MobileHomePage.png";
import wireframe10 from "../images/MobileHomePage.png";
import wireframe11 from "../images/MobileHomePage.png";
import wireframe12 from "../images/MobileHomePage.png";
// wireframes
const wireframes = [
  {
    src: wireframe01,
    description: "Homepage for my Mobile Web Application",
  },
  {
    src: wireframe02,
    description:
      "Homepage for my Larger Screen Mobile Web Application: I chose this style because, as a portfolio web application, i want the people who are going to be looking at it, to see me first, see who they are going to know in this web application and what i am capable of. With the colours, i chose a bit of dark but visible colour because, i dont want when you to decrease your brightness when opening my application, and because maily i love darkmode.",
  },
  { src: wireframe03, description: "Style guide for wireframe 3" },
  { src: wireframe04, description: "Style guide for wireframe 4" },
  { src: wireframe05, description: "Style guide for wireframe 5" },
  { src: wireframe06, description: "Style guide for wireframe 6" },
  { src: wireframe07, description: "Style guide for wireframe 7" },
  { src: wireframe08, description: "Style guide for wireframe 8" },
  { src: wireframe09, description: "Style guide for wireframe 9" },
  {
    src: wireframe10,
    description: "Style guide for wireframe 10",
  },
  {
    src: wireframe11,
    description: "Style guide for wireframe 11",
  },
  {
    src: wireframe12,
    description: "Style guide for wireframe 12",
  },
];

function DesignComponent() {
  const [selectedWireframe, setSelectedWireframe] = useState(null);
  const controls = useAnimation(); // Controls for animations

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < wireframes.length; i++) {
        await controls.start({ scale: [0, 1], transition: { duration: 0.5 } }); // Animation sequence to zoom in images sequentially
      }
    };

    sequence();
  }, [controls]); // will Run effect only once when controls change

  // Function to handle click on an image
  const handleClick = (wireframe) => {
    setSelectedWireframe(wireframe);
  };

  // Function to close the modal
  const handleClose = () => {
    setSelectedWireframe(null);
  };

  return (
    <section className="gallery">
      {wireframes.map((wireframe, index) => (
        // Gallery item with motion animation, will deal with delaying image, hover and click on image
        <motion.section
          className="gallery-item"
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} // Delay animation for each image
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          whileTap={{ scale: 0.9 }} // Scale animation on tap/click
          onClick={() => handleClick(wireframe)} // Click handler to display image and text
        >
          <img src={wireframe.src} alt={`Wireframe ${index + 1}`} />{" "}
          {/* Image */}
          <p>{wireframe.description}</p> {/* Description */}
        </motion.section>
      ))}

      {selectedWireframe && (
        // Modal for displaying selected wireframe
        <motion.section
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.section
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* image and description */}
            <img src={selectedWireframe.src} alt="Selected wireframe" />{" "}
            <p>{selectedWireframe.description}</p>
          </motion.section>
        </motion.section>
      )}
    </section>
  );
}

export default DesignComponent;
