import React from "react";
import "./coursesCategories.css";

const CourseSCategories = () => {
  return (
    <div className="grid-container">
      <div className="one grow">
        <img
          src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/12/qtq80-mzExgf.jpeg?time=1608743753"
          alt="art"
          width="100%"
        />
        <div className="grid-title">
          <p className="grid-detail">Art</p>
          <p>0 courses</p>
        </div>
      </div>
      <div className="two grow">
        <img
          src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2018/07/cat_4.jpg?time=1608743753"
          alt="exercise"
          width="100%"
        />
        <div className="grid-title">
          Exercise <p>4 courses</p>
        </div>
      </div>
      <div className="three grow">
        <img
          src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2018/07/cat_3.jpg?time=1608743753"
          alt="music"
          width="100%"
        />
        <div className="grid-title">
          <p className="grid-detail">Material Design</p>
          <p>2 courses</p>
        </div>
      </div>
      <div className="four grow">
        <img
          src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/12/qtq80-pSmzib.jpeg?time=1608743753 "
          alt="design"
          width="100%"
        />
        <div className="grid-title">
          <p className="grid-detail">Music</p>
          <p>3 courses</p>
        </div>
      </div>
      <div className="five grow">
        <img
          src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2018/07/cat_6.jpg?time=1608743753"
          alt="photography"
          width="100%"
        />
        <div className="grid-title">
          <p className="grid-detail">Photography</p>
          <p>2 courses</p>
        </div>
      </div>
      <div className="six grow">
        <img
          src="https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2018/07/cat_1.jpg?time=1608743753"
          alt="software"
          width="100%"
        />
        <div className="grid-title">
          <p className="grid-detail">Software Development</p>
          <p>2 courses</p>
        </div>
      </div>
    </div>
  );
};

export default CourseSCategories;
