import React from "react";
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom'

//sfc: stateless functional comp (shortcut)
import tie from "../images/tie.svg";
import max from "../images/max.jpg";
import pin from "../images/pin.svg";
import github from "../images/github.svg";
import resume from "../resume.pdf";
const SideBar = () => {
  var sidebarVariants = {
    initial: {
      x: "-10vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5, type: "spring" },
    },
  };
  const handleSentEmail = () => window.open("mailto:jahongir95119@gmail.com");
  // const changeMode = () => {
  //     document.querySelector('.')
  // }

  return (
    <motion.div
      className="sideBar_custom"
      variants={sidebarVariants}
      initial="initial"
      animate="visible"
    >
      <img src={max} alt="avatar" className="rounded-circle image_custom" />
      <h3 className="name">
        <span>Jahongir</span> Xo'jamuratov
      </h3>
      <div className="title bg-gray side_item">Web developer</div>
      <a href={resume} download="resume.pdf">
        <div className="cv side_item">
          <img src={tie} alt="resume" className="icon_small" /> Download Desume
        </div>
      </a>

      <div className="contact">
        <div className="location side_item">
          <img src={pin} alt="pin" className="icon_small  mr-1" />{" "}
          Urgench,Uzbekistan
        </div>
        <a href="https://github.com/jahongir7/">
          <div className="github side_item">
            {" "}
            <img
              src={github}
              alt="git"
              className="icon_small social_icon mr-1"
            />{" "}
            github{" "}
          </div>
        </a>
        <div className="email_id side_item"> jahongir95119@gmail.com </div>
        <div className="phone side_item"> 943127774 </div>
      </div>

      <div className="email side_item mt-6" onClick={handleSentEmail}>
        {" "}
        email me{" "}
      </div>
      {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
    </motion.div>
  );
};

export default SideBar;
