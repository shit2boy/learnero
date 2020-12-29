import React from "react";

const BecomeInstructor = () => {
  return (
    <div style={{ background: "#1f1d1d" }}>
      <div className="container mt-5 p-5">
        <h3 className="title">Become an Instructor</h3>
        <hr style={{ width: "15%" }} className="hr-line" />

        <div>
          <div className="row">
            <div className="col-lg-6 col-md col-sm mb-3 p-2">
              <div style={{ display: "grid", placeItems: "center" }}>
                <img
                  src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/10/Frame-12-449x371.png"
                  alt="instructor"
                  width="100%"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md col-sm mb-3">
              <div className=" p-3">
                <h5>
                  Be a part of our community of Profession
                  <br /> teachers!
                </h5>
                <div>
                  <p className="p-2">
                    Interact with teachers from the same field, gain an
                    opportunity to expand your reach of students, join a diverse
                    community of people from all over the world, share your
                    skills with everyone, make an additional income & so much
                    more!
                  </p>
                  <div>
                    <h4>
                      <span style={{ borderBottom: "2px solid" }}>
                        Get Start
                      </span>
                      <span
                        style={{ color: "#fcb045", borderBottom: "2px solid" }}
                      >
                        ed &#8250;
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
