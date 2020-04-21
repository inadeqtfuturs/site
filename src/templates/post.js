import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Layout, SEO } from '..';

const Article = styled.article``;

function PostTemplate({ data }) {
  console.log('data', data);
  const {
    html,
    frontmatter: { author, date, title }
  } = data.markdownRemark;
  return (
    <Layout>
      <SEO title="page" />
      <Article>
        <h2>{title}</h2>
        <p>
          {date} by {author}
        </p>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostTemplate;

export const query = graphql`
  query PostQuery(
    $slug: String!
    $nextPostPath: String!
    $prevPostPath: String!
  ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
