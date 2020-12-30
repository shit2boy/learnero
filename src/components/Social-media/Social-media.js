import React from "react";
import { Parallax, Background } from "react-parallax";
import "./SocialMedia.css";

const SocialMedia = () => {
  const bckgrnd = {
    /* The image used */
    backgroundImage:
      "linear - gradient(to right, rgba(150, 107, 107, 0), rgb(197, 117, 117))",

    maxHeight: "300px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  };

  return (
    <div className="p-4">
      <Parallax bgImage={bckgrnd} strength={500}>
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
      </Parallax>
    </div>
  );
};

export default SocialMedia;
