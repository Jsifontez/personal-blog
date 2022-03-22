import React from "react";
import Image from "./Image"
import styles from "./project-card.module.css";

const ProjectCard = (props) => {
  return(
    <li className={styles.project}>
      <a
        className={styles.project__link}
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
      >
        <Image
          className={styles.project__image}
          filename={props.src}
          alt={props.alt}
        />
        <div className={styles.project__description}>
          <h3 className={styles.project__title}>{ props.title }</h3>
          <p className={styles.project__text}>{ props.description }</p>
        </div>
      </a>
    </li>
  )
}

export default ProjectCard