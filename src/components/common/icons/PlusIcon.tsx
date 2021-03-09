import React, { FunctionComponent } from 'react';
import { Icon, IconProps } from '../icon/Icon';

export const PlusIcon: FunctionComponent<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.6667 20V12.6667H4V10.6667L10.6667 10.6667V4H12.6667V10.6667H20V12.6667H12.6667V20H10.6667Z" />
  </Icon>
);
