import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { Input as ThemeInput, Label as ThemeLabel } from 'theme-ui';

const FieldWrapper = styled('div')(
  {
    display: 'flex'
  },
  variant({
    prop: 'row',
    variants: {
      true: {
        flexDirection: ['column', 'row', 'row', 'row', 'row'],
        alignItems: 'stretch'
      },
      false: {
        flexDirection: 'column'
      }
    }
  })
);

const HelpText = styled.small``;

const StyledInput = styled(ThemeInput)(
  variant({
    prop: 'size',
    variants: {
      sm: {
        fontSize: 1,
        p: 1,
        mb: 2
      },
      md: {
        fontSize: 2,
        p: 2,
        mb: 3
      },
      lg: {
        fontSize: 4,
        p: 2,
        mb: 4
      }
    }
  }),
  variant({
    prop: 'row',
    variants: {
      true: {
        width: 'unset',
        flexBasis: '100%'
      },
      false: {
        flexDirection: 'column'
      }
    }
  })
);

const StyledLabel = styled(ThemeLabel)(
  variant({
    prop: 'size',
    variants: {
      sm: {
        fontSize: 1,
        m: 1
      },
      md: {
        fontSize: 2,
        m: 1
      },
      lg: {
        fontSize: 3,
        m: 2
      }
    }
  }),
  variant({
    prop: 'row',
    variants: {
      true: {
        width: 'unset',
        mr: 3,
        flex: ['unset', '1 0 200px', '1 0 200px', '1 0 200px', '1 0 200px']
      },
      false: {
        flexDirection: 'column'
      }
    }
  })
);

function Input({
  disabled,
  helpText,
  label,
  name,
  placeholder,
  required,
  row,
  size
}) {
  return (
    <FieldWrapper disabled={disabled} row={row}>
      {label && (
        <StyledLabel htmlFor={name} row={row} required={required} size={size}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        name={name}
        placeholder={placeholder}
        row={row}
        size={size}
      />
      {helpText && <HelpText>{helpText}</HelpText>}
    </FieldWrapper>
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  row: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Input.defaultProps = {
  disabled: false,
  helpText: null,
  label: null,
  placeholder: null,
  required: false,
  row: false,
  size: 'md'
};

export default Input;
