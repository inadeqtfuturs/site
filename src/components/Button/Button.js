import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import tc from 'tinycolor2';
import { theme } from '..';

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
            bg: `${tc(theme.colors[props.color]).setAlpha(theme.opacity[7])}`
          },
          '&:active': {
            bg: `${tc(theme.colors[props.color]).setAlpha(theme.opacity[9])}`
          },
          '&:focus': {
            boxShadow: `0 0 0 2px ${theme.colors[props.color]}, 0 0 1px 2px ${
              theme.colors[props.color]
            }`
          }
        },
        outline: {
          color: props.color,
          border: `${theme.borders[1]} ${theme.colors[props.color]}`,
          bg: 'transparent',
          '&:hover': {
            bg: `${tc(theme.colors[props.color]).setAlpha(theme.opacity[1])}`
          },
          '&:active': {
            bg: `${tc(theme.colors[props.color]).setAlpha(theme.opacity[2])}`
          },
          '&:focus': {
            boxShadow: `0 0 0 2px ${theme.colors[props.color]}, 0 0 1px 2px ${
              theme.colors[props.color]
            }`
          }
        },
        ghost: {
          color: props.color,
          border: `${theme.borders[1]} transparent`,
          bg: `${tc(theme.colors.background).darken(5)}`,
          '&:hover': {
            bg: `${tc(theme.colors.background).darken(10)}`
          },
          '&:active': {
            bg: `${tc(theme.colors.background).darken(15)}`
          },
          '&:focus': {
            border: `${theme.borders[1]} ${theme.colors[props.color]}`
          }
        }
      }
    }),
  variant({
    prop: 'size',
    variants: {
      sm: {
        px: 2,
        py: 1
      },
      md: {
        px: 3,
        py: 2
      },
      lg: {
        px: 4,
        py: 3
      }
    }
  })
);

function Button({ children, onClick, disabled, type, color, size }) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      color={color}
      size={size}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  disabled: false,
  type: 'default',
  color: 'primary',
  size: 'md'
};

export default Button;
