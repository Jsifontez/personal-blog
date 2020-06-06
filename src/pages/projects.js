import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/project-card";
import "./projects.css";
import ContentWrapper from "../components/wrapper"

const Projects = (props) => {
  return(
    <Layout>
      <SEO title="Projects" />
      <ContentWrapper>
        <h1 className="projects__title">Projects</h1>
        <p className="projects__intro">
          Check my featured pesonal projects in this section. <br />
          If you want to see more check my {" "}
          <a
            className="link is--bigger"
            href="https://github.com/jsifontez"
            target="_blank_"
            rel="noopener noreferrer"
          >GitHub</a>
        </p>
        <ul className="project__lists">
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
      </ContentWrapper>
    </Layout>
  )
}

export default Projects