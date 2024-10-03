import React from "react";
import "./MobileDetails.css";

const MobileDetails = () => {
  return (
    <div className="mobile-development-details">
      <header className="mobile-dev-header">
        <h1>Mobile App Development</h1>
        <p>Bringing Your Ideas to Life with High-Performance Mobile Apps</p>
      </header>

      <section className="mobile-dev-content">
        <h2>Our Approach</h2>
        <p>
          At Justhitclick-Digital Technologies, we focus on creating mobile
          applications that are intuitive, scalable, and user-friendly. We build
          apps for both Android and iOS platforms, ensuring seamless performance
          and a great user experience. From concept to deployment, we follow a
          well-structured development process tailored to your business needs.
        </p>

        <h2>Technologies We Use</h2>
        <p>
          Our expertise spans a wide range of mobile development technologies.
          We leverage:
        </p>
        <ul>
          <li>
            <strong>React Native:</strong> For cross-platform apps with
            native-like performance.
          </li>
          <li>
            <strong>Flutter:</strong> To build beautifully designed apps for
            both Android and iOS.
          </li>
          <li>
            <strong>Swift & Kotlin:</strong> Native app development for iOS and
            Android.
          </li>
          <li>
            <strong>API Integrations:</strong> Seamless integration with backend
            services, databases, and third-party APIs.
          </li>
        </ul>

        <h2>Key Features We Offer</h2>
        <ul>
          <li>Custom UI/UX design to provide an engaging experience.</li>
          <li>Push notifications for real-time updates.</li>
          <li>Offline functionality for uninterrupted use.</li>
          <li>Secure user authentication (OAuth, Firebase, etc.).</li>
          <li>Integration with IoT devices and smart hardware.</li>
          <li>App maintenance and support services.</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          We understand that every business is unique, and so are its mobile app
          requirements. That’s why we offer:
        </p>
        <ul>
          <li>
            <strong>Tailored Solutions:</strong> Every app is designed
            specifically to meet your business goals.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Rigorous testing and debugging
            ensure flawless performance.
          </li>
          <li>
            <strong>Post-Launch Support:</strong> Ongoing updates, support, and
            feature enhancements.
          </li>
        </ul>
      </section>

      <footer className="mobile-dev-footer">
        <p>
          Interested in taking your business mobile?{" "}
          <a href="/contact">Get in touch with us</a> today to discuss your
          project!
        </p>
      </footer>
    </div>
  );
};

export default MobileDetails;
