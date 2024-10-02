import "./Contact.css";
import sms from "../../assets/images/sms_icon.png";
import phone from "../../assets/images/purpphone.svg";
import arrow from "../../assets/images/Arrow.png";
import location from "../../assets/images/purpmap.svg";
import message from "../../assets/images/purpmail.svg";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb2290ba-d1c4-43e6-9999-3a53f9381149");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={sms} alt="" />
        </h3>
        <p>
          Feel free to reach out to us at any time. Your feedback, questions,
          and suggestions are invaluable in helping us continuously improve and
          deliver exceptional service. Whether you have inquiries about our
          services, need assistance with a project, or simply want to share your
          thoughts, we are always here to listen. Your input plays a vital role
          in driving our success, and we are committed to providing prompt and
          thoughtful responses to ensure a seamless experience. Don't hesitate
          to connect with us — we look forward to hearing from you!
        </p>
        <ul>
          <li>
            <img src={message} alt="" />
            support@justhitclick.com
          </li>
          <li>
            <img src={phone} alt="" />
            +2347054032321
          </li>
          <li>
            <img src={location} alt="" />
            30A, Alternative Route, Chevron Drive, Lekki,
            <br />
            Lagos State, Nigeria
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Fullname"
            required
          />
          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your E-Mail"
            required
          />
          <label>How did you hear about us?</label>
          <select type="select" name="howDidYouHearAboutUs" required>
            <option value="">Select an option</option>
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend or Family">Friend or Family</option>
            <option value="Other">Other</option>
          </select>
          <label>Write your message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter Your Message Here"
            required
          ></textarea>
          <button type="submit" className="btn cta-button">
            Submit Now <img src={arrow} alt="" />
          </button>
        </form>
        <span className="res">{result}</span>
      </div>
    </section>
  );
};

export default Contact;
