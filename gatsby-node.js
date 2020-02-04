const _ = require("lodash");
const path = require("path");
// const axios = require("axios");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      if (!edge.node.frontmatter.templateKey) {
        return null;
      }
      return createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          templateKey: edge.node.frontmatter.templateKey
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest
// }) => {
//   const { createNode } = actions;
//   // Create nodes here, generally by downloading data
//   // from a remote API.
//   const data = await axios.get(
//     "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
//   );
//   // Process data into nodes.
//   data.data.forEach(datum => {
//     datum.image = "https://excorp.mv/img/small2.jpg";
//     const nodeContent = JSON.stringify(datum);
//     const nodeMeta = {
//       id: createNodeId(`my-data-${datum.email}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: `MyNodeType`,
//         mediaType: `text/html`,
//         content: nodeContent,
//         contentDigest: createContentDigest(datum)
//       }
//     };
//     const node = Object.assign({}, datum, nodeMeta);
//     return createNode(node);
//   });
//   // We're done, return.
//   return;
// };
