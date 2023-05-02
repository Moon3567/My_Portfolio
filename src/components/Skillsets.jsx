import React from "react";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Skillsets = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center h-10`}>
          My Skillsets.
        </h2>
      </motion.div>

      <div className='mt-15 flex flex-col'>
      </div>
    </>
  );
};

export default SectionWrapper(Skillsets, "work");