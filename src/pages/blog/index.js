import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ContentWrapper from "../../components/wrapper";
import BlogCard from "../../components/blog-card";
import { getAllPosts } from "../../utils/blog.js"
import styles from "../../styles/blog.module.css";

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Seo
        title="Blog"
        description=""
      />
      <ContentWrapper>
        <header className={styles.blog__header}>
          <h1>Blog Posts</h1>
          <p>
            <em className={styles.blog__intro}>
              The articles that you going to see here will cover my
              experience with web development and may include HTML,
              CSS, Javascript along with some of their libraries or frameworks.
              Also, you can find here articles about my personal experience.
            </em>
          </p>
        </header>
        <div className={styles.blog__posts}>
          {posts.map(post => {
            const title = post.frontmatter.title
            return (
              <BlogCard
                title = { title }
                description = { post.frontmatter.description }
                slug = { post.slug }
                date = { post.frontmatter.date }
                key={title + post.slug}
              />
            )
          })}
        </div>
      </ContentWrapper>
    </Layout>
  )
}

export default Blog
