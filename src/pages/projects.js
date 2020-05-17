import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./projects.css"

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
          <li className="project">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://100daysofvue-show-local-weather.netlify.app/"
            >
              Local Weather App
            </a>
          </li>
          <li className="project">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://100daysofvue-tic-tac-toe.netlify.app/"
            >
              Tic Tac Toe Game
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Projects