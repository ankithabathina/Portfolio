import "../styles/Projects.css";
import { motion } from "framer-motion";

import hospital from "../assets/images/hospital.jpeg";
import student from "../assets/images/student.jpeg";
import portfolio from "../assets/images/portfolio.jpeg";

function Projects() {

  const projects = [

    {
      title: "Hospital Appointment Booking System",
      image: hospital,
      tech: ["React", "Spring Boot", "MySQL"],
      desc: "A full-stack application where patients can register, log in, browse doctors, and book appointments using REST APIs.",
      github: "#",
      demo: "#",
      featured: true
    },

    {
      title: "Student Information Portal",
      image: student,
      tech: ["Java", "Servlets", "JDBC", "MySQL"],
      desc: "Student management system with CRUD operations using Java Servlets and JDBC.",
      github: "#",
      demo: "#"
    },

    {
      title: "Personal Portfolio",
      image: portfolio,
      tech: ["React", "CSS", "Framer Motion"],
      desc: "Modern responsive portfolio showcasing projects, skills and achievements.",
      github: "#",
      demo: "#"
    }

  ];

  return (

    <section className="projects" id="projects">

      <p className="project-subtitle">
        MY WORK
      </p>

      <h2 className="project-title">
        Featured Projects
      </h2>

      <div className="project-grid">

        {projects.map((project, index)=>(

          <motion.div
          className={`project-card ${project.featured ? "featured":""}`}
          key={index}
          whileHover={{y:-10}}
          transition={{duration:0.3}}
          >

            <img
            src={project.image}
            alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="tech-tags">

                {project.tech.map((tech,i)=>(

                  <span key={i}>{tech}</span>

                ))}

              </div>

              <div className="project-buttons">

                <a href={project.github}>GitHub</a>

                <a href={project.demo}>Live Demo</a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Projects;