import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import PluginForm from './PluginForm';
import { mockStore } from '../../../setupTests';

describe('PluginForm', () => {
  const component = mount(
    <Provider store={mockStore()}>
      <PluginForm />
    </Provider>
  );

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
