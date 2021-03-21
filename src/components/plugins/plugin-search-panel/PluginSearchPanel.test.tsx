import React from 'react';
import { shallow } from 'enzyme';
import { PluginSearchPanel } from './PluginSearchPanel';

describe('PluginsSearchPanel', () => {
  const component = shallow(<PluginSearchPanel placeholder={'test'} />);

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
