import React from "react";
import "./project-card.css";

const ProjectCard = (props) => {
  return(
    <li className="project">
      <a
        className="project__link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
      >
        <img
          className="project__image"
          src={ props.src }
          alt={ props.alt }
        />
        <div className="project__description">
          <h3 className="project__title">{ props.title }</h3>
          <p className="project__text">{ props.description }</p>
        </div>
      </a>
    </li>
  )
}

export default ProjectCard