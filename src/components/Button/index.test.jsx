import renderer from 'react-test-renderer';
import React from 'react';
import Button from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});