import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { Link, graphql, navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
import Layout from "../components/Layout";
import BannerRoll from "../components/BannerRoll";
import Investments from "../components/Investments";

export const IndexPageTemplate = ({ mainpitch, banners }) => {
  const recaptchaRef = createRef();

  const RECAPTCHA_KEY =
    process.env.GATSBY_APP_SITE_RECAPTCHA_KEY ||
    "6LfCztAUAAAAADAKPuYnzzgSWX-FelwcnjPSbyko";
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    messagecontent: ""
  });
  const { name, email, messagecontent } = state;

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      return alert(
        "Please confirm that you are not a robot by filling the reCAPTCHA"
      );
    }
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          "g-recaptcha-response": recaptchaValue,
          ...state
        })
      });
      navigate(form.getAttribute("action"));
      alert(
        "Thank you!\nYour message has been successfully sent. We will contact you very soon!"
      );
      return setState({
        name: "",
        email: "",
        messagecontent: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* banners goes below */}
      <BannerRoll banners={banners} />

      {/* mainpitch goes below */}
      <div className="block2 " id="intro">
        <div className="container">
          <div className="row px-3  ">
            <div className="col-12 " align="center">
              <h1 className="animated  fadeInUp">{mainpitch.title}</h1>
              <br />
              <p className="width75 animated  fadeInUp">
                {mainpitch.description}
              </p>
              <br />
              <Link to="/story" className="btn1 animated wow fadeInUp">
                READ MORE{" "}
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>

      <Investments />

      {/* contact form goes below */}
      <div className="block2 bg5" id="contact">
        <div className="container-fluid">
          <div className="row px-3  ">
            <div className="col-12 pb-2 pb-lg-5 " align="center">
              <h1 className="animated  fadeInUp">Get Connected</h1>
              <br />
              <p className="width75 animated  fadeInUp">
                {" "}
                Email us at info@aminaedi.com
              </p>
            </div>

            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6col-xl-6 animated  fadeInUp"
              align="center"
            >
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2150607372!2d73.51331875067078!3d4.178082347114913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7fcde5633a9d%3A0x5728bf77e7d6cb9!2sAminaedi%20Equity%20Pvt%20Ltd!5e0!3m2!1sen!2smv!4v1578246098701!5m2!1sen!2smv"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen=""
              ></iframe>
            </div>

            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6col-xl-6 animated  fadeInUp"
              align="center"
            >
              <form
                id="contact-form"
                className="contact-form"
                method="post"
                action="/"
                name="contact-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        autoComplete="off"
                        id="Name"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control textarea"
                        rows="3"
                        name="messagecontent"
                        id="Message"
                        placeholder="Please state any inquiry in here..."
                        onChange={handleChange}
                        value={messagecontent}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
                <br />
                <div className="row">
                  <div className="col-md-12" align="left">
                    <button type="submit" className="btn main-btn pull-right ">
                      Send a message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  banners: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        banners={frontmatter.banners}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        banners {
          image {
            publicURL
          }
          text
        }
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
