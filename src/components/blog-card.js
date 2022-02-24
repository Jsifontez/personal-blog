import React from "react";
import { Link } from "gatsby";

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
          to={`/blog${props.slug}`}
        >
          {props.title}
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
        to={`/blog${props.slug}`}
      >
        Read more
      </Link>
    </article>
  )
}

export default BlogCard