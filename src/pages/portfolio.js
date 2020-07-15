import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { darken } from '@theme-ui/color';
import { Layout, SEO, theme } from '..';

export const PROJECTS = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "portfolio" } } }) {
      edges {
        node {
          frontmatter {
            title
            description
            tech
            code
            link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Figure = styled.figure`
  width: 100%;
  margin: 0;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  border: 1px solid ${theme.colors.text};
  padding: ${theme.space[2]} ${theme.space[3]};
  cursor: pointer;
  &:hover {
    background-color: ${darken(theme.colors.background, theme.opacity.hover)};
  }
  &:active {
    background-color: ${darken(
      theme.colors.background,
      theme.opacity.selected
    )};
  }
  &:focus {
    box-shadow: ${theme.shadows.boxShadows.level[1]};
    outline: none;
  }
  svg {
    stroke: ${theme.colors.text};
  }
`;

const Project = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  left: 0;
  right: 0;
  @media screen and (max-width: 20rem) {
    top: 0;
  }
  ${theme.mediaQueries.md} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  aside {
    flex-basis: 45%;
  }
`;

const Section = styled.section`
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  ${theme.mediaQueries.md} {
    justify-content: center;
  }
  h2 {
    margin-bottom: ${theme.space[2]};
    :after {
      border-bottom: ${theme.borders[1]} ${theme.colors.primary};
      width: ${theme.space[5]};
      content: '';
      height: ${theme.space[2]};
      display: block;
    }
    ${theme.mediaQueries.md} {
      margin-bottom: ${theme.space[3]};
      :after {
        height: ${theme.space[3]};
      }
    }
  }
  h4 {
    margin-bottom: ${theme.space[1]};
    :after {
      border-bottom: ${theme.borders[1]} ${theme.colors.primary};
      width: ${theme.space[4]};
      content: '';
      height: ${theme.space[1]};
      display: block;
    }
    ${theme.mediaQueries.md} {
      margin-bottom: ${theme.space[2]};
      :after {
        height: ${theme.space[2]};
      }
    }
  }
`;

const SliderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-bottom: 2rem;
  @media screen and (max-width: 20rem) {
    margin: 0;
  }
`;

const variants = {
  enter: {
    opacity: 0
  },
  center: {
    zIndex: 1,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    opacity: 0
  }
};

function Portfolio({ data }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const projectsArray = data.allMarkdownRemark.edges;
  const currentProject = projectsArray[projectIndex].node.frontmatter;
  function next() {
    if (projectIndex === projectsArray.length - 1) {
      return setProjectIndex(0);
    }
    return setProjectIndex(projectIndex + 1);
  }
  function prev() {
    if (projectIndex === 0) {
      return setProjectIndex(projectsArray.length - 1);
    }
    return setProjectIndex(projectIndex - 1);
  }
  return (
    <Layout>
      <SEO
        title="portfolio"
        description="hi. i'm alex and this is some of the stuff i've made."
        path="/portfolio"
      />
      <Section>
        <AnimatePresence>
          <Project
            key={projectIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Figure>
              <Img fluid={currentProject.image.childImageSharp.fluid} />
            </Figure>
            <aside>
              <h2>{currentProject.title}</h2>
              <p>{currentProject.description}</p>
              <h4>tech</h4>
              <p>{currentProject.tech}</p>
              {currentProject.link && <a href={currentProject.link}>live</a>}
              {currentProject.code && (
                <>
                  <span> // </span>
                  <a href={currentProject.code}>code</a>
                </>
              )}
            </aside>
          </Project>
        </AnimatePresence>
        <SliderNav>
          <NavButton type="button" onClick={() => prev()}>
            <FiChevronLeft size={18} />
          </NavButton>
          <NavButton type="button" onClick={() => next()}>
            <FiChevronRight size={18} />
          </NavButton>
        </SliderNav>
      </Section>
    </Layout>
  );
}

Portfolio.propTypes = {
  data: PropTypes.object.isRequired
};

export default Portfolio;
