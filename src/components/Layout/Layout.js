import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer, Main, IfMenu, PageWrapper } from '../..';
import { SocialLinks, ContactLink } from '../../sections/Portfolio';

function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              label
              to
            }
          }
        }
      }
    `
  );

  return (
    <PageWrapper>
      <Header>
        <IfMenu menuItems={site.siteMetadata.menu} />
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
