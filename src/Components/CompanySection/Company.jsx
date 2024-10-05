import React from "react";
import "./Company.css";

const Company = () => {
  return (
    <div className="about-details-container">
      <section className="about-company">
        <h2>What We Do</h2>
        <p>
          Justhitclick-Digital Technologies Limited specializes in providing
          cutting-edge digital solutions for web, mobile, and IoT applications.
          We focus on delivering tailored solutions that empower businesses and
          ensure long-term success in today’s competitive digital landscape.
        </p>
      </section>

      <section className="how-we-deliver">
        <h2>How We Deliver Our Services</h2>
        <ul>
          <li>
            <strong>Consultation:</strong> We begin by understanding your
            business needs and project requirements, ensuring that we align with
            your goals.
          </li>
          <li>
            <strong>Planning:</strong> We develop a comprehensive plan with
            milestones, ensuring transparency and efficient execution.
          </li>
          <li>
            <strong>Design & Development:</strong> Our expert team of developers
            and designers work on creating top-notch solutions that are scalable
            and reliable.
          </li>
          <li>
            <strong>Testing & Deployment:</strong> We rigorously test all
            aspects of the project to ensure it meets our high standards before
            deploying to production.
          </li>
          <li>
            <strong>Support & Maintenance:</strong> We provide ongoing support
            and maintenance to ensure your solution continues to perform
            optimally.
          </li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <p>
          At Justhitclick-Digital Technologies, we understand that every
          business is unique, and we pride ourselves on offering customized
          solutions that meet the specific needs of our clients. Here’s why you
          should partner with us:
        </p>
        <ul>
          <li>
            <strong>Experience:</strong> Our team has years of experience in
            delivering high-quality digital solutions across various industries.
          </li>
          <li>
            <strong>Expertise:</strong> We leverage the latest technologies to
            ensure our solutions are modern, efficient, and future-proof.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> We prioritize client
            satisfaction and work closely with you throughout the entire
            process.
          </li>
          <li>
            <strong>Value for Money:</strong> We offer competitive pricing
            without compromising on quality, ensuring you get the best return on
            investment.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We’re here for you even after the
            project ends, offering continuous support to keep your solutions
            running smoothly.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Company;
