import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { layout, space } from 'styled-system';
import { theme } from '../..';

const Wrapper = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  layout,
  space
);

function ContentWrapper({ children }) {
  return (
    <Wrapper mx={[3, 'auto']} width={theme.contentWidth} height="100%">
      {children}
    </Wrapper>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node
};

ContentWrapper.defaultProps = {
  children: null
};

export default ContentWrapper;
