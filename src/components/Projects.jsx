import React from "react";

const projects = [
  {
    name: "Ronak-Verse",
    date: "Feb 2025 - Mar 2025",
    description: [
      "Developed Ronak-Verse, a microservices-based platform integrating multiple personal projects and services under a unified domain using Docker and Nginx for seamless deployment.",
      "Automated deployment, service management, and subdomain-based routing with SSL (HTTPS support) using Nginx, Shell Scripting, and Let’s Encrypt, ensuring secure, scalable, and efficient hosting on DigitalOcean.",
      "Leveraged Docker to containerize services, optimizing resource management and enabling seamless updates with minimal downtime.",
    ],
    link: "https://github.com/Ronak-Malkan/Ronak-Verse",
    tags: [
      "Docker",
      "CI/CD",
      "DigitalOcean",
      "Nginx",
      "Linux Shell Scripting",
      "Cloud Development",
    ],
  },
  {
    name: "Movie Recommendation System",
    date: "Nov 2024",
    link: "https://github.com/Ronak-Malkan/Movie-Recommender",
    description: [
      "Built a recommendation engine using the MovieLens dataset, leveraging collaborative filtering and cosine similarity techniques.",
      "Deployed the model using Gradio on Google Colab for real-time recommendation interaction.",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "Gradio", "Google Colab"],
  },
  {
    name: "Puzzle",
    date: "Mar 2024",
    description: [
      "Developed a complex, block-based text editor akin to Notion, utilizing a full-stack approach with ReactJs, NodeJs, PostgreSQL, HTML, and CSS.",
      "Enhanced data interaction and user customization capabilities, leading to a 20% increase in operational efficiency. Implemented dynamic content editing features and a user-friendly interface that adapts to individual workflows, closely integrating with backend services for real-time data processing.",
    ],
    link: "https://github.com/Ronak-Malkan/Puzzle",
    tags: ["React", "Node Js", "PostgreSQL", "HTML", "CSS"],
  },
  {
    name: "AssignExpert",
    date: "Sep 2022 - Nov 2022",
    description: [
      "Engineered 'AssignExpert', a platform using HTML, CSS, JavaScript, NodeJs, PostgreSQL, and Redis, which streamlined the hosting and grading of college programming assignments. This robust system saved faculty time by 40% and provided a seamless submission process for 500 students.",
      "Implemented Docker to create a secure, containerized environment for executing student-submitted code, ensuring that harmful scripts do not compromise server integrity. This setup allowed for automated grading based on predefined test cases by faculty, significantly enhancing both the efficiency and security of the assignment handling process.",
    ],
    link: "https://github.com/assignexpert/assignexpert",
    tags: ["React", "Node Js", "PostgreSQL", "HTML", "CSS", "Redis", "Docker"],
  },
];

const Projects = () => {
  return (
    <section className="section">
      <h2 className="sub-title">Projects</h2>
      <div className="experience-wrapper">
        {projects.map((project, index) => (
          <a href={project.link} className="projects-card" key={index}>
            <div className="experience-card-left">
              <span className="experience-date">{project.date}</span>
            </div>
            <div className="experience-card-right">
              <div>
                <h3 className="experience-role">{project.name}</h3>
              </div>
              <div className="experience-desc">
                {project.description.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
              <div className="experience-tags">
                {project.tags.map((tag, i) => (
                  <span className="skill-badge" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
