import "../styles/TechStack.css";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
} from "react-icons/si";

function TechStack() {
  const technologies = [
    {
      icon: <FaJava />,
      title: "Java",
      skills: ["Core Java", "OOP", "Collections", "Exception Handling", "JDBC"],
    },

    {
      icon: <FaReact />,
      title: "React",
      skills: ["Components", "Hooks", "Routing", "API Integration"],
    },

    {
      icon: <SiSpringboot />,
      title: "Spring Boot",
      skills: ["REST API", "JPA", "Hibernate", "Maven"],
    },

    {
      icon: <SiMysql />,
      title: "MySQL",
      skills: ["Joins", "Views", "Functions", "Procedures"],
    },

    {
      icon: <FaHtml5 />,
      title: "HTML",
    },

    {
      icon: <FaCss3Alt />,
      title: "CSS",
    },

    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
    },

    {
      icon: <SiJavascript />,
      title: "JavaScript",
    },

    {
      icon: <FaGitAlt />,
      title: "Git",
    },

    {
      icon: <SiPostman />,
      title: "Postman",
    },
  ];

  return (
    <motion.section
      className="tech"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="tech-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        TECHNOLOGIES I WORK WITH
      </motion.p>

      <motion.h2
        className="tech-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        My Tech Stack
      </motion.h2>

      <motion.p
        className="tech-desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        I enjoy building modern web applications using these technologies.
      </motion.p>

      <div className="tech-grid">
        {technologies.map((item, index) => (
          <motion.div
            className="tech-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <div className="tech-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            {item.skills && (
              <div className="badge-container">
                {item.skills.map((skill, i) => (
                  <span key={i} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default TechStack;