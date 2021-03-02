import React, { FunctionComponent } from 'react';
import { Icon, IconProps } from '../icon/Icon';

export const CircledCross: FunctionComponent<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M14.75 8A6.75 6.75 0 1 1 8 1.25 6.75 6.75 0 0 1 14.75 8zm-3.176-2.514l-1.06-1.06L8 6.939 5.477 4.416l-1.061 1.06L6.939 8l-2.442 2.443 1.06 1.06L8 9.061l2.466 2.466 1.06-1.06L9.062 8z"></path>
  </Icon>
);
