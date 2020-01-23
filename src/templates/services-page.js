import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const ServicesPageTemplate = ({ banner, services }) => {
  return (
    <Fragment>
      <div
        class="topbanner bgservices"
        style={{
          background: `url(${
            !banner.image.publicURL ? banner.image : banner.image.publicURL
          }) no-repeat center bottom`
        }}
      >
        <div class="d-flex align-items-center justify-content-center ">
          <h2 class="white xl">{banner.title}</h2>
        </div>
      </div>

      <div class="block2 ">
        <div class="container">
          <div class="row px-3">
            {services.map((service, index) => (
              <div
                key={index}
                class="col-lg-6 col-xl-6 col-12 pb-3"
                align="center"
              >
                <h2>{service.title}</h2>
                <br />
                <div class="row">
                  <div
                    class="col-lg-6 col-xl-6 col-sm-6 col-12 "
                    align="center"
                  >
                    <img
                      src={
                        !service.image.publicURL
                          ? service.image
                          : service.image.publicURL
                      }
                      class="img-fluid"
                    />
                  </div>
                  <div
                    class="col-lg-6 col-xl-6 col-sm-6 col-12 pt-2"
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

const ServicesPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location}>
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
