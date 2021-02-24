import React from 'react';
import { shallow } from 'enzyme';
import { PluginCard } from './PluginCard';
import { TestUtil } from '../../../shared/utils/test.util';

describe('Plugin card', () => {
  const plugin = TestUtil.mockPlugin(1);

  it('should match a snapshot', () => {
    const component = shallow(<PluginCard plugin={plugin} />);
    expect(component).toMatchSnapshot();
  });
});
