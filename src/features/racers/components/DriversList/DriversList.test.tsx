import React from 'react';
import { shallow } from 'enzyme';
import DriversList from './DriversList';

describe('Snapshot testing DriversList component', () => {
  test('correct component view', () => {
    const tree = shallow(<DriversList driversIds={['alonso', 'senna']} />);
    expect(tree).toMatchSnapshot();
  });
});
