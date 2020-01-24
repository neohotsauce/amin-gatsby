import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const DevelopmentPostTemplate = ({
  content,
  title,
  type,
  year,
  featuredimage,
  contentEditor
}) => {
  return (
    <Fragment>
      <div className="topbanner bgdev">
        <div className="d-flex align-items-center justify-content-center ">
          <h2 className="white xl">DEVELOPMENTS</h2>
        </div>
      </div>

      <div className="block2 ">
        <div className="container">
          <div className="row px-3">
            <div className="col-12" align="center">
              <h1>{title}</h1>
              <img
                src={
                  !featuredimage.publicURL
                    ? featuredimage
                    : featuredimage.publicURL
                }
                width="75%"
                className="py-5"
                alt="Featured image"
              />
              <br />
              {!contentEditor ? (
                <div
                  className="width75"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <p className="width75">{contentEditor}</p>
              )}
              <br /> <br />
              <Link className="btn2" to="/developments">
                {" "}
                More Developments{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const DevelopmetnPage = ({ data, location }) => {
  const { markdownRemark: development } = data;
  return (
    <Layout location={location}>
      <DevelopmentPostTemplate
        content={development.html}
        title={development.frontmatter.title}
        type={development.frontmatter.type}
        year={development.frontmatter.year}
        featuredimage={development.frontmatter.featuredimage}
      />
    </Layout>
  );
};

export default DevelopmetnPage;

export const pageQuery = graphql`
  query DevelopmentPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        year
        type
        featuredimage {
          publicURL
        }
      }
    }
  }
`;
