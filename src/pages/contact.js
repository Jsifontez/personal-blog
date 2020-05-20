import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./contact.css";

const Contact = (props) => {
  return(
    <Layout>
      <SEO title="Contact" />
      <article className="contact">
        <header>
          <h1 className="contact__title">Contact</h1>
        </header>
        <section className="contact__description">
          <p>¡Gracias por querer conectar!</p>
          <p>
            Estoy contento de poner conectar contigo. Bien sea por
            alguna duda que tengas o si deseas tener hablar de cualquier
            otra cosa. <span role="img" aria-label="hug emoji">🤗</span>
          </p>
          <p>
            La mejor forma más rápida de contactarme es por medio de
            Twitter <a href="https://twitter.com/jsifontez_">@Jsifontez_</a> si
            quieres charlar conmigo.
          </p>
          <p>
            Sin embargo, si tienes una propuesta más seria puedes
            enviarme un email a <a href="mailto:juansfontz@gmail.com">juansfontz@gmail.com</a>.
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default Contact