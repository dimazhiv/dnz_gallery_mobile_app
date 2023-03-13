import React from 'react';
import DriverItem from './DriverItem';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Snapshot testing DriverItem component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <DriverItem
        dateOfBirth={'01.09.1994'}
        fullName={'Carlos Sainz'}
        nationality={'Spanish'}
        driverId={'alonso'}
        onPress={() => {}}
        onRacesPress={() => {}}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('qwe', () => {
  it('updates number when clicked', () => {
    const inst = renderer.create(
      <DriverItem
        dateOfBirth={'01.09.1994'}
        fullName={'Carlos Sainz'}
        nationality={'Spanish'}
        driverId={'sainz'}
        onPress={() => {}}
        onRacesPress={() => {}}
      />
    );
    // const button = inst.root.findByType(TouchableOpacity);
    // const text = inst.root.findAllByType(TouchableOpacity);
    // console.log('!!!!!!!!CONSOLE!!!!!!!!: ', text);
    // default state
    // expect(text.props.children).toBe(1);
    // or
    // expect(inst.root.instance.state.number).toBe(1);
    // text[1].props.onPress(); // state was updated by the button press
    // expect(text[0].props.onPress).toBeCalled();
    // expect(inst.root.props.onRacesPress).toBeCalledWith('sainz');
  });
});
