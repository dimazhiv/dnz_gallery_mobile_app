import React from 'react';
import { shallow } from 'enzyme';
import DriverInfo from './DriverInfo';

describe('Snapshot testing DriverInfo component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <DriverInfo
        dateOfBirth={'01.09.1994'}
        fullName={'Carlos Sainz'}
        nationality={'Spanish'}
        url={'https://wikipedia.com'}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
