import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = () => {
  return(
    <header className="header">
      <h1 className="header__logo">
        Juan Sifontez
      </h1>
      <nav className="header__nav">
        <ul className="header__links">
          <li className="header__link">
            <Link
              activeClassName="active"
              className="link link--header"
              to="/"
            >
              About
            </Link>
          </li>
          <li className="header__link">
            <Link
              activeClassName="active"
              className="link link--header"
              to="/projects/"
            >
              Projects
            </Link>
          </li>
          <li className="header__link">
            <Link
              activeClassName="active"
              className="link link--header"
              to="/blog/"
            >
              Blog
            </Link>
          </li>
          <li className="header__link">
            <Link
              activeClassName="active"
              className="link link--header is--last"
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header