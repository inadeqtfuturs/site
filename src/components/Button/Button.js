import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { alpha, darken } from '@theme-ui/color';
import { theme } from '../..';

const StyledButton = styled('button')(
  {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radii.button
  },
  props =>
    variant({
      prop: 'type',
      variants: {
        default: {
          color: 'background',
          bg: props.color,
          border: 0,
          '&:hover': {
            bg: darken(theme.colors[props.color], theme.opacity.hover)
          },
          '&:active': {
            bg: darken(theme.colors[props.color], theme.opacity.selected)
          },
          '&:focus': {
            boxShadow: `0 0 4px 1px ${theme.colors[props.color]}`,
            outline: 'none'
          }
        },
        outline: {
          color: props.color,
          border: `${theme.borders[1]} ${theme.colors[props.color]}`,
          bg: 'transparent',
          '&:hover': {
            bg: alpha(theme.colors[props.color], 0.1)
          },
          '&:active': {
            bg: alpha(theme.colors[props.color], 0.2)
          },
          '&:focus': {
            boxShadow: `0 0 8px 1px ${theme.colors[props.color]}`,
            outline: 'none'
          }
        },
        ghost: {
          color: props.color,
          border: `${theme.borders[1]} transparent`,
          bg: darken(theme.colors.background, theme.opacity.hover),
          '&:hover': {
            bg: darken(theme.colors.background, theme.opacity.focused)
          },
          '&:active': {
            bg: darken(theme.colors.background, 0.15)
          },
          '&:focus': {
            border: `${theme.borders[1]} ${theme.colors[props.color]}`,
            outline: 'none'
          }
        }
      }
    }),
  variant({
    prop: 'size',
    variants: {
      sm: {
        px: 2,
        py: 1,
        fontSize: 0
      },
      md: {
        px: 3,
        py: 2,
        fontSize: 1
      },
      lg: {
        px: 4,
        py: 3,
        fontSize: 2
      }
    }
  })
);

function Button({ children, color, disabled, onClick, size, type }) {
  return (
    <StyledButton
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * content of button
   */
  children: PropTypes.string,
  /**
   * takes one of 'primary', 'secondary', 'accent', 'muted'. corresponds
   * to theme colors
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'muted']),
  /**
   * if `true`, button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * function called on click
   */
  onClick: PropTypes.func,
  /**
   * takes one of 'sm', 'md', 'lg'
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * takes one of 'default', 'outline', 'ghost'
   */
  type: PropTypes.oneOf(['default', 'outline', 'ghost'])
};

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  onClick: () => {},
  size: 'md',
  type: 'default'
};

export default Button;
