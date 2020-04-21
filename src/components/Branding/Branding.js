import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Brand = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 100;
`;

function Branding() {
  return (
    <Brand>
      <StyledLink to="/">if.</StyledLink>
    </Brand>
  );
}

export default Branding;
