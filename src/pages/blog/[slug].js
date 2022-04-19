import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"

import { getPostBySlug, getAllPosts, getPostContext } from "../../utils/blog"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
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

  const postContext = getPostContext(params.slug)

  return {
    props: {
      ...post,
      content,
      ...postContext
    }
  }
}

const BlogPostTemplate = (props) => {
  const post = props
  const {previous, next} = props.postContext

  return (
    <Layout>
      <Seo
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
              marginTop: 0,
              marginBottom: '1.4rem',
            }}
          />

          <ul className={styles.post__pagination}>
            <li>
              {props.postContext.previous && (
                <Link href={`/blog/${previous.slug}`} rel="prev">
                  <a className="link pagination__link">
                    ← {previous.title}
                  </a>
                </Link>
              )}
            </li>
            <li>
              {props.postContext.next && (
                <Link href={`/blog/${next.slug}`} rel="next">
                  <a className="link pagination__link">
                    {next.title} →
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
