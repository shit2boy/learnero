import React, { Fragment } from "react";
import Hero from "./components/Hero/Hero";
// import Courses from "./components/Resume/Resume";
import NavBar from "./components/NavBar/NavigationBar";
import { NavLink } from "react-router-dom";
import "./App.css";
import Card from "./components/MeetTheTeam/MeetTeam";

const App = () => {
  return (
    <Fragment>
      <div className="header-container  ">
        <div className="header">
          <p className="mr-3">
            <i className="fas fa-user"></i> Login
          </p>
          {" | "}
          <p className="ml-3">Register</p>
        </div>
      </div>
      <NavBar />
      <Hero />
      <Card />
    </Fragment>
  );
};

export default App;
