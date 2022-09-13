import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import s from "./Carousel.module.css";

const Carousell = () => {
  return (
    <div name="carousel" className={s.container}>
      <Carousel
        // className={s.carousel}
        className="carousel"
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
          {/* <p className="legend">Maldives 1</p> */}
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Maldives} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Carousell;
