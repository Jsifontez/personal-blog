import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/project-card";
import "./projects.css";

const Projects = (props) => {
  return(
    <Layout>
      <SEO title="Projects" />
      <div class="projects">
        <h1 className="projects__title">Projects</h1>
        <p className="projects__description">
          Check my featured pesonal projects in this section. <br />
          If you want to see more check my {" "}
          <a href="https://github.com/jsifontez" target="_blank_">GitHub</a>
        </p>
        <ul className="projects__lists">
          <ProjectCard
            href="https://100daysofvue-show-local-weather.netlify.app/"
            src="../../show-weather.png"
            alt="Show Local Weather App"
            title="Show Weather App"
            description="An app that show the weather"
          />
          <ProjectCard
            href="https://100daysofvue-tic-tac-toe.netlify.app/"
            src="../../tic-tac-toe.png"
            alt="Tic Tac Toe Game Page"
            title="Tic Tac Toe Game"
            description="A simple game"
          />
        </ul>
      </div>
    </Layout>
  )
}

export default Projects