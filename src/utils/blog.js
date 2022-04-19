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

// to pagination for next and previous posts if there exist
export function getPostContext (slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const posts = getAllPosts()
  const postIndex = posts.findIndex(post => post.slug === realSlug)
  let next = {}
  let previous = {}

  if (posts[postIndex + 1]) {
    previous.slug = posts[postIndex + 1].slug,
    previous.title = posts[postIndex + 1].frontmatter.title
  } else {
    previous = null
  }

  if (posts[postIndex - 1]) {
    next.slug = posts[postIndex - 1].slug,
    next.title = posts[postIndex - 1].frontmatter.title
  } else {
    next = null
  }

  return {
    postContext: {
      previous,
      next
    }
  }
}
