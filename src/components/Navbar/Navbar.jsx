import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <h1 className="p__cormorant slide-in-blurred-top">G-Bistro</h1>
      </div>
      <ul className="app__navbar-links slide-in-blurred-top">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login slide-in-blurred-top">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book a Table
        </a>
      </div>
      <div className="app__navbar-menu">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="overlay__open"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-menu_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-menu_links">
              <li className="p__cormorant">
                <a href="#home">Home</a>
              </li>
              <li className="p__cormorant">
                <a href="#about">About</a>
              </li>
              <li className="p__cormorant">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__cormorant">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__cormorant">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
