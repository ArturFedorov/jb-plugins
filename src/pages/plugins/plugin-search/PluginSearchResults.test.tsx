import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import { mockStore } from '../../../setupTests';
import PluginSearchResults from './PluginSearchResults';
import { TestUtil } from '../../../shared/utils/test.util';

describe('PluginSearchResults', () => {
  const plugins = TestUtil.mockPlugins(4);
  const history = createMemoryHistory();
  const testInputValue = 'test';
  const DEFAULT_PAGE_SIZE = 12;

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

  it('should search plugins based on query', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: testInputValue } });
    input.simulate('keypress', { key: 'Enter', target: { value: testInputValue } });
    const input2 = component.find('input');

    const dispatchSpy = jest.spyOn(store, 'dispatch');
    console.log(store.getActions());
    expect(dispatchSpy).toHaveBeenCalledWith(1);
  });
});
