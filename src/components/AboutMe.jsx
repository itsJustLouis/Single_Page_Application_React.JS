import { motion } from "framer-motion";
import React from "react";
import "../css/aboutme.scss";
import myImage from "../images/TeacherRecord.jpg";

//profile
const profile = {
  name: "Louis Monawe",
  bio:
    "Welcome to my digital playground! I'm a web wizard, game guru, and one in a million Web and Game Developer that is better than you!. With a background in Game Design, Web Development and a flair of design, I merge technology with creativity to build captivating user experiences, wether its on Games, or Websites or Interactive Story Books, even Applications, I DO IT ALL!.",
  hobbies: ["Coding", "Exploring", "Traveling", "Reading", "Gaming", "CODING"],
  profilePicture: myImage,
  contact: {
    email: "l.k.monawe@gmail.com",
    linkedIn: "https://www.linkedin.com/in/louis-monawe-aab967251/",
    github: "https://github.com/itsJustLouis",
  },
};

function AboutMe() {
  return (
    //animation section
    <motion.section
      className="about-me-container"
      initial={{ opacity: 0 }} // Initial opacity set to 0
      animate={{ opacity: 1 }} // Animate state will change opacity to 1
      transition={{ duration: 1 }} // Duration
    >
      {/* Profile Picture */}
      <motion.img
        src={profile.profilePicture}
        alt="Profile"
        className="profile-picture"
        whileHover={{ scale: 1.5 }} // Animation effect on hover, wll grow when hover
      />

      {/* Profile Info with animations*/}
      <section className="profile-info">
        <motion.h1
          className="name"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {profile.name}
        </motion.h1>

        {/* Bio with animation */}
        <motion.p
          className="bio"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {profile.bio}
        </motion.p>

        {/* Hobbies with animation */}
        <section className="hobbies">
          <h2>Hobbies</h2>
          <ul>
            {/* here i mapped hobbies to the lists and applied animation using WhileHover function */}
            {profile.hobbies.map((hobby, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1, color: "#f08" }}>
                {hobby}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Contact Information */}
        <section className="contact">
          <h2>Contact</h2>
          <p>
            Email:
            {/* //aparently mailto will identify the string as an email and open your email application when you click on it */}
            <a href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
          </p>
          <p>
            LinkedIn:
            <a href={profile.contact.linkedIn}>LinkedIn Profile</a>
          </p>
          <p>
            GitHub:
            <a href={profile.contact.github}>GitHub Profile</a>
          </p>
        </section>
      </section>
    </motion.section>
  );
}

export default AboutMe; // Exporting AboutMe component
