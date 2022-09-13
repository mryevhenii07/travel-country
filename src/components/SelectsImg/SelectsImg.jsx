import React from "react";
import s from "./SelectsImg.module.css";
// import BoraBora from '../../assets/borabora.jpg';

function SelectsImg({ bgImg, text }) {
  return (
    // <div className={s.wrap}>
    <div className={s.selectsLocation}>
      <img src={bgImg} alt="/" />
      <div className={s.overlay}>
        <p>{text}</p>
      </div>
    </div>
    // </div>
  );
}

export default SelectsImg;
