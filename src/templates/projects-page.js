import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const ProjectsPageTemplate = ({ banner, projects }) => {
  const types = projects.map(project => {
    return project.type;
  });
  const uniqueTypes = types.reduce(
    (unique, item) =>
      unique.map(u => u.toLowerCase()).includes(item.toLowerCase())
        ? unique
        : [...unique, item],
    []
  );

  return (
    <Fragment>
      <div
        class="topbanner bgprojects"
        style={{
          background: `url(${
            !banner.image.publicURL ? banner.image : banner.image.publicURL
          }) no-repeat center bottom`,
          backgroundSize: "cover"
        }}
      >
        <div class="d-flex align-items-center justify-content-center ">
          <h2 class="white xl">{banner.title}</h2>
        </div>
      </div>

      <div class="block2 ">
        <div class="container">
          <div class="row px-3">
            <div class="col-lg-12 col-xl-12 col-12 " align="center">
              <div align="center">
                <button
                  class="btn btn-default filter-button mx-1"
                  data-filter="all"
                >
                  All
                </button>
                {uniqueTypes.map((type, index) => (
                  <button
                    key={index}
                    class="btn btn-default filter-button mx-1"
                    data-filter={type.toLowerCase().replace(/\s/g, "")}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <br />
              <br />
            </div>

            {projects.map((project, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-4 col-sm-6 col-12 filter pb-3 pb-lg-4 ${project.type
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
              >
                <img
                  src={
                    !project.image.publicURL
                      ? project.image
                      : project.image.publicURL
                  }
                  class="img-fluid news_image pb-3 pb-lg-4"
                />
                <div class="pl-3 pl-lg-3">
                  <h4>{project.title}</h4>
                  <p align="left">
                    <span>Client: {project.client}</span>
                    <br />
                    <span>{project.year}</span>
                    <br />
                    <span>Type: {project.type}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const ProjectsPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout location={location}>
      <ProjectsPageTemplate
        banner={frontmatter.banner}
        projects={frontmatter.projects}
      />
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "projects-page" } }) {
      frontmatter {
        banner {
          title
          image {
            publicURL
          }
        }
        projects {
          title
          image {
            publicURL
          }
          client
          year
          type
        }
      }
    }
  }
`;
