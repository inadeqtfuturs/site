import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Layout, SEO } from '..';

export function GardenIndex({ pageContext }) {
  const { posts } = pageContext;
  return (
    <Layout>
      <SEO
        title="garden"
        description="hi. i'm alex and here's some stuff i've been thinking about"
        path="/garden"
      />
      <h2>
        the garden{' '}
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </h2>
      <p>
        These posts are works in progress or documentation of/for future
        projects.
      </p>
      {posts.map(post => {
        const {
          node: {
            id,
            fields: { slug },
            frontmatter: { title, excerpt }
          }
        } = post;
        return (
          <div key={id}>
            <Link to={slug}>
              <h3>{title}</h3>
            </Link>
            <p>{excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
}

GardenIndex.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default GardenIndex;
