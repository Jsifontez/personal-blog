import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLayout from "../components/home-layout"

class IndexPage extends Component {
  render() {
    const siteTitle = "Juan Sifontez"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <HomeLayout>
          <div style={{ textAlign: `center`, padding: `12px` }}>
            <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
            <h1>
              Hi people, Welcome{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </h1>
          </div>
          <div style={{ textAlign: `center`, padding: `12px` }}>
            <p>My name is Juan, I'm a self-taught Junior FrontEnd developer.</p>
            <p>
              My knowledge go from HTML, CSS and Javascript.
              Mainly I use ReactJS and Vue.js Ecosystems but I'm
              learning Python and GraphQL for the BackEnd.
            </p>
            <p>
              I'm also interested in <Link className="link" to="/blog/">Blogging</Link> from my
              personal experiences in life and tech. I'm passinate about
              become a writer in the future. That's why I'm starting with Blog
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
