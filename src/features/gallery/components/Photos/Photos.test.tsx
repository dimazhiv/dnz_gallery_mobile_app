import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Snapshot testing Photos component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <Photos
        uris={[
          'https://farm9.staticflickr.com/8187/8432423659_dd1b834ec5.jpg',
          'https://farm9.staticflickr.com/8450/8047948330_b0e55d455f.jpg'
        ]}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
