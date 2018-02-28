import React from 'react';
import { shallow } from 'enzyme/build/index';
import ExampleComponent from '../ExampleComponent';

describe('ExampleComponent', () => {
  test('when the button is clicked the onButtonClick prop is called', () => {
    // Given
    const onButtonClickProp = jest.fn();
    const wrapper = shallow(
      <ExampleComponent name="juanito" onButtonClick={onButtonClickProp} />
    );
    // When
    wrapper.find('button').simulate('click');
    // Then
    expect(onButtonClickProp).toBeCalled();
  });
});
