import React from "react";

import styles from "./home-layout.module.css"

const HomeLayout = (props) => {
  return (
    <div className={styles.home}>
      {props.children}
    </div>
  )
}

export default HomeLayout