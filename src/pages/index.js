import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, SEO } from '../components';

// placeholder hero
const StyledImage = styled.img`
  height: 20rem;
  width: 20rem;
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
        <h1>hello.</h1>
        <StyledImage src={logo.path.publicURL} />
      </Wrapper>
    </Layout>
  );
}

export default Index;
