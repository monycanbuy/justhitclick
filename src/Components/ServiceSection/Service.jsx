import React from "react";
import "./Service.css";
import internet from "../../assets/images/internet.svg";
import mobile from "../../assets/images/mobile.png";
import iot from "../../assets/images/cloud.png";
import { Link } from "react-router-dom"; // Import Link for client-side navigation

const Service = () => {
  return (
    <div className="services-container">
      <div className="service">
        <img src={internet} alt="Web Development" className="service-image" />
        <div className="service-caption">
          <h3>Web Development</h3>
          <p>
            Building modern, responsive websites using the latest technologies.
          </p>
          <Link to="/webdetails" className="read-more">
            Read More
          </Link>
        </div>
      </div>
      <div className="service">
        <img src={mobile} alt="Mobile Development" className="service-image" />
        <div className="service-caption">
          <h3>Mobile Development</h3>
          <p>
            Creating seamless and engaging mobile applications for iOS and
            Android.
          </p>
          <Link to="/mobiledetails" className="read-more">
            Read More
          </Link>
        </div>
      </div>
      <div className="service">
        <img src={iot} alt="IoT Applications" className="service-image" />
        <div className="service-caption">
          <h3>IoT Applications</h3>
          <p>
            Innovative IoT solutions that integrate hardware and software for
            smart devices.
          </p>
          <Link to="/iotdetails" className="read-more">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
