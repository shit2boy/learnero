import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="p-4">
      <div>
        <h3 className="title">Follow us on Social Media!</h3>
        <hr style={{ width: "15%" }} className="hr-line" />
        <div className="social">
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
    </div>
  );
};

export default SocialMedia;
