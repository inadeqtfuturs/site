import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { theme } from '..';

const StyledImage = styled.img`
  height: 2rem;
  width: 2rem;
  filter: invert(97%) sepia(1%) saturate(357%) hue-rotate(158deg)
    brightness(115%) contrast(94%);
  position: absolute;
  left: ${theme.space[3]};
  top: ${theme.space[3]};
  z-index: ${theme.zIndices[6]};
  ${theme.mediaQueries.md} {
    position: unset;
  }
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
