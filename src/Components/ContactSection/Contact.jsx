import React, { useEffect, useState } from "react";
import "./Contact.css";
import sms from "../../assets/images/sms_icon.png";
import phone from "../../assets/images/call_icon.jpeg";
import arrow from "../../assets/images/Arrow.png";
import location from "../../assets/images/location.png";
import message from "../../assets/images/message.png";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../featured/redux/customerSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.customer);

  // Initial form state
  const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    howDidYouHearAboutUs: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [showMessage, setShowMessage] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+?\d{10,15}$/; // Allows + sign and 10-15 digits
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Phone number validation
    if (name === "phoneNumber") {
      if (!validatePhoneNumber(value)) {
        setPhoneError("Invalid phone number. Please enter a valid number.");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneError && !isSubmitting) {
      setIsSubmitting(true); // Disable button while submitting
      dispatch(createContact(formData));
    }
  };

  // Reset form when the submission is successful
  useEffect(() => {
    if (status === "succeeded") {
      setFormData(initialState); // Reset form fields
      setShowMessage(true); // Show success message
      setIsSubmitting(false); // Re-enable button after success

      // Set a timer to hide the message after 15 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 15000);

      // Cleanup the timer when component unmounts or when status changes
      return () => clearTimeout(timer);
    }

    if (status === "failed") {
      setIsSubmitting(false); // Re-enable button if submission failed
    }
  }, [status]); // Effect runs when `status` changes

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
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your Mobile Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {phoneError && <p className="error">{phoneError}</p>}
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your E-mail Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>How did you hear about us?</label>
          <select
            name="howDidYouHearAboutUs"
            value={formData.howDidYouHearAboutUs}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend or Family">Friend or Family</option>
            <option value="Other">Other</option>
          </select>
          <label>Write your messages here</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Write your message here"
            required
          ></textarea>
          {/* Disable button when submitting */}
          <button
            type="submit"
            className="btn cta-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span> // Add loading spinner
            ) : (
              <>
                Submit now <img src={arrow} alt="" />
              </>
            )}
          </button>
        </form>
        {status === "loading" && <p>Submitting...</p>}
        {status === "succeeded" && showMessage && (
          <p>Message sent successfully!</p>
        )}
        {status === "failed" && <p>Error: {error}</p>}
      </div>
    </section>
  );
};

export default Contact;
