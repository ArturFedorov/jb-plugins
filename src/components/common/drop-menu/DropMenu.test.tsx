import React from 'react';
import { mount } from 'enzyme';
import { DropMenu } from './DropMenu';
import styles from './drop-menu.module.scss';

describe('DropMenu', () => {
  const items = [
    { value: 'Share plugin', key: 'share', onClick: jest.fn() },
    { value: 'Delete plugin', key: 'delete', onClick: jest.fn() }
  ];

  const toCssClass = (id: string) => `.${id}`;
  const component = mount(<DropMenu items={items} />);

  it(' should be hidden by default', () => {
    const content = component.find(toCssClass(styles.dropMenuContent));
    expect(content.hasClass(styles.dropMenuContentVisible)).toEqual(false);
  });

  it(' should be visible after trigger click', () => {
    const trigger = component.find('button');
    trigger.simulate('click');

    const content = component.find(toCssClass(styles.dropMenuContent));
    expect(content.hasClass(styles.dropMenuContentVisible)).toEqual(true);
  });

  it(' should have correct number of menu items', () => {
    const trigger = component.find('button').at(0);
    trigger.simulate('click');

    const menuItems = component.find(toCssClass(styles.dropMenuItem));
    expect(menuItems).toHaveLength(items.length);
  });
});
