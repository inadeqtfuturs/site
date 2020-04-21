import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { Footer, theme } from '../..';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  ${theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

storiesOf('Footer', module).add('example', () => (
  <Footer>
    <FooterContent>
      <Column>
        <h4>brand info</h4>
      </Column>
      <Column>
        <p>list of links</p>
        <p>list of links</p>
        <p>list of links</p>
        <p>list of links</p>
      </Column>
      <Column>
        <p>list of links</p>
        <p>list of links</p>
        <p>list of links</p>
        <p>list of links</p>
      </Column>
    </FooterContent>
  </Footer>
));
