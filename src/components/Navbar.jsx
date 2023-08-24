import React from 'react';
import style from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div>
            <a href="google.com">Joshua</a>
        </div>
        <div className={style.navbar_links}>
            <a href="google.com">About Us</a>
            <a href="google.com">Projects</a>
            <a href="google.com">Contact Us</a>
            <a className={style.download_btn} href='/public/assets/Ibiam_Joshua_Resume.pdf' download>Download CV</a>
        </div>
    </div>
  )
}

export default Navbar
