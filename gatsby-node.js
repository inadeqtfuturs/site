const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

const indexPage = path.resolve('./src/templates/index.js');
const gardenIndex = path.resolve('./src/templates/garden-index.js');
const blogPost = path.resolve(`./src/templates/post.js`);
const gardenPost = path.resolve(`./src/templates/garden.js`);

function generatePost(createPage, component, posts) {
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
        nextPostPath: previous ? previous.fields.slug : 'none',
        prevPostPath: next ? next.fields.slug : 'none'
      }
    });
  });
}

function createGarden(createPage, component, posts) {
  createPage({
    path: '/garden',
    component,
    context: {
      posts
    }
  });
}

function paginate(array, pageSize, pageNumber) {
  return array
    .slice(0)
    .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function createPagination(createPage, edges, pathPrefix) {
  const indexSize = 5;
  const pagesSum = Math.ceil(edges.length / indexSize);

  for (let page = 1; page <= pagesSum; page++) {
    createPage({
      path: page === 1 ? `${pathPrefix}` : `${pathPrefix}/${page}`,
      component: indexPage,
      context: {
        posts: paginate(edges, indexSize, page).map(({ node }) => node),
        page,
        pagesSum,
        prevPath:
          page - 1 > 0
            ? `${pathPrefix}/${page - 1}`
            : page === 1
            ? null
            : `${pathPrefix}/${page}`,
        nextPath: page + 1 <= pagesSum ? `${pathPrefix}/${page + 1}` : null
      }
    });
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "code" }, draft: { eq: false } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              author
              date(formatString: "MMMM DD, YYYY")
              type
              tags
            }
            fields {
              slug
            }
            html
            excerpt(format: HTML, pruneLength: 200, truncate: true)
          }
          previous {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
        }
      }
      garden: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { type: { eq: "garden" }, draft: { eq: false } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              author
              date(formatString: "MMMM DD, YYYY")
              type
              tags
              excerpt
            }
            fields {
              slug
            }
            html
          }
          previous {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.posts.edges;
    const gardenPosts = result.data.garden.edges;
    generatePost(createPage, blogPost, posts);
    generatePost(createPage, gardenPost, gardenPosts);
    createPagination(createPage, posts, '/blog');
    createGarden(createPage, gardenIndex, gardenPosts);
  });
};
