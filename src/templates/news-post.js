import React, { Fragment, useEffect } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const NewsPostTemplate = ({
  content,
  title,
  featuredimage,
  contentEditor,
  date,
  pageContext
}) => {
  useEffect(() => {
    console.log(pageContext);
  }, []);
  const dateFormat = new Date(date);
  const fullDate = `${String(dateFormat.getDate()).padStart(2, "0")}-${String(
    dateFormat.getMonth() + 1
  ).padStart(2, "0")}-${dateFormat.getFullYear()}`;
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
            <div className="col-12" align="center">
              <h1>{title}</h1>
              <p>{fullDate}</p>
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
                <div className="width75">{contentEditor}</div>
              )}
              <br /> <br />
              <Link className="btn2" to="/news">
                {" "}
                More News{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const NewsPage = ({ data, location, pageContext }) => {
  const { markdownRemark: news } = data;
  return (
    <Layout location={location} pageContext={pageContext}>
      <NewsPostTemplate
        location={location}
        pageContext={pageContext}
        content={news.html}
        title={news.frontmatter.title}
        description={news.frontmatter.description}
        date={news.frontmatter.date}
        featuredimage={news.frontmatter.featuredimage}
      />
    </Layout>
  );
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        date
        featuredimage {
          publicURL
        }
      }
    }
  }
`;
