import React, { FunctionComponent, ReactElement } from 'react';

export interface IconProps {
  height?: number;
  width?: number;
  fill?: string;
  stroke?: string;
  viewBox?: string;
  children?: ReactElement<Element>;
}

export const Icon: FunctionComponent<IconProps> = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = '#696B6D',
  stroke,
  children
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};
