import renderer from 'react-test-renderer';
import React from 'react';
import Form from './index';

it('get json and display it on screen correctly', () => {
  const tree = renderer
    .create(<Form/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});