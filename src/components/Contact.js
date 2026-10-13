import "../styles/Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="contact-subtitle">LET'S CONNECT</p>

        <h2 className="contact-title">Get In Touch</h2>

        <p className="contact-desc">
          I'm currently looking for Java Full Stack Developer opportunities.
          Feel free to reach out for collaborations or job opportunities.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <FaEnvelope />
            <h3>Email</h3>
            <a href="mailto:ankithabathina@gmail.com">
              ankithabathina@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <FaPhoneAlt />
            <h3>Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <h3>Location</h3>
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="contact-card">
            <FaLinkedin />
            <h3>LinkedIn</h3>
           <a
  href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
  target="_blank"
  rel="noopener noreferrer"
>
  View Profile
</a>
          </div>

          <div className="contact-card">
            <FaGithub />
            <h3>GitHub</h3>
           <a
  href="https://github.com/ankithabathina"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit GitHub
</a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;