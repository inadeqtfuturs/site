import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { theme } from '../..';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: ${theme.colors.text} solid 1px;
  padding-top: ${theme.space[3]};
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
`;

function PostPagination({ prev, next }) {
  return (
    <PaginationWrapper>
      <LinkWrapper>
        {prev && (
          <>
            <i>previous post</i>
            <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
          </>
        )}
      </LinkWrapper>
      <LinkWrapper style={{ textAlign: 'right' }}>
        {next && (
          <>
            <i>next post</i>
            <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
          </>
        )}
      </LinkWrapper>
    </PaginationWrapper>
  );
}

PostPagination.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object
};

PostPagination.defaultProps = {
  prev: {},
  next: {}
}

export default PostPagination;
