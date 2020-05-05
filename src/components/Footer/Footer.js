import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ContentWrapper, theme } from '../..';

const StyledFooter = styled.footer``;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  ${theme.mediaQueries.md} {
    padding: 2rem 0;
  }
`;

function Footer({ children }) {
  return (
    <StyledFooter>
      <ContentWrapper>
        <InnerWrapper>{children}</InnerWrapper>
      </ContentWrapper>
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
