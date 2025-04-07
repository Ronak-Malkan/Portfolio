import React from "react";
import githubLogo from "../utilities/githublogo.svg";
import linkedinLogo from "../utilities/linkedin-logo.svg";
import resumelogo from "../utilities/resume-logo.svg";

const Links = () => {
  return (
    <div className="links-section">
      <a
        href="https://github.com/Ronak-Malkan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/ronak-malkan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
      <a
        href="/path/to/your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={resumelogo} alt="Resume" />
      </a>
    </div>
  );
};

export default Links;
