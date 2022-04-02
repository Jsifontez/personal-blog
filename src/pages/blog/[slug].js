import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"

import { getPostBySlug, getAllPosts } from "../../utils/blog"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm, scale } from "../../utils/typography"
import styles from "../../styles/blog-post.module.css";
import ContentWrapper from "../../components/wrapper"

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
  const post = props
  // const { previous, next } = props.pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <ContentWrapper element="article">
        <header className={styles.post__header}>
          <h1 className={styles.post__title}>{post.frontmatter.title}</h1>
          <p className={styles.post__date}>
            {post.frontmatter.date}
          </p>
        </header>
        <section className={styles.post__body}
          dangerouslySetInnerHTML={{__html: post.content}}
        >
          {/*<MDXRenderer>{post.body}</MDXRenderer>*/}
        </section>
        <footer className={styles.post__footer}>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          {/*<ul className={styles.post__pagination}>
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
          </ul>*/}
        </footer>
      </ContentWrapper>
    </Layout>
  )
}

export default BlogPostTemplate
