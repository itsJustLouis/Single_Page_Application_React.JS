import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../css/design.scss";

import wireframe01 from "../videos/Recipe.mp4";
import wireframe02 from "../videos/Routes.mp4";
// import wireframe03 from "../images/PCEssayPage.png";
// import wireframe04 from "../images/MobileEssayPage.png";
// import wireframe05 from "../images/PCDesignPage01.png";
// import wireframe06 from "../images/PCDesignPage02.png";
// import wireframe07 from "../images/profilePC.png";
// import wireframe08 from "../images/profileMobile.png";
// import wireframe09 from "../images/errorPage.png";
// import wireframe10 from "../images/artpagePC.png";
// import wireframe11 from "../images/artpageMobile.png";
// import wireframe12 from "../images/revisedHomepage.png";
import RecipeBook from "./recipeVideo";
// wireframes for website

const wireframes = [
  {
    src: wireframe01,
    description: "Food Recipe Web Application.",
  },
  {
    src: wireframe02,
    description: "Bus ticket and Routes Booking Web Application.",
  },
  // {
  //   src: wireframe03,
  //   description: "",
  // },
  // {
  //   src: wireframe04,
  //   description: "",
  // },
  // {
  //   src: wireframe05,
  //   description: "",
  // },
  // { src: wireframe06, description: "" },
  // {
  //   src: wireframe07,
  //   description: "",
  // },
  // { src: wireframe08, description: "" },
  // {
  //   src: wireframe09,
  //   description: "",
  // },
  // {
  //   src: wireframe10,
  //   description: "",
  // },
  // {
  //   src: wireframe11,
  //   description: "",
  // },
  // {
  //   src: wireframe12,
  //   description: "",
  // },
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

  // Function to handle click on a wireframe
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
        <motion.section
          className="gallery-item"
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} // Delay animation for each wireframe
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          whileTap={{ scale: 0.9 }} // Scale animation on tap/click
          onClick={() => handleClick(wireframe)} // Click handler to display wireframe and text
        >
          <video
            src={wireframe.src}
            alt={`Wireframe ${index + 1}`}
            controls
            width="100%" // Adjust width as needed
          />
          <p>{wireframe.description}</p> {/* Description */}
        </motion.section>
      ))}

      {selectedWireframe && (
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
            <video
              src={selectedWireframe.src}
              alt="Selected wireframe"
              controls
              width="100%" // Adjust width as needed
            />
            <p>{selectedWireframe.description}</p>
          </motion.section>
        </motion.section>
      )}
    </section>
  );
}

export default DesignComponent;
