import React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import MyCv from "./cv.pdf";
import { styles } from "../styles";

const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = MyCv; // Replace with the actual path to your resume PDF
    downloadLink.download = "bibhash-lenka.pdf"; // Replace with the actual filename of your resume
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <motion.div id="resume" variants={textVariant()}>
      <p className={styles.sectionSubText}>Download CV Here</p>
      <button className={styles.sectionHeadText} onClick={handleDownload}>
        Get Resume
      </button>
    </motion.div>
  );
};

export default SectionWrapper(Resume, "");
