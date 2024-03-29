import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLayout from "../components/home-layout"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <HomeLayout>
          <h1 style={{ textAlign: `center`, padding: `12px`, margin: 0 }}>
            Welcome
          </h1>
          <div style={{ textAlign: `center`, padding: `12px` }}>
            <p>Hi {" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span> my name is Juan, I'm a
              self-taught FrontEnd developer.</p>
            <p>
              My knowledge goes from HTML to CSS and Javascript, focusing on responsive design. I mainly use the ReactJS and VueJS ecosystems.
            </p>
            <p>
              I'm also interested in <Link className="link" to="/blog/">Blogging</Link> about my personal experiences and tech stuff. And writing stories just for fun.
            </p>
            <p>
              Currently I'm developing personal projects and I'm available to hire. Feel
              free to <Link className="link" to="/contact/">contact</Link> with me.
            </p>
          </div>
        </HomeLayout>
      </Layout>
    )
  }
}

export default IndexPage
