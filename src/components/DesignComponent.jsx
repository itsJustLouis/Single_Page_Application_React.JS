import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../css/design.scss";

// Google Drive direct link format
const wireframes = [
  {
    src:
      "https://drive.google.com/uc?export=download&id=1jicniNl8GZCwjAaQCmIbzVYF4VeKvklC",
    description: "Food Recipe Web Application.",
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=17IxD_XhHY0mb2Y9HWJaP1pVEAOidUDNf",
    description: "Bus ticket and Routes Booking Web Application.",
  },
];

function DesignComponent() {
  const [selectedWireframe, setSelectedWireframe] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < wireframes.length; i++) {
        await controls.start({ scale: [0, 1], transition: { duration: 0.5 } });
      }
    };
    sequence();
  }, [controls]);

  const handleClick = (wireframe) => {
    setSelectedWireframe(wireframe);
  };

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
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(wireframe)}
        >
          <video src={wireframe.src} controls width="100%" />
          <p>{wireframe.description}</p>
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
            <video src={selectedWireframe.src} controls width="100%" />
            <p>{selectedWireframe.description}</p>
          </motion.section>
        </motion.section>
      )}
    </section>
  );
}

export default DesignComponent;
