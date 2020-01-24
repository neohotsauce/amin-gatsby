import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";

export const NewsPageTemplate = ({ news }) => {
  return (
    <Fragment>
      <div className="topbanner bgnews">
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="white xl">NEWS & MEDIA</h2>
        </div>
      </div>

      <div className="block2 ">
        <div className="container">
          <div className="row px-3">
            {news.map(item => {
              const {
                title,
                description,
                featuredimage
              } = item.node.frontmatter;
              return (
                <div
                  className="col-lg-4 col-xl-4 col-sm-6 col-12 pb-3 pb-xl-5"
                  align="center"
                  key={item.node.fields.slug}
                >
                  <Link to={item.node.fields.slug}>
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
                    <h3 align="left" className="pb-2">
                      {title}
                    </h3>
                    <p align="left">{description}</p>
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

const NewsPage = ({ data, location, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout location={location} pageContext={pageContext}>
      <NewsPageTemplate news={edges} />
    </Layout>
  );
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
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
