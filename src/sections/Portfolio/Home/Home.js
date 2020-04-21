import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { theme } from '../../..';

const Section = styled.section`
  flex: 1 0 auto;
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

function Home({ setPage }) {
  return (
    <Section>
      <h1>alex christie</h1>
      <h2>software engineer</h2>
      <h3>
        i'm passionate about building elegant, responsive, and speedy software
        and websites. check out some of my work.
      </h3>
    </Section>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default Home;
