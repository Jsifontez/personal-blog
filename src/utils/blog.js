import matter from "gray-matter"
import { parseISO, format } from "date-fns"
import fs from "fs"
import { join } from "path"

// path to markdown file `content/blog`
const postsDiectory = join(process.cwd(), 'content', 'blog')

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDiectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = format(data.date, 'MMMM dd, yyyy') // here should be `dd MMMM, yyyy`

  return {
    slug: realSlug,
    frontmatter: { ...data, date },
    content
  }
}

// return an array of objects
export function getAllPosts() {
  const slugs = fs.readdirSync(postsDiectory)
  const posts = slugs.map(slug => {
    let post = getPostBySlug(slug)

    return {
      slug: post.slug,
      frontmatter: post.frontmatter
    }
  })

  // to show sorted posts from newest to older
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  return posts
}
