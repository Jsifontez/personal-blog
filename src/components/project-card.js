import React from "react";
import Image from "next/image"
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
          src={`/assets/${props.src}`}
          alt={props.alt}
          layout='fill'
          placeholder='blur'
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN841j1HwAGcAKo69cnCAAAAABJRU5ErkJggg=="
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