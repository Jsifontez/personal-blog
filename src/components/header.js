import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = () => {
  const links = [
    {to: '/', name: 'About'},
    {to: '/projects/', name: 'Projects'},
    {to: '/blog/', name: 'Blog'},
    {to: '/contact/', name: 'Contact'}
  ]

  return(
    <header className="header">
      <h1 className="header__logo">
        Juan Sifontez
      </h1>
      <nav className="header__nav">
        <ul className="header__links">
          {links.map(link => (
            <li className="header__link" key={link}>
              <Link
                activeClassName="active"
                className="link link--header"
                to={link.to}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header