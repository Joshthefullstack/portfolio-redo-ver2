import React from 'react';
import Navbar from '../components/Navbar';
import Group_4 from "../assets/group_4.png"
import style from "../styles/HomePage.module.css";
import ReactTyped from "react-typed";
import {motion} from "framer-motion";

const firstSectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 5
    }
  }
}

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <motion.section className={style.first_section} 
        variants={firstSectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={style.hero_text}>
          <h2>Hello</h2>
          <h1>I am Ibiam Joshua</h1>
          <ReactTyped
          strings={["Frontend Developer", "Graphics Designer", "Hook-Up Guy"]}
          typeSpeed={200}
          loop
          backSpeed={30}
          cursorChar="|"
          showCursor={true}
          />
        </div>
        <img src={Group_4} alt="hero_img" className={style.hero_img} />
      </motion.section>
    </div>
  )
}

export default HomePage
