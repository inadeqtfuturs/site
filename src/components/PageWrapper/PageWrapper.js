import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { layout } from 'styled-system';

const StyledWrapper = styled('div')(
  {
    display: 'grid',
    gridTemplateRows: 'min-content auto min-content',
    overflow: 'hidden'
  },
  layout
);

function PageWrapper({ children }) {
  return (
    <StyledWrapper minWidth={320} minHeight="100vh">
      {children}
    </StyledWrapper>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
