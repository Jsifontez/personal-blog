import React from "react"
import Link from "next/link"

import styles from "./header.module.css"

const Header = () => {
  const links = [
    {to: '/', name: 'About'},
    {to: '/projects/', name: 'Projects'},
    {to: '/blog/', name: 'Blog'},
    {to: '/contact/', name: 'Contact'}
  ]

  return(
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        Juan Sifontez
      </h1>
      <nav className={styles.header__nav}>
        <ul className={styles.header__links}>
          {links.map(link => (
            <li className={styles.header__link} key={link}>
              <Link
                activeClassName="active"
                className="link link--header"
                href={link.to}
              >
                <a>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header