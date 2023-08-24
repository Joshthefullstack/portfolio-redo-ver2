import React from 'react';
import Navbar from '../components/Navbar';
// import Grop_1 from "../Group_1.png";
// import Group_2 from "../Group_2.png";
import Group_4 from "../group_4.png"
import style from "../styles/HomePage.module.css";
import ReactTyped from "react-typed";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <section className={style.first_section}>
        <div className={style.hero_text}>
          <h2>Hello</h2>
          <h1>I am {" "} <ReactTyped 
              strings={["Ibiam Joshua"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
          /></h1>
         <p>A front-end developer, a graphics designer, 
          desktop publisher.</p> 
        </div>
        <img src={Group_4} alt="hero_img"/>
        <div className={style.image_shadow}></div>
      </section>
    </div>
  )
}

export default HomePage
