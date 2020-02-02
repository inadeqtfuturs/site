import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Branding, Header, Footer, Main, Menu, PageWrapper } from '..';

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
        <Branding />
        <Menu menuItems={site.siteMetadata.menu} />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
