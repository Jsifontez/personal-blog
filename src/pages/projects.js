import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/project-card";
import "./projects.css";
import ContentWrapper from "../components/wrapper"

const Projects = (props) => {
  const projects = [
    {
      id: 'project-00',
      href:"https://markdown-previewer-dun.vercel.app/",
      src:"markdown-previewer.png",
      alt:"Markdown previewer page",
      title:"Markdown Previewer",
      description:"A website to visualize text with markdown format"
    },
    {
      id: 'project-01',
      href:"https://jsifontez-random-quote-machine.netlify.app/",
      src:"random-quote-machine-01.png",
      alt:"Random quote machine preview Page",
      title:"Random Quote Machine",
      description:"Shows quotes from celebrities"
    },
    {
      id: 'project-02',
      href:"https://jsifontez-country-quiz.netlify.app/",
      src:"country-quiz.png",
      alt:"Country Quiz Page",
      title:"Country Quiz",
      description:"A mini-game created with REST countries API"
    },
    {
      id: 'project-03',
      href:"https://100daysofvue-show-local-weather.netlify.app/",
      src:"show-weather.png",
      alt:"Show Local Weather App",
      title:"Show Weather App",
      description:"An app that show the weather"
    },
    {
      id: 'project-04',
      href:"https://100daysofvue-tic-tac-toe.netlify.app/",
      src:"tic-tac-toe.png",
      alt:"Tic Tac Toe Game Page",
      title:"Tic Tac Toe Game",
      description:"A simple game"
    }
  ]

  return(
    <Layout>
      <SEO title="Projects" />
      <ContentWrapper>
        <h1 className="projects__title">Projects</h1>
        <p className="projects__intro">
          Check my featured pesonal projects in this section. <br />
          If you want to see more, check my {" "}
          <a
            className="link is--bigger"
            href="https://github.com/jsifontez"
            target="_blank_"
            rel="noopener noreferrer"
          >GitHub</a>
        </p>
        <ul className="project__lists">
          {projects.map(p => (
            <ProjectCard
              key={p.id}
              href={p.href}
              src={p.src}
              alt={p.alt}
              title={p.title}
              description={p.description}
            />
          ))}
        </ul>
      </ContentWrapper>
    </Layout>
  )
}

export default Projects
