import "../styles/Certifications.css";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certifications() {

  const certificates = [

    {
      title: "Java Programming",
      issuer: "Course / Organization",
      link: "#"
    },

    {
      title: "SQL & Database",
      issuer: "Course / Organization",
      link: "#"
    },

    {
      title: "Java Full Stack Internship",
      issuer: "Internship",
      link: "#"
    }

  ];

  return (

    <section className="certifications" id="certificates">

      <p className="cert-subtitle">ACHIEVEMENTS</p>

      <h2 className="cert-title">
        Certifications & Achievements
      </h2>

      <div className="cert-grid">

        {certificates.map((item,index)=>(

          <motion.div
          className="cert-card"
          key={index}
          whileHover={{y:-8}}
          >

            <FaCertificate className="cert-icon"/>

            <h3>{item.title}</h3>

            <p>{item.issuer}</p>

            <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            >
            View Certificate
            </a>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Certifications;