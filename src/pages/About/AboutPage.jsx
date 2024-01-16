import React from "react";
import "./AboutPage.css";

export default function About() {
  return (
    <div>
      <h1>Hey, we are Julien and Maria 🤌</h1>
      <h2>Full-stack developers based in Paris</h2>
      <section className="Bio-section">
        <div className="Individual-bio-card">
          <div className="img-wrapper">
            <img
              src="../../assets/images/Julien_Thomas_Ironhack.jpg"
              alt="Julien Thomas Ironhack pic"
            />
          </div>
          <h3>Julien Thomas</h3>
          <p>
            🧑🏻‍💻 Hello! I'm Julien THOMAS, a React FullStack Developer from 🇫🇷.
            Over the past few months, I've been self-training in programming,
            and I've recently taken my skills to the next level by joining
            IronHack School to further my expertise.
          </p>
        </div>
        <div className="Individual-bio-card"></div>
      </section>
    </div>
  );
}
