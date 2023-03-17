import React from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONTACT</h2>
      <p>Contact With Me</p>

      <div className="contacts">
        <div className="contact">
          <div className="contact-card">
            <BsWhatsapp className="icon" />
            <p>+243 977 813 248</p>
          </div>

          <div className="contact-card">
            <HiOutlineMail className="icon" />
            <p>kaghenimbale@gmail.com</p>
          </div>

          <div className="contact-card">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Freelance available</p>
          </div>
        </div>

        <div className="form-container">
          <form action="#" method="post" id="form">
            <div className="inputs">
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  id="name"
                  className="input"
                  required
                  placeholder="Enter Your Name"
                />
              </label>

              <label htmlFor="usertel">
                <input
                  type="tel"
                  name="usertel"
                  id="phone"
                  className="input"
                  required
                  placeholder="Enter Your Phone"
                />
              </label>

              <label htmlFor="email">
                <input
                  type="email"
                  name="username"
                  id="name"
                  className="input"
                  required
                  placeholder="Enter Your Email"
                />
              </label>

              <label htmlFor="subject">
                <input
                  type=""
                  name="username"
                  id="name"
                  className="input"
                  required
                  placeholder="Enter Your Subject"
                />
              </label>
            </div>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                className="input-message"
                placeholder="Enter Your Message"
              ></textarea>
            </label>

            <div className="Submit-btn">
              <button type="submit" className="btn btn-submit">
                <small>Send Your Message</small>
                <BsFillSendFill />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
