import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../css/design.scss";

import wireframe01 from "../images/MobileHomePage.png";
import wireframe02 from "../images/PCHomePage.png";
import wireframe03 from "../images/PCEssayPage.png";
import wireframe04 from "../images/MobileEssayPage.png";
import wireframe05 from "../images/PCDesignPage01.png";
import wireframe06 from "../images/PCDesignPage02.png";
import wireframe07 from "../images/profilePC.png";
import wireframe08 from "../images/profileMobile.png";
import wireframe09 from "../images/errorPage.png";
import wireframe10 from "../images/artpagePC.png";
import wireframe11 from "../images/artpageMobile.png";
import wireframe12 from "../images/revisedHomepage.png";
// wireframes for website

const wireframes = [
  {
    src: wireframe01,
    description: "Homepage for my Mobile Web Application",
  },
  {
    src: wireframe02,
    description:
      "As a portfolio web application, i want the people who are going to be looking at this to see me first, see who made this web app. With the colours, i chose a bit of dark but visible colour because, i dont want when you to decrease your brightness when opening my application, and because maily i love darkmode.",
  },
  {
    src: wireframe03,
    description:
      "With this Essay page, i thought about keeping it simple and just have the content there, the selling point will be in this case, the animations the moment you load the page. i wanted some eye catching animations the moment you load the page, with colours that are warm yet dark.",
  },
  {
    src: wireframe04,
    description:
      "In the end i changed how my navigation bar looks like and didnt include the buttons at the top because i wanted a unique design, i loved how the navigation bar opens up, and i saw that as a selling point so i decided to keep it for the entire web application.",
  },
  {
    src: wireframe05,
    description:
      "With this page, i first though of making the images apear as you scroll but that seemed to be too much, so i didnt want animations that are just too much and complicated, so i decided to go with one where the images load up one by one, as in they are flying in.",
  },
  { src: wireframe06, description: "Mobile Web Application for Design page" },
  {
    src: wireframe07,
    description:
      "I just kept this simple, just like how you would expect a profile page to look like",
  },
  { src: wireframe08, description: "Profile page for Mobile" },
  {
    src: wireframe09,
    description:
      "This extra page is for incase you try to navigate to a page that does not exist, you will land here, saw this with many websites that if you try to navigate to a page that does not exist, especially with github, when you website is not uploaded, there is a page it redirects you to, thought id take inspiration from that",
  },
  {
    src: wireframe10,
    description:
      "At first this was an experiment, and it was also one of those so called developer mistake that turned good,i wanted the plane to fly over the earth, so the eart was gonna be round and the plane was going to go around it, however with slight calculation mistakes, the plane went inside the 3D earth object and it turned out like that, and i liked it better that way.",
  },
  {
    src: wireframe11,
    description:
      "Net Art page for Mobile devices. This was a fun experiment that turned out well showcasing my artistic skills.",
  },
  {
    src: wireframe12,
    description:
      "Incase you did not notice my revised homepage, i added something i thought of as part of my artwork, its like a spiderweb of sort, initially i wanted to recreate something like the bhaghi artwork mentioned in my Essay, in the theory page, however that failed miserably. I overrestimated my coding skills, however that spiderweb-like thing was what i managed to do in order to compensate for the initial bhaghi artwork.",
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