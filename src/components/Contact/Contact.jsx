import { useEffect, useState } from 'react';
import './Contact.css';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsFillSendFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  useEffect(() => {
    Aos.init();
  }, []);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(data);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('clicked', event);
    setData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
    event.preventDefault();
  };
  return (
    <section id="contact">
      <h2>CONTACT</h2>
      <p>Contact With Me</p>

      <div className="contacts">
        <div className="contact">
          <div className="contact-card" data-aos="zoom-in">
            <BsWhatsapp className="icon" />
            <p>+243 977 813 248</p>
          </div>

          <div className="contact-card" data-aos="zoom-in">
            <HiOutlineMail className="icon" />
            <p>kaghenimbale@gmail.com</p>
          </div>

          <div className="contact-card" data-aos="zoom-in">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Freelance available</p>
          </div>
        </div>

        <div className="form-container">
          <form
            action="https://formspree.io/f/xpzelgva"
            method="post"
            id="form"
            data-aos="zoom-in"
          >
            <div className="inputs">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  value={data.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Name"
                />
              </label>

              <label htmlFor="phone">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={data.phone}
                  className="input"
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Phone"
                />
              </label>

              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  className="input"
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                />
              </label>

              <label htmlFor="subject">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={data.subject}
                  className="input"
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Subject"
                />
              </label>
            </div>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={handleChange}
                className="input-message"
                placeholder="Enter Your Message"
              ></textarea>
            </label>

            <div className="Submit-btn">
              <button
                type="submit"
                onSubmit={handleFormSubmit}
                className="btn btn-submit"
              >
                <small>Send Message</small>
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
