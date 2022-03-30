import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContentWrapper from "../components/wrapper"
import ProjectList from '../components/project-list'
import Intro from "../components/projects-intro"

const Projects = (props) => {
  return(
    <Layout>
      <Seo
        title="Projects"
        description="Projects made by Juan Sifontez with different technologies"
       />
      <ContentWrapper>
        <Intro />
        <ProjectList />
      </ContentWrapper>
    </Layout>
  )
}

export default Projects
