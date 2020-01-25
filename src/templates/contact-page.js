import React, { Fragment, createRef, useState } from "react";
import Recaptcha from "react-google-recaptcha";
import { graphql, navigate } from "gatsby";

import Layout from "../components/Layout";

export const ContactPageTemplate = ({ banner, headoffice, companies }) => {
  const recaptchaRef = createRef();
  const RECAPTCHA_KEY =
    process.env.GATSBY_APP_SITE_RECAPTCHA_KEY ||
    "6Le9vtIUAAAAAOIvwbu4GtrY0K3GDWLnuVMus4QJ";
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = state;

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
        message: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div
        className="topbanner bgcontact"
        style={{
          background: `url(${
            !banner.image.publicURL ? banner.image : banner.image.publicURL
          }) no-repeat center bottom`,
          backgroundSize: "cover"
        }}
      >
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="white xl">CONTACT US</h2>
        </div>
      </div>

      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-12" align="center">
              <h1>Head Office</h1>
              <img
                src={
                  !headoffice.logo.publicURL
                    ? headoffice.logo
                    : headoffice.logo.publicURL
                }
                className="img-fluid"
              />
              <br /> <br />
              <p style={{ whiteSpace: "pre-line" }}>{headoffice.address}</p>
              <p>
                <strong>Phone :</strong>
                {headoffice.phone}
                <br />
                <strong>Facsimile : </strong>
                {headoffice.facsimile}
                <br />
                <strong>Email: </strong>
                {headoffice.email}
              </p>
              <br />
              <br />
            </div>

            {companies.map((company, index) => (
              <div
                key={index}
                className="col-lg-3 col-xl-3 col-sm-6 col-6"
                align="center"
              >
                <h2>AMIN BUILDWARE</h2>
                <br />
                <img
                  src={
                    !company.logo.publicURL
                      ? company.logo
                      : company.logo.publicURL
                  }
                  className="img-fluid"
                />
                <br /> <br />
                {company.address ? (
                  <p style={{ whiteSpace: "pre-line" }}>{company.address}</p>
                ) : null}
                <p>
                  <strong>Phone :</strong> {company.phone} <br />
                  <strong>Facsimile : </strong>
                  {company.facsimile}
                  <br />
                  <strong>Email: </strong>
                  {company.email}
                </p>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* contact form goes below */}
      <div class="block bg3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-xl-12 col-12" align="center">
              <h1>Reach us Quickly.</h1>
              <br />
              <form
                role="form"
                id="contact-form"
                class="contact-form"
                method="post"
                action="/contact"
                name="contact-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        autocomplete="off"
                        id="Name"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        autocomplete="off"
                        id="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        class="form-control textarea"
                        rows="3"
                        name="message"
                        id="Message"
                        placeholder="Please state your inquiry.."
                        required
                        value={message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
                <div class="row mt-3">
                  <div class="col-md-12">
                    <button type="submit" class="btn main-btn pull-right">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const ContacPage = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location} pageContext={pageContext}>
      <ContactPageTemplate
        banner={frontmatter.banner}
        headoffice={frontmatter.headoffice}
        companies={frontmatter.companies}
      />
    </Layout>
  );
};

export default ContacPage;

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        headoffice {
          logo {
            publicURL
          }
          address
          phone
          facsimile
          email
        }
        companies {
          name
          logo {
            publicURL
          }
          address
          phone
          facsimile
          email
        }
      }
    }
  }
`;
