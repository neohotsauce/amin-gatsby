import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

export const Investments = ({ data }) => {
  return (
    <div className="block2 bg3" id="investments">
      <div className="container-fluid padding25">
        <div className="row px-3 justify-content-center">
          <div className="col-12" align="center">
            <h1 className="white animated  fadeInUp">Our Investments</h1>
            <br />
            <br />
            <br />
          </div>

          <div className="col-12 mx-auto">
            <div className="row m-less justify-content-md-center">
              {data.allMarkdownRemark.edges.map(item => {
                return (
                  <div
                    className="col-12 col-md-4 col-lg-4 col-xl-4 m-less  mx-auto animated  fadeIn"
                    key={item.node.id}
                  >
                    <div className="contents">
                      {item.node.frontmatter.featuredimage.publicURL ? (
                        <img
                          src={item.node.frontmatter.featuredimage.publicURL}
                          alt="Avatar"
                          className="image"
                        />
                      ) : (
                        <img
                          src={item.node.frontmatter.featuredimage}
                          alt="Avatar"
                          className="image"
                        />
                      )}
                      <Link to={item.node.fields.slug}>
                        <div className="overlayer">
                          <div className="text">
                            {item.node.frontmatter.title}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query InvestmentsIndexQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "investment-post" } } }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                featuredimage {
                  publicURL
                }
                title
                date
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Investments data={data} count={count} />}
  />
);
