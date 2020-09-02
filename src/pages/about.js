import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Layout, SEO, theme } from '..';

const IMAGE_QUERY = graphql`
  query {
    profileImage: file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Aside = styled.aside`
  margin-right: 10%;
  h1 {
    margin-bottom: ${theme.space[3]};
    :after {
      border-bottom: ${theme.borders[1]} ${theme.colors.primary};
      width: ${theme.space[5]};
      content: '';
      height: ${theme.space[3]};
      display: block;
    }
  }
  h3 {
    margin-bottom: ${theme.space[2]};
    :after {
      border-bottom: ${theme.borders[1]} ${theme.colors.primary};
      width: ${theme.space[4]};
      content: '';
      height: ${theme.space[2]};
      display: block;
    }
  }
`;

const Figure = styled.figure`
  width: 100%;
  margin: 0;
  ${theme.mediaQueries.lg} {
    width: 60%;
  }
`;

const Section = styled.section`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${theme.mediaQueries.md} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

function About() {
  return (
    <Layout>
      <SEO
        title="about"
        description="hi. i'm alex and i make things online."
        path="/about"
      />
      <Section>
        <Figure>
          <StaticQuery
            query={IMAGE_QUERY}
            render={data => (
              <Img fluid={data.profileImage.childImageSharp.fluid} />
            )}
          />
        </Figure>
        <Aside>
          <h1>alex christie</h1>
          <p>
            hi. i'm alex and i make things online. i'm trained as an educator
            and researcher, so i'm eager to learn new things and teach others.
            here's some of the technology i like to use:
          </p>
          <section>
            <h3>languages</h3>
            <p>html, css, javascript, ruby</p>
            <h3>frameworks and tools</h3>
            <p>
              react, react-native, vue, redux, graphql, express, axios, styled
              components, emotion.js, ruby on rails, next.js, gatsby, semiotic,
              d3
            </p>
          </section>
        </Aside>
      </Section>
    </Layout>
  );
}

About.propTypes = {};

export default About;
