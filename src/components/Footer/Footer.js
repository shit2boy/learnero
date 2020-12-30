import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mb-3">
      <div className="container">
        <div></div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm">
            <h4>About</h4>
            <p>
              Learnero is an online global platform that connects learners and
              instructors in a wide range of extracurricular activities. We aim
              to bring back fun and be a passionate escape from your usual
              routine. Learn at any time, any place at your own pace!
            </p>
            <div className="">
              <ul className="d-flex">
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm">
            <div className="foot-courses-list">
              <h4>Contact</h4>
              <ul className="d-inline-block">
                <li>
                  <a href="mailto:learneroit@gmail.com">learneroit@gmail.com</a>
                </li>
                <li>
                  <a href="mailto:support@learnero.co">support@learnero.co</a>
                </li>
                <li>
                  <a href="mailto:instructors@learnero.co">
                    instructors@learnero.co
                  </a>
                </li>
                <li>
                  <a href="mailto:careers@learnero.co">careers@learnero.co</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm">
            <div className="foot-courses-list">
              <h4>Quick Links</h4>
              <ul>
                <li>Courses</li>
                <li>About Us</li>
                <li>Meet the Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm">
            <div>
              <h4>Blog</h4>
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/11/high-angle-view-spiral-notepad-adhesive-notes-pen-yellow-background-75x75.jpg"
                    alt="logo-banner"
                    width="75px"
                    height="75px"
                  />
                </div>
                <div>
                  <h6>Learnero’s Top 5 Study Tips</h6>
                  <em> &#x2014; November 20, 2020</em>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div>
                  <img
                    src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/10/qtq80-GUl4oX-75x75.jpeg"
                    alt="logo-banner"
                    width="75px"
                    height="75px"
                  />
                </div>
                <div>
                  <h6>Technology: The Past Vs The Present</h6>
                  <em> &#x2014; October 29, 2020</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
