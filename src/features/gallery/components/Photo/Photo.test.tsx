import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Snapshot testing Photo component', () => {
  test('correct component view', () => {
    const tree = shallow(<Photo uri={'https://farm9.staticflickr.com/8187/8432423659_dd1b834ec5.jpg'} />);
    expect(tree).toMatchSnapshot();
  });
});
