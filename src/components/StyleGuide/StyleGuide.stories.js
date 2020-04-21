import React from 'react';
import { Styled } from 'theme-ui';
import { storiesOf } from '@storybook/react';
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { theme } from '../..';

storiesOf('Styled Guide', module).add('default', () => (
  <>
    <Styled.h1>Style Guide</Styled.h1>
    <ColorPalette />
    <TypeScale fontFamily="heading" fontWeight={1} />
    <h1>Heading 1: Lorem ipsum</h1>
    <h2>Heading 2: Lorem ipsum</h2>
    <h3>Heading 3: Lorem ipsum</h3>
    <h4>Heading 4: Lorem ipsum</h4>
    <h5>Heading 5: Lorem ipsum</h5>
    <h6>Heading 6: Lorem ipsum</h6>
    <TypeStyle
      fontFamily="body"
      fontWeight="body"
      lineHeight="body"
      fontSize={7}
    >
      System Font (Body)
    </TypeStyle>
    <TypeStyle
      fontFamily="heading"
      fontWeight="heading"
      lineHeight="heading"
      fontSize={7}
    >
      Helvetica Neue
    </TypeStyle>
    <h3>shadows</h3>
    <div style={{ display: 'flex', padding: '1rem' }}>
      {theme.shadows.boxShadows.level.map((shadow, index) => (
        <div
          key={shadow}
          style={{
            height: '100px',
            width: '100px',
            padding: '0.5rem',
            marginRight: '1rem',
            boxShadow: `${shadow}`
          }}
        >
          <p>level: {index}</p>
        </div>
      ))}
    </div>
  </>
));
