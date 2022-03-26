import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"

import { getPostBySlug, getAllPosts } from "../utils/blog"
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
          slug: post.slug
        }
      }
    }),
    fallback: false,
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
                <Link className="link pagination__link" href={`blog${previous.fields.slug}`} rel="prev">
                  <a>
                    ← {previous.frontmatter.title}
                  </a>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className="link pagination__link" href={`blog${next.fields.slug}`} rel="next">
                  <a>
                    {next.frontmatter.title} →
                  </a>
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
