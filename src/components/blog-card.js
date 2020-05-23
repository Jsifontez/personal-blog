import React from "react";
import { Link } from "gatsby";

import "./blog-card.css";

const BlogCard = (props) => {
  return(
    <article
      key={props.slug}
      className = "blog-card"
    >
      <h2 className="blog-card__title">
        <Link
          className = "blog-card__link"
          to={`blog${props.slug}`}
        >
          {props.title}
        </Link>
      </h2>
      <small>{props.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      />
      <Link
        className = "blog-card__link blog-card__link--read"
        to={`blog${props.slug}`}
      >
        Read more
      </Link>
    </article>
  )
}

export default BlogCard