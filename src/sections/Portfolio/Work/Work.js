import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { darken } from '@theme-ui/color';
import { theme } from '../../..';

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  border: 1px solid ${theme.colors.text};
  padding: ${theme.space[2]} ${theme.space[3]};
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

const Project = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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

const Figure = styled.figure`
  width: 100%;
  margin: 0;
`;

const Section = styled.section`
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${theme.mediaQueries.md} {
    justify-content: center;
  }
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
  h4 {
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

const SliderNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

function Work({ projects }) {
  const [projectIndex, setProjectIndex] = useState(2);
  const projectsArray = projects.allMarkdownRemark.edges;
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
    <Section>
      <Project>
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
      <SliderNav>
        <NavButton type="button" onClick={() => prev()}>
          <FiChevronLeft size={18} />
        </NavButton>
        <NavButton type="button" onClick={() => next()}>
          <FiChevronRight size={18} />
        </NavButton>
      </SliderNav>
    </Section>
  );
}

Work.propTypes = {
  projects: PropTypes.object.isRequired
};

export default Work;
