import React from "react";
import Card from "./card";

import { motion } from "framer-motion";

import algo from "../icons/algo.svg";
import api from "../icons/api.svg";
import repair from "../icons/repair.svg";
import computer from "../icons/computer.svg";
import ux from "../icons/ux.svg";
import puzzle from "../icons/puzzle.svg";

const About = () => {
  const aboutVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="content_section"
      variants={aboutVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="description">
        I describe my self as someone who's persistant, a quick learner and
        loves problem solving by using simple and scalable solutions.
      </div>
      <div className="data_section">
        <div className="container">
          <p className="sub_heading">What I offer</p>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={computer}
                title="Frontend Development"
                body={[
                  "I can built a beautiful and scalable SPA using ",
                  <strong>HTML,CSS</strong>,
                  " and ",
                  <strong>React.js</strong>,
                ]}
              />
            </div>

            <div className="col-sm-12 col-lg-6">
              <Card
                icon={algo}
                title="Algo and DS"
                body={[
                  "a daily problem solver in ",
                  <strong>HackerRank</strong>,
                  " and ",
                  <strong>Leetcode</strong>,
                ]}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={ux}
                title="UI/UX developer"
                body={[
                  "minimalistic user interface designer using ",
                  <strong>figma</strong>,
                  " and ",
                  <strong>framer</strong>,
                ]}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={puzzle}
                title="Graphics Designer (mm ..Hobby :))"
                body={[
                  " Digital art and character design in free time using ",
                  <strong>Illustrator</strong>,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
