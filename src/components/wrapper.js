import React from "react";
import styles from "./wrapper.module.css";

const ContentWrapper = ({children, element = 'section'}) => {
  let wrapper_element

  if (element === 'article') {
    wrapper_element = <article className={styles.wrapper}>{children}</article>;
  } else {
    wrapper_element = <section className={styles.wrapper}>{children}</section>;
  }

  // let wrapper_element = <element className={styles.wrapper}>{children}</element>

  return(wrapper_element)
}

export default ContentWrapper;