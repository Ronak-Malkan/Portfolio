import React from "react";

const skills = [
  "ReactJS",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "ExpressJS",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "Python",
  "Apex",
  "DigitalOcean",
  "CI/CD",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Git",
  "Salesforce",
  "Docker",
  "Kubernetes",
];

const Skills = () => {
  return (
    <section className="section">
      <h2 className="sub-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
