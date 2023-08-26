import React from 'react';
import style from "../styles/Navbar.module.css";
import { motion }  from "framer-motion";

const navbarVariations = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.85,
      type: "spring",
      stiffness: 180
    },
  }
}

const Navbar = () => {
  return (
    <motion.div className={style.navbar}
      variants={navbarVariations}
      initial="hidden"
      animate="visible"
    >
        <div>
            <a href="google.com">Joshua</a>
        </div>
        <div className={style.navbar_links}>
          <span><a href="google.com">About Us</a></span>
          <span><a href="google.com">Projects</a></span>
          <span><a href="google.com">Contact Us</a></span> 
          <span><a className={style.download_btn} href='/public/assets/Ibiam_Joshua_Resume.pdf' download>Download CV</a></span>
            
        </div>
    </motion.div>
  )
}

export default Navbar
