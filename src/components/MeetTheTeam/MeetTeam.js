import React from "react";
import "./card.css";
const Card = () => {
  const projects = [
    {
      name: "FLEXIBILITY",
      info:
        "Our on-demands videos ensure flexibility so that you can learn whenever you want ",
    },
    {
      name: "SUPPORT",
      info:
        "Our chat function allow interactions with teachers so that learning never stop ",
    },
    {
      name: "DOWNLOADS",
      info:
        "Our downloads feature ensure flexibility so that you can learn whenever you want ",
    },
    {
      name: "COMMUNITY",
      info:
        "Our 7 categories & global community of brilliant teachers give you the choice tolearn base on your comfort ",
    },
  ];

  return (
    <div className="card-features">
      <div className="container">
        <div className="row">
          <div className="col-lg col-sm-1 col-md-3 mb-3">
            <div style={{ width: "220px" }}>
              <h4>
                <span style={{ color: "red" }} className="far fa-clock"></span>{" "}
                <span style={{ borderBottom: "2px solid" }}>FLEXIBILITY</span>
              </h4>
              <p className="text-center">
                Our on-demands videos ensure flexibility so that you can learn
                whenever you want.
              </p>
            </div>
          </div>
          <div className="col-lg col-sm-1 col-md-3 mb-3">
            <div style={{ width: "220px" }}>
              <h4>
                <span
                  className="fas fa-comments"
                  style={{ color: "#005a98" }}
                ></span>{" "}
                <span style={{ borderBottom: "2px solid" }}>SUPPORT</span>
              </h4>
              <p className="text-center">
                Our chat function allow interactions with teachers so that
                learning never stop.
              </p>
            </div>
          </div>
          <div className="col-lg col-sm-1 col-md-3 mb-3">
            <div style={{ width: "220px" }}>
              <h4>
                <span
                  className="fas fa-download"
                  style={{ color: "#005a87" }}
                ></span>{" "}
                <span style={{ borderBottom: "2px solid" }}>DOWNLOADS</span>
              </h4>
              <p className="text-center">
                Our downloads feature ensure flexibility so that you can learn
                whenever you want.
              </p>
            </div>
          </div>
          <div className="col-lg col-sm-1 col-md-3 mb-3">
            <div style={{ width: "220px" }}>
              <h4>
                <span
                  className="fas fa-users"
                  style={{ color: "#e6e615" }}
                ></span>{" "}
                <span style={{ borderBottom: "2px solid" }}>COMMUNITY</span>
              </h4>
              <p className="text-center">
                Our 7 categories & global community of brilliant teachers give
                you the choice tolearn base on your comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
