import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={Logo} alt="logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">Library</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleToggleMenu}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
