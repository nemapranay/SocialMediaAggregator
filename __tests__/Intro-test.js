import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/Intro';

jest.mock('react-native');
test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});