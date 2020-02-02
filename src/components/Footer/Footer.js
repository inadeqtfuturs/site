import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ContentWrapper } from '..';

const StyledFooter = styled.footer``;

function Footer({ children }) {
  return (
    <StyledFooter>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledFooter>
  );
}

Footer.propTypes = {
  children: PropTypes.node
};

Footer.defaultProps = {
  children: null
};

export default Footer;
