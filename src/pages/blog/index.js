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
    const posts = data.allMdx.edges

    return (
      <Layout>
        <SEO title="Blog" />
        <ContentWrapper>
          <header className="blog__header">
            <h1>Blog Posts</h1>
            <p>
              <em className="blog__intro">
                The articles that you going to see here will cover my
                experience with web development and may include HTML,
                CSS, Javascript along with some of their libraries or frameworks.
                Also, you can find here articles about my personal experience.
              </em>
            </p>
          </header>
          <div className="blog__posts">
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
