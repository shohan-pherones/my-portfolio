import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleWorkFilter = (item) => {};

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio Showcase</span>
      </h2>

      <div className="app__work-filter">
        {["React Apps", "Web Apps", "Mobile Apps", "UI/UX"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-tex ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div></motion.div>
    </>
  );
};

export default Work;
