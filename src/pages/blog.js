import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css";
import ContentWrapper from "../components/wrapper";
import BlogCard from "../components/blog-card";

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <ContentWrapper>
          <header className="blog-posts__header">
            <h1>Blog Posts</h1>
            <p>
              <em>
                The articles that you going to see here will cover my
                experience with web development and may include HTML,
                CSS, Javascript along with some of their libraries or frameworks.
                Also, you can find here articles about my personal experience.
              </em>
            </p>
          </header>
          <div className="blog-posts">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <BlogCard
                  title = { title }
                  description = { node.frontmatter.description || node.excerpt }
                  slug = { node.fields.slug }
                  date = { node.frontmatter.date }
                />
              )
            })}
          </div>
        </ContentWrapper>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
