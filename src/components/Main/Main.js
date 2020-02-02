import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { ContentWrapper } from '..';

const StyledMain = styled.main``;

function Main({ children }) {
  return (
    <StyledMain>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledMain>
  );
}

Main.propTypes = {
  children: PropTypes.node
};

Main.defaultProps = {
  children: null
};

export default Main;
