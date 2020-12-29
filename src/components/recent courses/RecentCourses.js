import React from "react";
import "./RecentCourses.css";
import CustomBtn from "../customButton/customButton";

const CourseContainer = ({ title, subtitle, contents, ...otherProps }) => {
  return (
    <div className="container mt-3">
      <h3 className="title">{title}</h3>
      <hr style={{ width: "15%" }} className="hr-line" />
      <div className="p-2 m-4">
        <CustomBtn style={{ display: "inline", borderRadius: "25px" }}>
          All Categories
        </CustomBtn>
        {subtitle.map((cat) => (
          <p className="category"> {cat}</p>
        ))}
      </div>
      <div>
        <div className="row">
          {contents.map((item) => (
            <div className="col-lg-4 col-md col-sm mb-3">
              <div class="card" style={{ maxWidth: "350px" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="Card "
                  style={{ minWidth: "100%" }}
                />
                <div className="card-body">
                  <p className="text-left">{item.name} &#8250;</p>
                  {/* <h4 className="card-title">John Doe</h4> */}
                  <p className="card-text">{item.info}</p>
                  <hr />
                  <span className="text-right">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="show-all-btn">
        <CustomBtn style={{ backgroundColor: "#007cba", borderRadius: "25px" }}>
          Show All
        </CustomBtn>
      </div>
    </div>
  );
};

export default CourseContainer;
