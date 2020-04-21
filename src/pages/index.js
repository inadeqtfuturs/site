import React from 'react';
import styled from '@emotion/styled';
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
            i'm passionate about building elegant, responsive, and speedy
            software and websites. check out some of my work.
          </h3>
        </Section>
      </div>
    </Layout>
  );
}

export default Index;
