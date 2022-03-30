import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = (props) => {
  return(
    <Layout>
      <Seo
        title="Contact"
        description="The best way to contact me. Twitter: @jsifontez_ and telegram: @jsifontez"
      />
      <article className="contact">
        <header>
          <h1 className="contact__title">Contact</h1>
        </header>
        <section className="contact__description">
          <p>Thanks for your interest in getting in touch!</p>
          <p>
            I am happy to put connect with you. Either for any question you have or if you want to have talk about anything else. <span role="img" aria-label="hug emoji">🤗</span>
          </p>
          <p>
            The quickest way to contact me is through twitter <a className="link" href="https://twitter.com/jsifontez_">@Jsifontez_</a> if you want to chat.
          </p>
          <p>
            However, if you have a more serious proposal you can send me an email to <a className="link" href="mailto:juan.sifontez.dev@gmail.com">juan.sifontez.dev@gmail.com</a>.
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default Contact