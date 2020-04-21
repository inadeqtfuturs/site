import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header, Menu } from '../..';

const defaultItems = [
  { label: 'home', to: '/' },
  {
    label: 'with sub menu',
    to: '/menu-with-subs',
    subItems: [
      { label: 'sub one', to: '/sub-1' },
      { label: 'sub two', to: '/sub-2' },
      { label: 'sub three', to: '/sub-3' }
    ]
  },
  {
    label: 'single item',
    to: '/single-item'
  }
];

storiesOf('Header', module).add('example', () => (
  <Header>
    <h4>if</h4>
    <Menu menuItems={defaultItems} />
  </Header>
));
