import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ContentWrapper } from '../..';

const StyledHeader = styled.header``;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <ContentWrapper>
        <InnerWrapper>{children}</InnerWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node
};

Header.defaultProps = {
  children: null
};

export default Header;
