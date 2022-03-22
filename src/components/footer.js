import React from "react";

import styles from "./footer.module.css"

const Footer = (props) => {
  const socialLinks = [
    {href: "https://twitter.com/jsifontez_", to: 'Twitter'},
    {href: "https://www.linkedin.com/in/juan-sifontez/", to: 'LinkedIn'},
    {href: "https://github.com/Jsifontez", to: 'GitHub'},
  ]

  return(
    <footer className={styles.footer}>
      <h4 className={styles.social__title}>Find me in:</h4>
      <ul className={styles.footer__links}>
        {socialLinks.map(link => (
          <li className={styles.social__link} key={link.to}>
            <a
              className={styles.link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.to}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.footer__note}>
        <small style={{ fontSize: `85%`}}>© Juan Sifontez 2020-2021</small>
      </p>
      <p className={styles.footer__note}>
        <small>
          This site is built with {` `}
          <a className="link is--note" href="https://www.gatsbyjs.org">Gatsby</a> {` `}
          and hosted on <a className="link is--note" href="https://netlify.com">Netlify</a>.
        </small>
      </p>
    </footer>
  )
}

export default Footer