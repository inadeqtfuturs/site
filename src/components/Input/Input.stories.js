import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../..';

const sizes = ['sm', 'md', 'lg'];

storiesOf('Input', module)
  .add('default', () => <Input label="Test" name="test" />)
  .add('size', () => (
    <div>
      {sizes.map(size => (
        <Input
          size={size}
          name={`${size}Label`}
          label={`${size} Label`}
          key={size}
        />
      ))}
    </div>
  ))
  .add('rows', () => (
    <div>
      {sizes.map(size => (
        <Input
          size={size}
          name={`${size}Label`}
          label={`${size} Label Even Longer`}
          key={size}
          row
          required
        />
      ))}
    </div>
  ));
