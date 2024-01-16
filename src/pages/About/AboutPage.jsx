import React from "react";
import "./AboutPage.css";
import julienPic from "../../assets/images/Julien_Thomas_Ironhack.jpg";
import mariaPic from "../../assets/images/Maria_FRIH_Ironhack.jpg";
import linkedinIcon from "../../assets/images/iconmonstr-linkedin-3-240.png";
import githubIcon from "../../assets/images/iconmonstr-github-3-240.png";

export default function About() {
  return (
    <div>
      <h1 className="Bio-presentation">Hey, we are Julien and Maria 🤌</h1>
      <h2>Full-stack developers based in Paris</h2>
      <section className="Bio-section">
        <div className="Individual-bio-card">
          <div className="Bio-card-content">
            <img src={julienPic} alt="Julien Thomas Ironhack pic" />
            <h3 className="Bio-name">Julien Thomas</h3>
            <p className="Bio-description">
              🧑🏻‍💻 Hello! I'm Julien THOMAS, a React FullStack Developer from 🇫🇷
            </p>
          </div>
          <div className="Bio-profiles">
            <a href="https://www.linkedin.com/in/julienthomaspro/">
              <img src={linkedinIcon} alt="linkedIn Icon" />
            </a>
            <a href="https://github.com/doncarlo5/">
              <img src={githubIcon} alt="Github Icon" />
            </a>
          </div>
        </div>
        <div className="Individual-bio-card">
          <div className="Bio-card-content">
            <img src={mariaPic} alt="Maria FRIH Ironhack pic" />
            <h3 className="Bio-name">Maria FRIH</h3>
            <p className="Bio-description">
              🧑🏻‍💻 Hello! I'm Maria FRIH, a React FullStack Developer from 🇫🇷 and
              🇲🇦
            </p>
          </div>
          <div className="Bio-profiles">
            <a href="https://www.linkedin.com/in/maria-frih-a7aa63a/">
              <img src={linkedinIcon} alt="linkedIn Icon" />
            </a>
            <a href="https://github.com/mfrih">
              <img src={githubIcon} alt="Github Icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
