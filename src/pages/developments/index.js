import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";

export const DevelopmentsPageTemplate = ({ developments }) => {
  return (
    <Fragment>
      <div className="topbanner bgdev">
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="white xl">OUR DEVELOPMENTS</h2>
        </div>
      </div>

      <div className="block2 ">
        <div className="container">
          <div className="row px-3">
            {developments.map(development => {
              const {
                title,
                year,
                featuredimage,
                type
              } = development.node.frontmatter;
              return (
                <div
                  key={development.node.fields.slug}
                  className="col-lg-4 col-xl-4 col-sm-6 col-12 pb-3 pb-xl-5"
                  align="center"
                >
                  <Link to={development.node.fields.slug}>
                    <img
                      src={
                        !featuredimage.publicURL
                          ? featuredimage
                          : featuredimage.publicURL
                      }
                      className="news_image pb-4"
                      align="center"
                    />
                    <br />
                    <h4 align="left" className="pb-2">
                      {title}
                    </h4>
                    <p align="left">
                      <span>Year: {year}</span>
                      <br />
                      <span>Type: {type}</span>
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const DevelopmentsPage = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout location={location}>
      <DevelopmentsPageTemplate developments={edges} />
    </Layout>
  );
};

export default DevelopmentsPage;

export const pageQuery = graphql`
  query DevelopmentsPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "development-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            type
            year
            featuredimage {
              publicURL
            }
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`;
