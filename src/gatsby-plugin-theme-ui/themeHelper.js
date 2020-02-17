/**
 * theme constants
 */

const fontSizeArray = [0.5, 0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4];
const spaceArray = [0, 0.25, 0.5, 1, 2, 4, 8];

/**
 * theme defaults
 * use in conjunction w/ named overrides
 */

export const headingBase = {
  fontFamily: 'heading',
  margin: 0,
  fontWeight: 400
};

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

export const baseOpacity = {
  hover: 4,
  selected: 8,
  disabled: 38,
  focused: 12
};

export const borders = [0, '1px solid', '2px solid', '4px solid'];

export const radii = [0, 2, 4, 8, 16, 9999, '100%'];

export const zIndices = [-666, -300, -100, 0, 100, 300, 666];

/**
 * helper functions
 */

export function convertToRem(number) {
  return `${number / 16}rem`;
}

export function getBreakPoints(bp) {
  return bp.map(p => `${p}rem`);
}

export function getMediaQueries(bp) {
  return {
    xs: `@media screen and (max-width: ${bp[0]}rem)`,
    sm: `@media screen and (min-width: ${bp[0]}rem)`,
    md: `@media screen and (min-width: ${bp[1]}rem)`,
    lg: `@media screen and (min-width: ${bp[2]}rem)`,
    xl: `@media screen and (min-width: ${bp[3]}rem)`
  };
}

export function getContentWidth(bp) {
  return [null, `${bp[0]}rem`, `${bp[1]}rem`, `${bp[2]}rem`, `${bp[3]}rem`];
}

export function getFontSizes(base) {
  return fontSizeArray.map(value => convertToRem(base * value));
}

export function getSpaceSizes(base) {
  return spaceArray.map(value => convertToRem(base * value));
}
