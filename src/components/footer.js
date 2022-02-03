import React from "react";

import "./footer.css"

const Footer = (props) => {
  const socialLinks = [
    {href: "https://twitter.com/jsifontez_", to: 'Twitter'},
    {href: "https://www.linkedin.com/in/juan-sifontez/", to: 'LinkedIn'},
    {href: "https://github.com/Jsifontez", to: 'GitHub'},
  ]

  return(
    <footer className="footer">
      <h4 className="social__title">Find me in:</h4>
      <ul className="footer__links">
        {socialLinks.map(link => (
          <li className="social__link" key={link.to}>
            <a
              className="link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.to}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer__note">
        <small style={{ fontSize: `85%`}}>© Juan Sifontez 2020-2021</small>
      </p>
      <p className="footer__note">
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