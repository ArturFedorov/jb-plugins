import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
  const onClick = jest.fn();
  const button = shallow(<Button onClick={onClick} action />);

  it('should trigger event when clicked', () => {
    button.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should have styling based on button type', () => {
    const expectedClassName = 'buttonAction';
    expect(button.hasClass(expectedClassName)).toBe(true);
  });
});
