import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Layout, PostPagination, SEO } from '..';

const Article = styled.article`
  code {
    font-size: 0.75em;
  }
  pre[class*='language-'] {
    margin: 0 0 1rem;
    border-radius: 4px;
  }
`;

function GardenTemplate({ data }) {
  const {
    markdownRemark: {
      html,
      excerpt,
      frontmatter: { date, title, image, tags },
      fields: { slug }
    },
    nextPost,
    prevPost
  } = data;

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        path={slug}
        keywords={tags}
        image={image}
      />
      <Article>
        <h2>{title}</h2>
        <p>{date}</p>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
      <PostPagination prev={prevPost} next={nextPost} />
    </Layout>
  );
}

GardenTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default GardenTemplate;

export const query = graphql`
  query GardenQuery(
    $slug: String!
    $nextPostPath: String!
    $prevPostPath: String!
  ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        tags
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1400) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
    nextPost: markdownRemark(fields: { slug: { eq: $nextPostPath } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    prevPost: markdownRemark(fields: { slug: { eq: $prevPostPath } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
