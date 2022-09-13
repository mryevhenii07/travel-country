import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import s from "./Hero.module.css";

import Video from "../../assets/maldivesVideo.mp4";

const Hero = () => {
  return (
    <div className={s.hero}>
      <video autoPlay loop muted id={s.video}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={s.overlay}></div>
      <div className={s.content}>
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className={s.form}>
          <div>
            <input type="text" placeholder="Search Destination" />
          </div>
          <div>
            <button>
              <AiOutlineSearch className={s.icon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
