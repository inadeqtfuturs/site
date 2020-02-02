import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, SEO, theme } from '../components';

const StyledHeader = styled.h1`
  font-size: ${theme.fontSizes[5]}px;
  margin-top: 2rem;
  ${theme.mediaQueries.md} {
    font-size: ${theme.fontSizes[6]}px;
    margin-top: 0;
  }
`;
// placeholder hero
const StyledImage = styled.img`
  height: 12rem;
  width: 12rem;
  transform-origin: 50% 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 120s infinite linear;
  filter: invert(97%) sepia(1%) saturate(357%) hue-rotate(158deg)
    brightness(115%) contrast(94%)
    drop-shadow(4px 12px 12px rgba(0, 0, 0, 0.33));
  ${theme.mediaQueries.sm} {
    height: 20rem;
    width: 20rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${theme.mediaQueries.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

function Index() {
  const logo = useStaticQuery(
    graphql`
      query {
        path: file(relativePath: { eq: "sf.svg" }) {
          publicURL
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="home" />
      <Wrapper>
        <StyledHeader>hello.</StyledHeader>
        <StyledImage src={logo.path.publicURL} />
      </Wrapper>
    </Layout>
  );
}

export default Index;
