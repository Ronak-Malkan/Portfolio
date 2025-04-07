import React from "react";
import githubLogo from "../utilities/githublogo.svg";
import linkedinLogo from "../utilities/linkedin-logo.svg";
import resumelogo from "../utilities/resume-logo.svg";
import emailLogo from "../utilities/email.svg";

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
        href="https://drive.google.com/file/d/1vcTtPGUi0ib4iiDuvCEzm9II_v79AAaI/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={resumelogo} alt="Resume" />
      </a>
      <a href="mailto:ronakmalkan2062001@gmail.com">
        <img src={emailLogo} alt="Email" />
      </a>
    </div>
  );
};

export default Links;
