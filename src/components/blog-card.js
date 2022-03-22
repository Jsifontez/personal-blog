import React from "react";
import Link from "next/link";

import "./blog-card.css";

const BlogCard = (props) => {
  console.log('slug:', props.slug, 'props:', props)
  return(
    <article
      key={props.slug}
      className = "blog-card"
    >
      <h2 className="blog-card__title">
        <Link
          className = "link link__title"
          href={`/blog${props.slug}`}
        >
          <a>
            {props.title}
          </a>
        </Link>
      </h2>
      <small className="blog-card__date">{props.date}</small>
      <p
        className="blog-card__summary"
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      />
      <Link
        className = "link link--read"
        href={`/blog${props.slug}`}
      >
        <a>
          Read more
        </a>
      </Link>
    </article>
  )
}

export default BlogCard