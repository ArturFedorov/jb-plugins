import React from 'react';
import { shallow } from 'enzyme';
import { DEFAULT_NUMBER_OF_PLACEHOLDERS, IPluginListProps, PluginList } from './PluginList';
import { PluginPlaceholder } from '../plugin-placeholder/PluginPlaceholder';
import { PluginCard } from '../plugin-card/PluginCard';
import { TestUtil } from '../../../shared/utils/test.util';

describe('PluginList', () => {
  const plugins = TestUtil.mockPlugins(3);
  const baseProps: IPluginListProps = {
    plugins,
    isLoading: false
  };

  it('should match the snapshot', () => {
    const component = shallow(<PluginList {...baseProps} />);
    expect(component).toMatchSnapshot();
  });

  it('should show placeholders while loading', () => {
    const component = shallow(<PluginList {...baseProps} isLoading={true} />);
    const placeholders = component.find(PluginPlaceholder);

    expect(placeholders).toHaveLength(DEFAULT_NUMBER_OF_PLACEHOLDERS);
  });

  it('should show plugins instead of placeholders after loading', () => {
    const component = shallow(<PluginList {...baseProps} />);
    const placeholders = component.find(PluginPlaceholder);
    const pluginCards = component.find(PluginCard);

    expect(placeholders).toHaveLength(0);
    expect(pluginCards).toHaveLength(plugins.length);
  });

  it('should warn user if loading is finished and no components found', () => {
    const component = shallow(<PluginList plugins={[]} isLoading={false} />);
    const warning = component.find('.is-secondary-text');
    const placeholders = component.find(PluginPlaceholder);
    const pluginCards = component.find(PluginCard);

    expect(warning.text()).toContain('Seems that we don’t have any proper plugins for you here');
    expect(placeholders).toHaveLength(0);
    expect(pluginCards).toHaveLength(0);
  });
});
