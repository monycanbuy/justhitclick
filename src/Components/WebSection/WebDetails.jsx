import React from "react";
import "./WebDetails.css";

const WebDetails = () => {
  return (
    <div className="webdev-details">
      <header className="webdev-header">
        <h1>Empowering Businesses with Cutting-Edge Web Solutions</h1>
      </header>
      <div className="webdev-content">
        <section className="webdev-intro">
          <p>
            At Justhitclick, we specialize in building modern, responsive, and
            high-performance websites tailored to meet your business needs.
            Whether you're looking to establish your online presence, enhance
            customer engagement, or boost sales, we provide comprehensive web
            development solutions that align with your goals.
          </p>
        </section>

        <section className="webdev-services">
          <h2>What We Offer:</h2>
          <ul>
            <li>
              <strong>Custom Website Development:</strong> We build websites
              from scratch based on your specific business requirements. Every
              design is unique and tailored to reflect your brand identity.
            </li>
            <li>
              <strong>Responsive Design:</strong> Our websites are fully
              responsive, ensuring they work seamlessly across all devices —
              desktops, tablets, and mobile phones.
            </li>
            <li>
              <strong>E-commerce Solutions:</strong> We design secure, scalable
              e-commerce platforms, including payment integration and inventory
              management.
            </li>
            <li>
              <strong>Content Management Systems (CMS):</strong> We offer CMS
              solutions like WordPress and Joomla, allowing you to update
              content without coding knowledge.
            </li>
            <li>
              <strong>Search Engine Optimization (SEO):</strong> We ensure your
              site is optimized for search engines, improving visibility and
              traffic.
            </li>
          </ul>
        </section>

        <section className="webdev-tech">
          <h2>Technologies We Use:</h2>
          <p>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React, Vue.js,
            Bootstrap
            <br />
            <strong>Backend:</strong> C#, Node.js, Python (Django), PHP
            (Laravel), ASP.NET
            <br />
            <strong>Databases:</strong> MSSQL, MySQL, PostgreSQL, MongoDB
            <br />
            <strong>CMS:</strong> WordPress, Joomla, Drupal
            <br />
            <strong>E-commerce:</strong> WooCommerce, Shopify, Magento
          </p>
        </section>

        <section className="webdev-why">
          <h2>Why Choose Us:</h2>
          <ul>
            <li>
              <strong>Expert Team:</strong> Our team consists of experienced
              developers, designers, and strategists who deliver top-tier web
              development services.
            </li>
            <li>
              <strong>Timely Delivery:</strong> We prioritize deadlines and
              deliver projects on time without compromising quality.
            </li>
            <li>
              <strong>Ongoing Support:</strong> We provide continuous support
              and maintenance to keep your website updated and running smoothly.
            </li>
          </ul>
        </section>

        <section className="webdev-cta">
          <h2>Ready to bring your vision to life?</h2>
          <footer className="mobile-dev-footer">
            <p>
              Interested in taking your business mobile?{" "}
              <a href="/contact">Get in touch with us</a> today to discuss your
              project!
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default WebDetails;
