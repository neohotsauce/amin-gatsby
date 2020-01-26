import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const AboutPageTemplate = ({
  banner,
  overview,
  message,
  certification
}) => {
  return (
    <Fragment>
      {/* banner goes below */}
      <div
        style={{
          background: `url(${
            !banner.image.publicURL ? banner.image : banner.image.publicURL
          }) no-repeat center center`,
          backgroundSize: "cover"
        }}
        className="topbanner bgabout"
      >
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="white xl">{banner.title}</h2>
        </div>
      </div>

      {/* overview section goes below */}
      <div
        className="block2 bg_about2"
        style={{
          background: `url(${
            !overview.image.publicURL
              ? overview.image
              : overview.image.publicURL
          }) no-repeat center bottom`,
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-12 col-xl-12 col-12" align="left">
              <h1>{overview.title}</h1>
              <br />
            </div>

            <div className="col-lg-8 col-xl-8 col-12" align="left">
              <p
                style={{
                  whiteSpace: "pre-line",
                  columnCount: 2,
                  columnGap: "30px"
                }}
              >
                {overview.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block2 bg_about3">
        <div className="container-fluid">
          <div className="row px-3">
            <div
              className="col-lg-6 col-xl-6 col-sm-6 col-12 py-4 "
              align="left"
            >
              <img
                src={
                  !message.image.publicURL
                    ? message.image
                    : message.image.publicURL
                }
                width="100%"
                className="ml-50"
              />
            </div>

            <div
              className="col-lg-6 col-xl-6 col-sm-6  col-12  py-2"
              align="left"
            >
              <h1>{message.title}</h1>
              <br />
              <p className="width75 " style={{ whiteSpace: "pre-line" }}>
                {message.description}
              </p>
              <br />
              <img
                src={
                  !message.signature.publicURL
                    ? message.signature
                    : message.signature.publicURL
                }
                width="250px"
              />
              <br /> <br />
              <h3>{message.fullName}</h3>
              <h4>{message.designation}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* certification section goes below */}
      <div className="block2">
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-12 col-xl-12 col-sm-12 col-12 " align="left">
              <h1>{certification.title}</h1>
            </div>

            <div className="col-lg-6 col-xl-6 col-sm-6 col-12 " align="left">
              <br />
              <p style={{ whiteSpace: "pre-line" }}>
                {certification.description}
              </p>
            </div>

            {certification.badges.map((badge, index) => (
              <div
                key={index}
                className="col-lg-3 col-xl-3 col-sm-3 col-12 "
                align="left"
              >
                {badge.image ? (
                  <img
                    src={
                      !badge.image.publicURL
                        ? badge.image
                        : badge.image.publicURL
                    }
                    className="img-fluid"
                  />
                ) : (
                  <img src={null} className="img-fluid" alt="badge" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const AboutPage = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location} pageContext={pageContext}>
      <AboutPageTemplate
        banner={frontmatter.banner}
        overview={frontmatter.overview}
        message={frontmatter.message}
        certification={frontmatter.certification}
      />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        overview {
          title
          description
          image {
            publicURL
          }
        }
        message {
          title
          description
          image {
            publicURL
          }
          signature {
            publicURL
          }
          fullName
          designation
        }
        certification {
          title
          description
          badges {
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
