import React from "react";
import "./IotDetails.css";

const IotDetails = () => {
  return (
    <div className="iot-details">
      <header className="iot-header">
        <h1>Revolutionizing Industries with IoT Solutions</h1>
      </header>
      <div className="iot-content">
        <section className="iot-intro">
          <p>
            At Justhitclick, we design and develop custom IoT solutions that
            connect devices, data, and people to deliver smart and efficient
            systems. Our goal is to empower businesses by integrating hardware
            and software, enhancing data-driven decision-making, and automating
            processes.
          </p>
        </section>

        <section className="iot-services">
          <h2>What We Offer:</h2>
          <ul>
            <li>
              <strong>Smart Device Integration:</strong> We develop smart
              solutions that allow seamless interaction between devices,
              improving efficiency and user experience.
            </li>
            <li>
              <strong>IoT Platform Development:</strong> We build platforms to
              manage and monitor connected devices, with features like real-time
              data collection, analytics, and remote control.
            </li>
            <li>
              <strong>Data Management & Analytics:</strong> Our IoT solutions
              gather and process data to provide actionable insights for better
              decision-making and predictive maintenance.
            </li>
            <li>
              <strong>Custom IoT Application Development:</strong> Whether for
              industrial, consumer, or healthcare purposes, we develop
              applications tailored to your specific IoT needs.
            </li>
            <li>
              <strong>Cloud-Based IoT:</strong> We integrate cloud technology to
              enable scalable, secure, and reliable data storage and device
              management.
            </li>
          </ul>
        </section>

        <section className="iot-tech">
          <h2>Technologies We Use:</h2>
          <p>
            <strong>IoT Platforms:</strong> AWS IoT, Azure IoT Hub, Google Cloud
            IoT
            <br />
            <strong>Protocols:</strong> MQTT, CoAP, HTTP/HTTPS, WebSockets
            <br />
            <strong>Hardware:</strong> Raspberry Pi, Arduino, ESP32, Custom
            Embedded Systems
            <br />
            <strong>Connectivity:</strong> Wi-Fi, Bluetooth, LoRa, Zigbee,
            Cellular
          </p>
        </section>

        <section className="iot-why">
          <h2>Why Choose Us:</h2>
          <ul>
            <li>
              <strong>End-to-End Solutions:</strong> From concept to deployment,
              we handle all aspects of IoT solution development.
            </li>
            <li>
              <strong>Experienced Team:</strong> Our team has vast experience in
              hardware-software integration, device management, and real-time
              data analytics.
            </li>
            <li>
              <strong>Scalability & Security:</strong> We ensure your IoT
              solutions are scalable and secure, enabling long-term growth and
              reliable performance.
            </li>
          </ul>
        </section>

        <section className="iot-cta">
          <h2>Ready to take your business to the next level with IoT?</h2>
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

export default IotDetails;
