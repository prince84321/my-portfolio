import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  // const [contact, setContact] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_51wqkh6",
      "template_fpmseph",
      form.current,
      "aXX4jbBfrLSwtgsLg"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>prince.jnv1992@gmail.com</h5>
            <a href="mailto:prince.jnv1992@gmail.com" target="_blank">
              Send a Mail
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Prince Kumar</h5>
            <a href="https://m.me/friendlyprince" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+919704616600</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919704616600"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* =========== End of contact option ========= */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
