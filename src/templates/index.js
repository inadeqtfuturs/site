import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PostExcerpt, SEO } from '..';

export function Index({ pageContext }) {
  const { posts, prevPath, nextPath } = pageContext;
  return (
    <Layout>
      <SEO
        title="blog"
        description="hi. i'm alex and here's some stuff i've written about"
        path="/blog"
      />
      {posts.map(post => (
        <PostExcerpt key={post.frontmatter.title} post={post} />
      ))}
    </Layout>
  );
}

Index.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default Index;
