import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from './Panel';

describe('Panel', () => {
  it('should match a snapshot', () => {
    const component = shallow(<Panel />);
    expect(component).toMatchSnapshot();
  });
});
