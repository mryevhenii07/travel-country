import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import s from "./NavBar.module.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => setNav(!nav);
  return (
    <div className={nav ? `${s.navbar} ${s.navbarBg} ` : `${s.navbar}`}>
      <div className={nav ? `${s.logo} ${s.dark}` : `${s.logo}`}>
        <h2>BEACHES</h2>
      </div>

      <ul className={s.navMenu}>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
      </ul>
      <div className={s.navIcons}>
        <BiSearch className={s.icon} style={{ marginRight: "16px" }} />
        <BsPerson className={s.icon} />
      </div>
      <div className={s.hamburger} onClick={handelNav}>
        {nav ? (
          <AiOutlineClose style={{ color: "#000" }} className={s.icon} />
        ) : (
          <HiOutlineMenuAlt4 className={s.icon} />
        )}
      </div>
      <div className={nav ? `${s.mobileMenu} ${s.active} ` : `${s.mobileMenu}`}>
        <ul className={s.mobileNav}>
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className={s.mobileMenuBottom}>
          <div className={s.menuIcons}>
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className={s.socialIcons}>
            <FaFacebook className={s.icon} />
            <FaInstagram className={s.icon} />
            <FaTwitter className={s.icon} />
            <FaGithub className={s.icon} />
            <FaYoutube className={s.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
