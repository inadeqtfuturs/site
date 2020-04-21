import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Tags, theme } from '../..';

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  margin-bottom: ${theme.space[4]};
  padding-bottom: ${theme.space[4]};
  border-bottom: ${theme.borders[1]} ${theme.colors.primary};
`;
const Body = styled.div`
  grid-column: 1/13;
  ${theme.mediaQueries.lg} {
    grid-column: 5/13;
  }
`;
const Excerpt = styled.div``;
const Header = styled.div`
  grid-column: 1/13;
  margin-bottom: ${theme.space[3]};
  ${theme.mediaQueries.lg} {
    grid-column: 1/4;
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: ${theme.space[2]};
  }
  p {
    margin: 0;
    font-style: italic;
  }
`;
const ReadMore = styled.p``;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function PostExcerpt({ post }) {
  const {
    fields: { slug },
    frontmatter: { title, date, tags },
    excerpt
  } = post;

  return (
    <Article>
      <Header>
        <StyledLink to={slug}>
          <h2>{title}</h2>
        </StyledLink>
        <p>{date}</p>
      </Header>
      <Body>
        <Excerpt>
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <StyledLink to={slug}>
            <ReadMore>read more...</ReadMore>
          </StyledLink>
          <Tags tags={tags} />
        </Excerpt>
      </Body>
    </Article>
  );
}

PostExcerpt.propTypes = {
  post: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.array
};

PostExcerpt.defaultProps = {
  post: {},
  slug: null,
  title: null,
  date: null,
  tags: []
};

export default PostExcerpt;
