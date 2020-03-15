import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const BrandsPageTemplate = ({ banner, brands }) => {
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
          <h2 className="white xl">{banner.title}</h2>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex"
            >
              {brand.image ? (
                <img
                  src={
                    !brand.image.publicURL ? brand.image : brand.image.publicURL
                  }
                  alt=""
                  className="img-fluid m-auto"
                />
              ) : (
                <img src={null} alt="brand" className="img-fluid mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const BrandsPage = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location} pageContext={pageContext}>
      <BrandsPageTemplate
        banner={frontmatter.banner}
        brands={frontmatter.brands}
      />
    </Layout>
  );
};

export default BrandsPage;

export const pageQuery = graphql`
  query BrandsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "brands-page" } }) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        brands {
          image {
            publicURL
          }
        }
      }
    }
  }
`;
