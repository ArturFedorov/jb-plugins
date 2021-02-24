import React, { FunctionComponent } from 'react';
import { Icon, IconProps } from '../common/icon/Icon';
import { generateUniqueId } from '../../shared/utils/format.util';

export interface IStarRatingProps extends IconProps {
  clipPathWidth?: number;
}

export const StarIcon: FunctionComponent<IStarRatingProps> = (props) => {
  const uniqueId = generateUniqueId();

  return (
    <Icon {...props} fill="#CDCDCD">
      <defs>
        <clipPath id={uniqueId}>
          <rect x="0" y="0" width={props.clipPathWidth} height="24"></rect>
        </clipPath>
      </defs>
      <path d="M12.763 2.87092L15.033 9.64992H21.76C21.8644 9.64849 21.9666 9.68025 22.0518 9.74063C22.137 9.80101 22.2008 9.88688 22.2341 9.98588C22.2673 10.0849 22.2683 10.1919 22.2368 10.2914C22.2054 10.391 22.1431 10.478 22.059 10.5399L16.506 14.6829L18.606 21.1969C18.6388 21.2974 18.6388 21.4057 18.6062 21.5063C18.5736 21.6069 18.5099 21.6945 18.4244 21.7566C18.3388 21.8187 18.2358 21.8521 18.1301 21.852C18.0243 21.8518 17.9214 21.8182 17.836 21.7559L12.289 17.7459L6.74198 21.7559C6.65654 21.8178 6.55373 21.8511 6.44824 21.851C6.34274 21.8509 6.23998 21.8175 6.15465 21.7554C6.06932 21.6934 6.00579 21.606 5.97316 21.5057C5.94053 21.4054 5.94047 21.2973 5.97298 21.1969L8.07298 14.6829L2.51998 10.5399C2.43587 10.478 2.3736 10.391 2.34213 10.2914C2.31066 10.1919 2.31163 10.0849 2.34488 9.98588C2.37814 9.88688 2.44197 9.80101 2.52718 9.74063C2.61238 9.68025 2.71456 9.64849 2.81898 9.64992H9.54498L11.815 2.87092C11.8483 2.77161 11.912 2.68529 11.9971 2.62412C12.0821 2.56296 12.1842 2.53006 12.289 2.53006C12.3937 2.53006 12.4958 2.56296 12.5809 2.62412C12.6659 2.68529 12.7296 2.77161 12.763 2.87092Z" />
      <path
        clipPath={`url(#${uniqueId})`}
        fill="#167dff"
        d="M12.763 2.87092L15.033 9.64992H21.76C21.8644 9.64849 21.9666 9.68025 22.0518 9.74063C22.137 9.80101 22.2008 9.88688 22.2341 9.98588C22.2673 10.0849 22.2683 10.1919 22.2368 10.2914C22.2054 10.391 22.1431 10.478 22.059 10.5399L16.506 14.6829L18.606 21.1969C18.6388 21.2974 18.6388 21.4057 18.6062 21.5063C18.5736 21.6069 18.5099 21.6945 18.4244 21.7566C18.3388 21.8187 18.2358 21.8521 18.1301 21.852C18.0243 21.8518 17.9214 21.8182 17.836 21.7559L12.289 17.7459L6.74198 21.7559C6.65654 21.8178 6.55373 21.8511 6.44824 21.851C6.34274 21.8509 6.23998 21.8175 6.15465 21.7554C6.06932 21.6934 6.00579 21.606 5.97316 21.5057C5.94053 21.4054 5.94047 21.2973 5.97298 21.1969L8.07298 14.6829L2.51998 10.5399C2.43587 10.478 2.3736 10.391 2.34213 10.2914C2.31066 10.1919 2.31163 10.0849 2.34488 9.98588C2.37814 9.88688 2.44197 9.80101 2.52718 9.74063C2.61238 9.68025 2.71456 9.64849 2.81898 9.64992H9.54498L11.815 2.87092C11.8483 2.77161 11.912 2.68529 11.9971 2.62412C12.0821 2.56296 12.1842 2.53006 12.289 2.53006C12.3937 2.53006 12.4958 2.56296 12.5809 2.62412C12.6659 2.68529 12.7296 2.77161 12.763 2.87092Z"
      />
    </Icon>
  );
};
