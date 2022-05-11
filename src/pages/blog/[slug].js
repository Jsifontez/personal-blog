import Link from "next/link"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

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
  const source = await serialize(post.content)
  const postContext = getPostContext(params.slug)

  return {
    props: {
      frontmatter: post.frontmatter,
      source,
      ...postContext
    }
  }
}

const BlogPostTemplate = ({frontmatter, source, postContext}) => {
  const { previous, next } = postContext

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <ContentWrapper element="article">
        <header className={styles.post__header}>
          <h1 className={styles.post__title}>
            {frontmatter.title}
          </h1>
          <p className={styles.post__date}>
            {frontmatter.date}
          </p>
        </header>

        <section className={styles.post__body}>
          <MDXRemote {...source} />
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
              {previous && (
                <Link href={`/blog/${previous.slug}`} rel="prev">
                  <a className="link pagination__link">
                    ← {previous.title}
                  </a>
                </Link>
              )}
            </li>
            <li>
              {next && (
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
