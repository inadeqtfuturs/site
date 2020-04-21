import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { ContentWrapper } from '../..';

const StyledMain = styled.main`
  flex: 1 0 auto;
`;

function Main({ children }) {
  return (
    <ContentWrapper>
      <StyledMain>{children}</StyledMain>
    </ContentWrapper>
  );
}

Main.propTypes = {
  children: PropTypes.node
};

Main.defaultProps = {
  children: null
};

export default Main;
