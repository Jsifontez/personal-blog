import ProjectCard from "./project-card";
import styles from "./project-list.module.css"

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

const PorjectList = () => {
  return (
    <ul className={styles.project__lists}>
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
  )
}

export default PorjectList
