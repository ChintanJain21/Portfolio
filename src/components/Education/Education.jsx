import React from "react";
import "./Education.css"; // Create and use this CSS file for styling

export const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Technology in Computer Science Enginnerring",
      institution: "Indian Institute of Information Technology Sonepat",
      year: "2022 - 2026",
      details: [
    
      ],
    },
    {
      degree: "Senior Secondary School",
      institution: "Shamgarh Public School",
      year: "2020 - 2022",
      details: [
        "Secured 85% in Board Examinations",
      ],
    },
  ];

  return (
    <section id="education" className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-year">{edu.year}</p>
            <ul className="education-details">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
