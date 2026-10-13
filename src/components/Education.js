import "../styles/Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">

      <p className="edu-subtitle">MY JOURNEY</p>

      <h2 className="edu-title">Education</h2>

      <div className="timeline">

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="circle"></div>

          <div className="content">
            <h3>B.Tech – Computer Science & Engineering</h3>
            <h4>Sri Sarathi Engineering College</h4>
            <span>2021 - 2025</span>
            <p>CGPA : 8.5</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="circle"></div>

          <div className="content">
            <h3>Intermediate (MPC)</h3>
            <h4>Board of Intermediate Education</h4>
            <span>2019 - 2021</span>
            <p>Percentage : 88%</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="circle"></div>

          <div className="content">
            <h3>SSC</h3>
            <h4>Board of Secondary Education</h4>
            <span>2018 - 2019</span>
            <p>CGPA : 10.0</p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Education;