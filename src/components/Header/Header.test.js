import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '..';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Header>
          <p>hello world</p>
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
