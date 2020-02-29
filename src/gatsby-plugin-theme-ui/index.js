import { system } from 'styled-system';
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
const bp = [20, 36, 62, 90];
const contentAtBp = [18, 32, 54, 87.5];
const baseFontSize = 16;
const colors = {
  text: '#f7f7f7',
  background: '#464452',
  primary: '#28B4AD',
  secondary: '#4926F6',
  accent: '#3ca251',
  muted: '#307c58'
};
const body = 'Georgia';
const heading = 'Helvetica Neue';
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
        fontSize: 6
      },
      h2: {
        ...headingBase,
        fontSize: 5
      },
      h3: {
        ...headingBase,
        fontSize: 4
      },
      h4: {
        ...headingBase,
        fontSize: 3
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
