import { system } from 'styled-system';

// defaults
const breakpoints = ['40rem', '50rem', '62rem', '80rem'];
const heading = {
  fontFamily: 'heading',
  margin: 0,
  fontWeight: 400
};

// theme
const theme = {
  breakpoints: ['40rem ', '50rem', '62rem', '80rem'],
  mediaQueries: {
    xs: `@media screen and (max-width: ${breakpoints[0]})`,
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`
  },
  contentWidth: [null, '32rem', '42rem', '52rem', '68rem'],
  fonts: {
    body: 'Georgia',
    heading: 'Helvetica Neue',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [8, 12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 300, 500, 700, 900],
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radii: { array: [0, 2, 4, 8, 16, 9999, '100%'], button: 4 },
  colors: {
    text: '#f7f7f7',
    background: '#464452',
    primary: '#28B4AD',
    secondary: '#4926F6',
    accent: '#3ca251',
    muted: '#307c58'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  hover: [0, 0.2, 0.4, 0.6, 0.8, 1],
  opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  zIndices: [-666, -300, -100, 0, 100, 300, 666],
  styles: {
    root: {
      h1: {
        ...heading,
        fontSize: 6
      },
      h2: {
        ...heading,
        fontSize: 5
      },
      h3: {
        ...heading,
        fontSize: 4
      },
      h4: {
        ...heading,
        fontSize: 3
      },
      h5: {
        ...heading,
        fontSize: 2,
        textTransform: 'uppercase'
      },
      h6: {
        ...heading,
        fontSize: 1,
        textTransform: 'uppercase'
      },
      p: {
        margin: 0,
        marginBottom: 3
      }
    }
  }
};

export const opacity = system({
  property: 'opacity',
  scale: 'opacity'
});

export default theme;
