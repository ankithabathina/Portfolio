import "../styles/Hero.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import profile from "../assets/images/profile.jpeg";
import resume from "../assets/resume/AnkithaResume.pdf";

function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section */}

      <motion.div
        className="hero-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          HEY, I'M 👋
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span>Ankitha</span>
          <br />
          Bathina
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="hero-role"
          />
        </motion.div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passionate about building scalable, responsive and modern web
          applications using Java, Spring Boot, React, MySQL and REST APIs.
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href={resume}
            download="Ankitha_Bathina_Resume.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>

          <button className="contact-btn">
            Let's Talk
          </button>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <a
            href="https://github.com/ankithabathina"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:ankithabathina@gmail.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section */}

      <motion.div
        className="hero-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="profile-box">
          <img
            src={profile}
            alt="Profile"
            className="profile-img"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;