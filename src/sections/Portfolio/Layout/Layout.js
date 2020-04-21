import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Main, PageWrapper } from '../../..';
import { Branding, ContactLink, SocialLinks } from '..';

function Layout({ children }) {
  return (
    <PageWrapper>
      <Header>
        <Branding />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <SocialLinks />
        <ContactLink />
      </Footer>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
