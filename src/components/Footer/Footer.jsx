import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import s from "./Footer.module.css";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <h3>BEACHES.</h3>
          <div className={s.social}>
            <FaFacebook className={s.icon} />
            <FaInstagram className={s.icon} />
            <FaTwitter className={s.icon} />
            <FaPinterest className={s.icon} />
            <FaYoutube className={s.icon} />
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.left}>
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className={s.right}>
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
