//tutorial video watched: https://www.youtube.com/watch?v=FkowOdMjvYo

import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow.svg";

//this is a shortcut template that i will use to insert the text and when the condition is met, a certain text will be displayed
const InfoBox = ({ text, link, btnText }) => (
  <section className="info-box">
    <p className="font-medium sm:text-xl text-center text-pink-600">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className=" w-4 h-4 object-contain " />
    </Link>
  </section>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 neo-brutalism-white text-pink-600 mx-5 ">
      Hey You👋, <span className="font-semibold">Louis</span> here
      <br />A Web Developer and Game Designer from Wits University!.
      <p>
        This artwork is the results of my exploration into the world of
        <br />
        3D websites. I have been questioning myself how 3D websites are
        <br />
        designed, and i took some time to actually explore it and this is the
        results.
      </p>
    </h1>
  ),
  2: (
    <InfoBox
      text="Check out my Profile page and check out my github account, i worked on many interesting projects and gained valuable skills along the way"
      link="/profile"
      btnText="Profile"
    />
  ),
  3: (
    <InfoBox
      text="Look at my Amazing Homepage, isn't it amazing, i wanted to showcase my abilities and explore animations"
      link="/home"
      btnText="Home"
    />
  ),
  4: (
    <InfoBox
      text="Why not get in touch with me and maybe we could do something cool together!"
      link="/contact"
      btnText="Contact"
    />
  ),
  5: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 neo-brutalism-white text-pink-600 mx-5 ">
      {" "}
      Credits: https://www.youtube.com/watch?v=FkowOdMjvYo. <br /> Earth by
      (https://skfb.ly/6UoZv) <br /> Author: AntijnvanderGun
      (https://sketchfab.com/AntijnvanderGun)"
    </h1>
  ),
};
//will render that certain text when conditions are met
const Info = ({ currentStage }) => {
  return renderContent[currentStage] || null; //will use this to show cool stuff
};

export default Info;
