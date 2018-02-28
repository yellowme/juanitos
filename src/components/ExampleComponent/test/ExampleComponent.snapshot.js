import React from 'react';
import { shallow } from 'enzyme';
import ExampleComponent from '../ExampleComponent';

describe('ExampleComponent snapshot', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<ExampleComponent name="juanito" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('it renders correctly with onButtonClick prop', () => {
    const wrapper = shallow(
      <ExampleComponent name="juanito" onButtonClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
