import { remark } from "remark"
import html from "remark-html"
import { Link, graphql } from "gatsby"

import { getPostBySlug, getAllPosts } from "../lib/blog"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import "./blog-post.css";
import ContentWrapper from "../components/wrapper"

export async function getStaticPaths () {
  const posts = getAllPosts()

  return {
    paths: posts.map( (post) => {
      return {
        params: {
          slug:
        }
      }
    })
  }
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug)
  const markdown = await remark()
    .use(html)
    .process(post.content || '')

  const content = markdown.toString()

  return {
    props: {
      ...post,
      content
    }
  }
}

const BlogPostTemplate = (props) => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ContentWrapper element="article">
        <header className="post__header">
          <h1 className="post__title">{post.frontmatter.title}</h1>
          <p className="post__date">
            {post.frontmatter.date}
          </p>
        </header>
        <section className="post__body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        <footer className="post__footer">
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <ul className="post__pagination">
            <li>
              {previous && (
                <Link className="link pagination__link" to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className="link pagination__link" to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </footer>
      </ContentWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
