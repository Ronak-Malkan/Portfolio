import React from "react";
import bitmoji from "../utilities/bitmoji.png";
import Links from "./Links";

const NameSection = () => {
  return (
    <div className="name-section">
      <div className="brief-intro">
        <img src={bitmoji} alt="Personal Bitmoji" className="profile-image" />
        <h1>Hey, I’m Ronak Malkan</h1>
        <h3>Software Engineer, Builder & Curious Mind</h3>
        <p>
          I love building cool things on the web — from microservices to
          full-stack apps to random little JavaScript games that probably don’t
          need to exist (but are fun anyway). Currently I am working on
          ronakverse.net, my own universe of side projects and experiments.
        </p>
      </div>
      <Links />
    </div>
  );
};

export default NameSection;
