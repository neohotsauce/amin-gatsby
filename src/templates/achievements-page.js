import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const AchievementsPageTemplate = ({ banner, achievements }) => {
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
        <div className="row px-3 justify-content-center">
          {achievements.map((item, index) => (
            <div key={index} className="col-6 col-lg-3 col-xl-3 text-center">
              {item.image ? (
                <img
                  src={
                    !item.image.publicURL ? item.image : item.image.publicURL
                  }
                  className="img-fluid mb-3 mb-lg-4"
                />
              ) : (
                <img
                  src={null}
                  className="img-fluid mb-3 mb-lg-4"
                  alt="award"
                />
              )}

              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const AchievementsPage = ({ data, location, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location} pageContext={pageContext}>
      <AchievementsPageTemplate
        banner={frontmatter.banner}
        achievements={frontmatter.achievements}
      />
    </Layout>
  );
};

export default AchievementsPage;

export const pageQuery = graphql`
  query AchievementsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "achievements-page" } }) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        achievements {
          description
          image {
            publicURL
          }
          title
        }
      }
    }
  }
`;
