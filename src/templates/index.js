import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PostExcerpt, SEO } from '..';

export function Index({ pageContext }) {
  const { posts, prevPath, nextPath } = pageContext;
  console.log('{ posts, prevPath, nextPath }', { posts, prevPath, nextPath });
  return (
    <Layout>
      <SEO title="index" />
      {posts.map(post => (
        <PostExcerpt post={post} />
      ))}
    </Layout>
  );
}

Index.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default Index;
