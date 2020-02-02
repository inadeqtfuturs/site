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
    borderRadius: theme.radii[2]
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
            bg: `${tc(theme.colors[props.color]).setAlpha(theme.opacity[4])}`
          }
        },
        outline: {
          color: props.color,
          border: `${theme.borders[1]} ${theme.colors[props.color]}`,
          bg: 'transparent',
          '&:hover': {
            bg: `${tc(theme.colors[props.color]).setAlpha(theme.opacity[1])}`
          }
        }
      }
    }),
  variant({
    prop: 'size',
    variants: {
      sm: {
        px: 1,
        py: 1
      },
      md: {
        px: 2,
        py: 2
      },
      lg: {
        px: 4,
        py: 2
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
