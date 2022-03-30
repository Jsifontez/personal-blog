import styles from "./projects-intro.module.css"

const ProjectsIntro = () => {
  return (
    <>
      <h1 className={styles.projects__title}>Projects</h1>
      <p className={styles.projects__intro}>
        Check my featured pesonal projects in this section. <br />
        If you want to see more, check my {" "}
        <a
          className="link is--bigger"
          href="https://github.com/jsifontez"
          target="_blank_"
          rel="noopener noreferrer"
        >GitHub</a>
      </p>
    </>
  )
}

export default ProjectsIntro
