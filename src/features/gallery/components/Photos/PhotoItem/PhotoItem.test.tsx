import React from 'react';
import { shallow } from 'enzyme';
import PhotoItem from './PhotoItem';

describe('Snapshot testing PhotoItem component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <PhotoItem uri={'https://farm9.staticflickr.com/8187/8432423659_dd1b834ec5.jpg'} onPress={() => {}} />
    );
    expect(tree).toMatchSnapshot();
  });
});
