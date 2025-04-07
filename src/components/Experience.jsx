import React from "react";

const experiences = [
  {
    company: "Ardidra Technologies",
    location: "Ahmedabad, Gujarat, India",
    position: "Software Engineer",
    date: "Jul 2023 – Jun 2024",
    description: [
      "Enhanced the SurveyVista product (a native Salesforce platform) by adding sentiment analysis using Salesforce Einstein, boosting traffic by 20%.",
      "Built advanced workflow automation using Salesforce Flow and Process Builder, streamlining client operations like approval workflows and notifications.",
    ],
    tags: [
      "Salesforce",
      "Apex",
      "LWC",
      "SOQL",
      "Salesforce Flow",
      "Process Builder",
      "Salesforce Einstein",
    ],
  },
  {
    company: "Ardidra Technologies",
    location: "Ahmedabad, Gujarat, India",
    position: "Project Trainee Intern",
    date: "Jan 2023 – May 2023",
    description: [
      "Developed a Salesforce-based URL shortener middleware using Apex and Salesforce Sites, increasing customer retention by 10%.",
      "Automated sales order processing using LWC and Visualforce to generate and send PDF order forms.",
    ],
    tags: ["Salesforce", "Apex", "LWC", "Visualforce", "SOQL"],
  },
];

const Experience = () => {
  return (
    <section className="section">
      <h2 className="sub-title">Experience</h2>
      <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-card-left">
              <span className="experience-date">{exp.date}</span>
            </div>
            <div className="experience-card-right">
              <div>
                <h3 className="experience-role">
                  {exp.position} &nbsp; · &nbsp; {exp.company}
                </h3>
              </div>
              <div className="experience-desc">
                {exp.description.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
              <div className="experience-tags">
                {exp.tags.map((tag, i) => (
                  <span className="skill-badge" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
