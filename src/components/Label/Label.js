import React from "react";
import "./Label.css";

const Label = () => {
  return (
    <div
      className="label-container"
      style={{ background: "#000000", height: "100px" }}
    >
      <div className="container">
        <div className=" row">
          <div className="col-lg-3 col-md col-sm">
            <h5 className="label-content">
              <i
                className="p-1 fas fa-universal-access"
                style={{ color: "#B0352" }}
              ></i>

              <span style={{ borderBottom: "1px solid" }}>
                Unlimited Access
              </span>
            </h5>
          </div>
          <div className="col-lg-3 col-md-4 col-sm">
            <h5>
              <i
                className="p-1 fas fa-map-marker-alt"
                style={{ color: "#006ba1" }}
              ></i>
              <span style={{ borderBottom: "1px solid" }}>
                Anytime,AnyPlace
              </span>
            </h5>
          </div>
          <div className="col-lg-3 col-md-4 col-sm">
            <h5>
              <i
                className="p-1 fas fa-graduation-cap"
                style={{ color: "#006ba1" }}
              ></i>
              <span style={{ borderBottom: "1px solid" }}>
                Experienced teachers
              </span>
            </h5>
          </div>
          <div className="col-lg-3 col-md-4 col-sm">
            <h5>
              <i
                className="p-1 fas fa-comments"
                style={{ color: "#c9c20b" }}
              ></i>{" "}
              <span style={{ borderBottom: "1px solid" }}>Students Forum</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
