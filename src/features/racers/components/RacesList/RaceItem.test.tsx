import React from 'react';
import { shallow } from 'enzyme';
import RaceItem from './RaceItem';

describe('Snapshot testing RaceItem component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <RaceItem
        race={{
          date: '01.09.1994',
          raceName: 'Monza',
          finalPosition: 34,
          url: 'https://wikipedia.com'
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
