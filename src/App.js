import React, { Fragment } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavigationBar";
import "./App.css";
import Card from "./components/MeetTheTeam/MeetTeam";
import CoursesCategories from "./components/CoursesCategories/coursesCategories";
import CourseContainer from "./components/recent courses/RecentCourses";
import { categories, pricingType, projects } from "./data";
import Label from "./components/Label/Label";
import Pricing from "./components/pricing/Pricing-card";
import BecomeInstructor from "./components/BecomeInstructor/BecomeInstructor";
import SocialMedia from "./components/Social-media/Social-media";

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
      <CoursesCategories />
      <CourseContainer
        contents={projects}
        title="Recent Course"
        subtitle={categories}
      />
      <Label />
      <Pricing types={pricingType} title="Pricing" />
      <BecomeInstructor />
      <SocialMedia />
    </Fragment>
  );
};

export default App;
