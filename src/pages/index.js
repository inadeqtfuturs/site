import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Layout, SEO, theme } from '..';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-bottom: ${theme.space[3]};
    :after {
      border-bottom: ${theme.borders[1]} ${theme.colors.primary};
      width: ${theme.space[5]};
      content: '';
      height: ${theme.space[3]};
      display: block;
    }
  }
  a {
    font-size: unset;
  }
`;

function Index() {
  return (
    <Layout>
      <SEO
        title="home"
        description="hi. i'm alex and i make things online."
        path="/"
      />
      <div style={{ height: '100%', display: 'flex', flex: '1 0 auto' }}>
        <Section>
          <h1>alex christie</h1>
          <h2>software engineer</h2>
          <h3>
            i build elegant, responsive, and speedy software and websites at{' '}
            <a href="https://graveflex.com">graveflex</a>. i'm currently working
            on <a href="https://github.com/inadeqtfuturs/if-sf">if-sf</a>, a
            theme generator and component library, and building out{' '}
            <a href="https://digital-garden.dev">digital-garden.dev</a>. you can
            find some of my previous work in my{' '}
            <Link to="/portfolio">portfolio</Link>.
          </h3>
        </Section>
      </div>
    </Layout>
  );
}

export default Index;
