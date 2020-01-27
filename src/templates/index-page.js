import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import BannerRoll from "../components/landing/BannerRoll";
import Stats from "../components/landing/Stats";
import TrustBadges from "../components/landing/TrustBadges";
import Achievements from "../components/landing/Achievements";
import Companies from "../components/landing/Companies";

export const IndexPageTemplate = ({
  mainpitch,
  banners,
  stats,
  servicesIntro,
  projectsIntro,
  badges,
  achievements,
  companies
}) => {
  return (
    <div>
      {/* banners goes below */}
      <BannerRoll banners={banners} />

      {/* mainpitch goes below */}
      <div className="block2">
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-4 col-xl-4 col-12 ">
              <h1>{mainpitch.title}</h1>
            </div>

            <div className="col-lg-8 col-xl-8 col-12">
              <p>{mainpitch.description}</p>
              <br />
              <Link className="btn1" to="/about">
                LEARN MORE...{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Stats stats={stats} />

      {/* services intro */}
      <div className="block2 ">
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-5 col-xl-5 col-12 ">
              <h1>
                <span className="extralarge">
                  {servicesIntro.title.mainPhrase}
                </span>{" "}
                <i className="l-space">{servicesIntro.title.subPhrase}</i>{" "}
              </h1>
              <br />
              <p>{servicesIntro.description}</p>
              <br />
              <Link className="btn1" to="/about">
                VIEW SERVICES...
              </Link>
            </div>

            <div className="col-lg-7 col-xl-7 col-12">
              {!servicesIntro.image.publicURL ? (
                <img
                  src={servicesIntro.image}
                  className="img-fluid pt-lg-1"
                  alt="..."
                />
              ) : (
                <img
                  src={servicesIntro.image.publicURL}
                  className="img-fluid pt-lg-1"
                  alt="..."
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* projects section */}
      <div
        className="block2 bg2 "
        style={{
          background: `url(${
            !projectsIntro.image.publicURL
              ? projectsIntro.image
              : projectsIntro.image.publicURL
          }) no-repeat center center`,
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-6 col-xl-6 col-12 "></div>

            <div className="col-lg-6 col-xl-6 col-12">
              <h1>
                <i className="l-space">
                  {projectsIntro.title.subPhrase}
                  <span className="extralarge">
                    {projectsIntro.title.mainPhrase}
                  </span>
                </i>{" "}
              </h1>
              <br />
              <p>{projectsIntro.description}</p>
              <br />
              <Link className="btn1" to="projects">
                VIEW PROJECTS...
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TrustBadges badges={badges} />

      <Achievements achievements={achievements} />

      <Companies companies={companies} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  banners: PropTypes.array
};

const IndexPage = ({ data, location, pageContext }) => {
  const { frontmatter: landing } = data.landing;
  const { frontmatter: brands } = data.brands;
  const { frontmatter: achievements } = data.achievements;

  return (
    <Layout location={location} pageContext={pageContext}>
      <IndexPageTemplate
        mainpitch={landing.mainpitch}
        banners={landing.banners}
        stats={landing.stats}
        servicesIntro={landing.servicesIntro}
        projectsIntro={landing.projectsIntro}
        badges={brands.brands}
        achievements={achievements.achievements}
        companies={landing.companies}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    landing: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        banners {
          image {
            publicURL
          }
          text
        }
        mainpitch {
          title
          description
        }
        stats {
          title
          info
        }
        servicesIntro {
          title {
            mainPhrase
            subPhrase
          }
          image {
            publicURL
          }
          description
        }
        projectsIntro {
          title {
            mainPhrase
            subPhrase
          }
          description
          image {
            publicURL
          }
        }
        companies {
          image {
            publicURL
          }
        }
      }
    }
    brands: markdownRemark(
      frontmatter: { templateKey: { eq: "brands-page" } }
    ) {
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
    achievements: markdownRemark(
      frontmatter: { templateKey: { eq: "achievements-page" } }
    ) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        achievements {
          image {
            publicURL
          }
          description
          title
        }
      }
    }
  }
`;
