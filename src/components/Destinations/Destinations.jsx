import React from "react";
import s from "./Destinations.module.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

const Destinations = () => {
  return (
    <div name="destinations" className={s.destinations}>
      <div className={s.container}>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbeans Best Beaches</p>
        <div className={`${s.imgContainer} `}>
          <img
            className={`${s.spanThree} ${s.imageGridRowTwo}`}
            src={BoraBora}
            alt="#"
          />
          <img src={BoraBora2} alt="#" />
          <img src={Maldives} alt="#" />
          <img src={Maldives2} alt="#" />
          <img src={KeyWest} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
