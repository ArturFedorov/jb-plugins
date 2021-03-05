import React, { FunctionComponent } from 'react';
import { Icon, IconProps } from '../icon/Icon';

export const ArrowIcon: FunctionComponent<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M8 12L2.75 6h10.5L8 12z"></path>
  </Icon>
);
