import React from "react";
import Link from "next/link";

import styles from "./blog-card.module.css";

const BlogCard = (props) => {
  return(
    <article
      key={props.slug}
      className={styles.blogcard}
    >
      <h2 className={styles.blogcard__title}>
        <Link href={`/blog${props.slug}`}>
          <a className = "link link__title">
            {props.title}
          </a>
        </Link>
      </h2>
      <small className={styles.blogcard__date}>{props.date}</small>
      <p
        className={styles.blogcard__summary}
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      />
      <Link href={`/blog${props.slug}`}>
        <a className = "link link--read">
          Read more
        </a>
      </Link>
    </article>
  )
}

export default BlogCard