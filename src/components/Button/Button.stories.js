import React from 'react';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Button } from '../..';

const sizes = ['sm', 'md', 'lg'];
const colors = ['primary', 'muted'];

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  button {
    margin-right: 2rem;
  }
`;

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>test</Button>)
  .add('default buttons', () => (
    <div>
      {sizes.map(size => (
        <ButtonWrapper key={size}>
          {colors.map(color => (
            <Button
              key={color}
              color={color}
              size={size}
              onClick={action('clicked')}
            >
              {color}
            </Button>
          ))}
        </ButtonWrapper>
      ))}
    </div>
  ))
  .add('outline buttons', () => (
    <div>
      {sizes.map(size => (
        <ButtonWrapper key={size}>
          {colors.map(color => (
            <Button
              key={color}
              color={color}
              type="outline"
              size={size}
              onClick={action('clicked')}
            >
              {color}
            </Button>
          ))}
        </ButtonWrapper>
      ))}
    </div>
  ))
  .add('link buttons', () => (
    <div>
      {sizes.map(size => (
        <ButtonWrapper key={size}>
          {colors.map(color => (
            <Button
              key={color}
              color={color}
              type="ghost"
              size={size}
              onClick={action('clicked')}
            >
              {color}
            </Button>
          ))}
        </ButtonWrapper>
      ))}
    </div>
  ));
