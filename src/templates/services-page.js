import React, { Fragment, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const ServicesPageTemplate = ({ banner, services }) => {
  return (
    <Fragment>
      <div
        className="topbanner bgservices"
        style={{
          background: `url(${
            !banner.image.publicURL ? banner.image : banner.image.publicURL
          }) no-repeat center bottom`,
          backgroundSize: "cover"
        }}
      >
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="white xl">{banner.title}</h2>
        </div>
      </div>

      <div className="block2 py-5">
        <div className="container">
          <div className="row px-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-6 col-xl-6 col-12 py-5"
                align="center"
              >
                <h2>{service.title}</h2>
                <br />
                <div className="row">
                  <div
                    className="col-lg-6 col-xl-6 col-sm-6 col-12 "
                    align="center"
                  >
                    {service.image ? (
                      <img
                        src={
                          !service.image.publicURL
                            ? service.image
                            : service.image.publicURL
                        }
                        className="img-fluid"
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "35px 5px"
                        }}
                      />
                    ) : (
                      <img
                        src={null}
                        className="img-fluid"
                        alt="image preview"
                      />
                    )}
                  </div>
                  <div
                    className="d-flex my-auto col-lg-6 col-xl-6 col-sm-6 col-12 pt-2"
                    align="left"
                  >
                    <p style={{ whiteSpace: "pre-line" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const ServicesPage = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location} pageContext={pageContext}>
      <ServicesPageTemplate
        banner={frontmatter.banner}
        services={frontmatter.services}
      />
    </Layout>
  );
};

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        services {
          title
          description
          image {
            publicURL
          }
        }
      }
    }
  }
`;
