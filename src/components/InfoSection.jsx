import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

const InfoSection = () => {
  return (
    <div className="info-section">
      <p>
        I'm a software engineer currently working toward my Master’s in Software
        Engineering at San Jose State University. <br />
        <br /> Before grad school, I spent a year building scalable Salesforce
        apps at a startup, and since then, I’ve been working on a bunch of
        full-stack projects where I got to mix thoughtful design with solid
        engineering. <br />
        <br /> I’m super passionate about end-to-end development — everything
        from spinning up backend systems to crafting interactive, responsive
        frontends. One of my favorite projects is ronakverse.net — a
        microservices-based platform, hosted on Digital Ocean droplet, where I
        launch small tools, games, and experiments just for fun.
        <br /> <br />
        Outside of coding, I like to hike, play sports, learn adventure sports
        like skiing, surfing, and scuba diving (though I’m still a beginner at
        all of them), and anything else that gets my blood pumping. I am also a
        big anime fan and love discussing anything related to it!
        <br /> <br />
        Right now, I’m on the lookout for software engineering internships —
        especially ones that involve full-stack work, dev tools, or
        platform/infrastructure engineering. If that sounds like something
        you’re working on, let’s chat!
      </p>
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default InfoSection;
