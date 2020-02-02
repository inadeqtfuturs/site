import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

const StyledImage = styled.img`
  height: 2rem;
  width: 2rem;
  filter: invert(97%) sepia(1%) saturate(357%) hue-rotate(158deg)
    brightness(115%) contrast(94%);
`;

function Branding() {
  const logo = useStaticQuery(
    graphql`
      query {
        path: file(relativePath: { eq: "sf.svg" }) {
          publicURL
        }
      }
    `
  );

  return <StyledImage src={logo.path.publicURL} />;
}

export default Branding;
