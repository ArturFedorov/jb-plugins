import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';

describe('Input', () => {
  const onChange = jest.fn();
  const onKeyEnter = jest.fn();
  const testInputValue = 'test';

  it('should emit value on change', () => {
    const component = shallow(<Input onChange={onChange} />);
    const input = component.find('input');

    input.simulate('change', { target: { value: testInputValue } });
    expect(onChange).toHaveBeenCalledWith(testInputValue);
  });

  it('should has error class if input is with error', () => {
    const component = shallow(<Input onChange={onChange} withError={true} />);
    const expectedClassName = 'error';
    expect(component.hasClass(expectedClassName)).toBe(true);
  });

  describe('Input key down', () => {
    const component = shallow(<Input onChange={onChange} onKeyEnter={onKeyEnter} />);
    const input = component.find('input');

    it('should trigger event on enter pressed', () => {
      input.simulate('keypress', { key: 'Enter', target: { value: testInputValue } });
      expect(onKeyEnter).toHaveBeenCalledWith(testInputValue);
    });

    it('should not be called if other key then Enter pressed', () => {
      input.simulate('keypress', { key: 'l', target: { value: testInputValue } });
      expect(onKeyEnter).toHaveBeenCalledTimes(0);
    });
  });
});
