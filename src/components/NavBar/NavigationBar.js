import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container nav-container">
        <a className="navbar-brand" href="/">
          <img
            src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/10/learnero-1.png"
            style={{ width: "150px" }}
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          onClick={() => toggleNav()}
        >
          <i className="fas fa-align-left" style={{ color: "red" }}></i>
        </button>
        <div
          className={
            (showNav ? "show" : "") +
            " collapse navbar-collapse justify-content-center"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeStyle={activeStyle} className="nav-link" to="/">
                {" "}
                COURSES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                MEET THE TEAM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <div className="nav-item social-icon">
            <i className="nav-link fas fa-heart"></i>
          </div>
          <div className="nav-item p-1" style={{ border: "2px solid red" }}>
            <i style={{ color: "red" }} className=" fas fa-search"></i>
          </div>
          <div className="navbar-nav ml-5 social-icon">
            <i
              style={{ color: "white" }}
              className="nav-link fab fa-facebook"
            ></i>
            <i
              style={{ color: "white" }}
              className="nav-link fab fa-instagram"
            ></i>
            <i className="nav-link fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
const activeStyle = {
  borderBottom: "2px red solid",
  textDecoration: "none",
  color: "#632632",
};

export default NavBar;
