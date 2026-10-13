import "../styles/About.css";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaCode,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Building Modern Web Applications with
          <span> Java & React</span>
        </motion.h2>

        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          I'm Ankitha Bathina, a Computer Science graduate passionate about
          developing scalable and responsive web applications using Java,
          Spring Boot, React, REST APIs and MySQL. I enjoy solving
          real-world problems and continuously learning new technologies.
        </motion.p>

        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-card">
            <FaJava />
            <h3>Java</h3>
            <p>Core Java, OOP, Collections</p>
          </div>

          <div className="about-card">
            <FaReact />
            <h3>React</h3>
            <p>Components, Hooks, Routing</p>
          </div>

          <div className="about-card">
            <SiSpringboot />
            <h3>Spring Boot</h3>
            <p>REST APIs, JPA</p>
          </div>

          <div className="about-card">
            <SiMysql />
            <h3>MySQL</h3>
            <p>Database Design & SQL</p>
          </div>
        </motion.div>

        <motion.div
          className="qualities"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <div><FaCode /> Problem Solver</div>
          <div><FaUsers /> Team Player</div>
          <div><FaLightbulb /> Quick Learner</div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}

export default About;