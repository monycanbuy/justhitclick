import React from "react";
import "./Team.css";
import pics1 from "../../assets/images/potocta.jpg";
import pics2 from "../../assets/images/dason.png";
import pics3 from "../../assets/images/blessing.png";

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        <div className="team-card">
          <img src={pics1} alt="Team Member" className="team-avatar" />
          <h3>Josh Adeniyi</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-card">
          <img src={pics3} alt="Team Member" className="team-avatar" />
          <h3>Blessing Omowumi</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-card">
          <img src={pics2} alt="Team Member" className="team-avatar" />
          <h3>Dason Mamman</h3>
          <p>Project Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
