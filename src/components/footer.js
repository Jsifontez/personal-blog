import React from "react";
import { Link } from "gatsby";

import "./footer.css"

const Footer = (props) => {
  return(
    <footer className="footer">
      <h3 className="footer__nav__title">More in this site:</h3>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__link">
            <Link className="" to="/">About</Link>
          </li>
          <li className="footer__link">
            <Link className="" to="/projects/">Projects</Link>
          </li>
          <li className="footer__link">
            <Link className="" to="/blog/">Blog</Link>
          </li>
          <li className="footer__link">
            <Link className="" to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      <h4 className="social__title">Find me in:</h4>
      <ul className="footer__links">
        <li className="social__link">
          <a href="https://twitter.com/jsifontez_">Twitter</a>
        </li>
        <li className="social__link">
          <a href="https://www.linkedin.com/in/juan-sifontez/">LinkedIn</a>
        </li>
        <li className="social__link">
          <a href="https://www.facebook.com/juansifontez">Facebook</a>
        </li>
      </ul>
      <p className="footer__note">
        <small style={{ fontSize: `85%`}}>© Juan Sifontez 2020</small>
      </p>
      <p className="footer__note note--is-last">
        <small>
          This site is built with {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> {` `}
          and hosted on <a href="https://netlify.com">Netlify</a>.
        </small>
      </p>
    </footer>
  )
}

export default Footer