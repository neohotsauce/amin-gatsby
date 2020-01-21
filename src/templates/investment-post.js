import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const InvestmentPostTemplate = ({
  contentEditor,
  content,
  title,
  helmet,
  featuredimage
}) => {
  if (!featuredimage) {
    featuredimage = "https://bandungchoral.com/assets/images/empty-image.jpg";
  }

  return (
    <div className="investment-wrapper">
      {helmet || ""}
      <h1 className="header mt-5 mb-5 text-center">{title}</h1>
      <div className="inv-banner">
        <img
          src={
            !!featuredimage.publicURL ? featuredimage.publicURL : featuredimage
          }
          alt=""
          className="img-fluid w-100"
        />
      </div>

      {!contentEditor ? (
        <div
          className="container mt-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="container mt-5">{contentEditor}</div>
      )}
    </div>
  );
};

InvestmentPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <InvestmentPostTemplate
        content={post.html}
        helmet={
          <Helmet titleTemplate="%s | Investment">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query InvestmentPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredimage {
          publicURL
        }
      }
    }
  }
`;
