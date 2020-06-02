import React from "react";
import "./wrapper.css";

const ContentWrapper = ({children, element = 'section'}) => {
  let wrapper_element

  if (element === 'article') {
    wrapper_element = <article className="wrapper">{children}</article>;
  } else {
    wrapper_element = <section className="wrapper">{children}</section>;
  }

  return(wrapper_element)
}

export default ContentWrapper;