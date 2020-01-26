import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { Link, graphql, navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
import Layout from "../components/Layout";

import BannerRoll from "../components/landing/BannerRoll";
import Stats from "../components/landing/Stats";
import TrustBadges from "../components/landing/TrustBadges";
import Achievements from "../components/landing/Achievements";
import Companies from "../components/landing/Companies";

export const IndexPageTemplate = ({
  mainpitch,
  banners,
  stats,
  servicesIntro,
  projectsIntro,
  badges,
  achievements,
  companies
}) => {
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
      <div className="block2">
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-4 col-xl-4 col-12 ">
              <h1>{mainpitch.title}</h1>
            </div>

            <div className="col-lg-8 col-xl-8 col-12">
              <p>{mainpitch.description}</p>
              <br />
              <Link className="btn1" to="/about">
                LEARN MORE...{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Stats stats={stats} />

      {/* services intro */}
      <div className="block2 ">
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-5 col-xl-5 col-12 ">
              <h1>
                <span className="extralarge">
                  {servicesIntro.title.mainPhrase}
                </span>{" "}
                <i className="l-space">{servicesIntro.title.subPhrase}</i>{" "}
              </h1>
              <br />
              <p>{servicesIntro.description}</p>
              <br />
              <Link className="btn1" to="/about">
                VIEW SERVICES...
              </Link>
            </div>

            <div className="col-lg-7 col-xl-7 col-12">
              {!servicesIntro.image.publicURL ? (
                <img
                  src={servicesIntro.image}
                  className="img-fluid pt-lg-1"
                  alt="..."
                />
              ) : (
                <img
                  src={servicesIntro.image.publicURL}
                  className="img-fluid pt-lg-1"
                  alt="..."
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* projects section */}
      <div
        className="block2 bg2 "
        style={{
          background: `url(${
            !projectsIntro.image.publicURL
              ? projectsIntro.image
              : projectsIntro.image.publicURL
          }) no-repeat center center`,
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-6 col-xl-6 col-12 "></div>

            <div className="col-lg-6 col-xl-6 col-12">
              <h1>
                <i className="l-space">
                  {projectsIntro.title.subPhrase}
                  <span className="extralarge">
                    {projectsIntro.title.mainPhrase}
                  </span>
                </i>{" "}
              </h1>
              <br />
              <p>{projectsIntro.description}</p>
              <br />
              <Link className="btn1" to="projects">
                VIEW PROJECTS...
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TrustBadges badges={badges} />

      <Achievements achievements={achievements} />

      <Companies companies={companies} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  banners: PropTypes.array
};

const IndexPage = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location} pageContext={pageContext}>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        banners={frontmatter.banners}
        stats={frontmatter.stats}
        servicesIntro={frontmatter.servicesIntro}
        projectsIntro={frontmatter.projectsIntro}
        badges={frontmatter.trustBadges}
        achievements={frontmatter.achievements}
        companies={frontmatter.companies}
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
        stats {
          title
          info
        }
        servicesIntro {
          title {
            mainPhrase
            subPhrase
          }
          image {
            publicURL
          }
          description
        }
        projectsIntro {
          title {
            mainPhrase
            subPhrase
          }
          description
          image {
            publicURL
          }
        }
        trustBadges {
          image {
            publicURL
          }
        }
        achievements {
          title
          description
          image {
            publicURL
          }
        }
        companies {
          image {
            publicURL
          }
        }
      }
    }
  }
`;
