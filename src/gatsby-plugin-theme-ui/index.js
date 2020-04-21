import 'typeface-open-sans';
import 'typeface-noto-serif';
import { system } from 'styled-system';
import { darken } from '@theme-ui/color';
import {
  headingBase,
  fontWeights,
  baseOpacity,
  borders,
  radii,
  zIndices,
  shadows,
  getBreakPoints,
  getMediaQueries,
  getContentWidth,
  getFontSizes,
  getSpaceSizes
} from './themeHelper';

/**
 * theme variables
 */

const bp = [36, 48, 62, 75, 87.5];
const contentAtBp = [33.75, 45, 60, 71.25, 82.5];
const baseFontSize = 16;
const colors = {
  text: '#333',
  background: '#fcfcfc',
  primary: '#666',
  secondary: '#4926F6',
  accent: '#3ca251',
  muted: '#307c58'
};
const body = 'Noto Serif, Georgia';
const heading = 'Open Sans';
const monospace = 'Menlo, monospace';
const baseSpaceSize = 16;

/**
 * get theme object
 */
const breakpoints = getBreakPoints(bp);
const mediaQueries = getMediaQueries(bp);
const contentWidth = getContentWidth(contentAtBp);
const fontSizes = getFontSizes(baseFontSize);
const space = getSpaceSizes(baseSpaceSize);

/**
 * theme
 */
const theme = {
  breakpoints,
  mediaQueries,
  contentWidth,
  fonts: {
    body,
    heading,
    monospace
  },
  fontSizes,
  fontWeights,
  space,
  colors: { ...colors },
  borders,
  radii: { array: radii, button: 4 },
  opacity: { ...baseOpacity },
  zIndices,
  shadows,
  forms: {
    label: {
      fontFamily: 'heading'
    }
  },
  styles: {
    root: {
      h1: {
        ...headingBase,
        fontSize: [5, 5, 5, 6],
        marginBottom: 3
      },
      h2: {
        ...headingBase,
        fontSize: [4, 4, 4, 5],
        marginBottom: 2
      },
      h3: {
        ...headingBase,
        fontSize: [3, 3, 3, 4],
        marginBottom: 2
      },
      h4: {
        ...headingBase,
        fontSize: [2, 2, 2, 3]
      },
      h5: {
        ...headingBase,
        fontSize: 2,
        textTransform: 'uppercase'
      },
      h6: {
        ...headingBase,
        fontSize: 1,
        textTransform: 'uppercase'
      },
      p: {
        fontSize: [2, 2, 2, 3],
        lineHeight: 1.5,
        margin: 0,
        marginBottom: 3
      },
      a: {
        color: 'primary',
        '&:hover': {
          color: darken(colors.text, baseOpacity.hover)
        }
      },
      li: {
        color: 'primary'
      }
    }
  }
};

export const opacity = system({
  property: 'opacity',
  scale: 'opacity'
});

export default theme;
