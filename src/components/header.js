import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = () => {
  return(
    <header className="header">
      <h1 className="header__logo">
        <Link to="/">Juan Sifontez</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__links">
          <li className="header__link">
            <Link className="link" to="/about/">About</Link>
          </li>
          <li className="header__link">
            <Link className="link" to="/projects/">Projects</Link>
          </li>
          <li className="header__link">
            <Link className="link" to="/blog/">Blog</Link>
          </li>
          <li className="header__link">
            <Link className="link is--last" to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header