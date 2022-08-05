import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Frontend Development",
    description: "I am a good frontend developer.",
    imgURL: images.about01,
  },
  {
    title: "Backend Development",
    description: "I am a good backend developer.",
    imgURL: images.about02,
  },
  {
    title: "Modern Web Design",
    description: "I am a good modern web designer.",
    imgURL: images.about03,
  },
  {
    title: "Web Animations",
    description: "I am very skillfull at the web animations.",
    imgURL: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Apps</span>
        <br />
        Means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
