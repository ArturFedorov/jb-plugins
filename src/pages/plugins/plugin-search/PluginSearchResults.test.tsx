import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { mockStore } from '../../../setupTests';
import PluginSearchResults from './PluginSearchResults';
import { TestUtil } from '../../../shared/utils/test.util';
import { PluginCard } from '../../../components/plugins/plugin-card/PluginCard';

describe('PluginSearchResults', () => {
  const plugins = TestUtil.mockPlugins(4);
  const history = createMemoryHistory();
  const testInputValue = 'Component 1';

  const state = {
    plugins: {
      plugins
    },
    base: {
      loading: false
    }
  };

  const store = mockStore(() => state);

  const component = mount(
    <Provider store={store}>
      <Router history={history}>
        <PluginSearchResults />
      </Router>
    </Provider>
  );

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display all cards if query is empty', () => {
    const cards = component.find(PluginCard);
    expect(cards).toHaveLength(plugins.length);
  });

  it('should update query on enter', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: testInputValue } });
    input.simulate('keypress', { key: 'Enter', target: { value: testInputValue } });
    expect(history.location.search).toEqual(`?query=${testInputValue}&limit=12`);
  });
});
