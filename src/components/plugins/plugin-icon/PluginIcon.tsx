import React, { FunctionComponent, useEffect, useState } from 'react';
import { LoaderIcon } from '../../common/icons/LoaderIcon';
import { getIconUrl } from '../../../shared/utils/format-util/format.util';

export interface IPluginIconProps {
  iconUrl: string;
  className?: string;
}

export const PluginIcon: FunctionComponent<IPluginIconProps> = ({ iconUrl, className }) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setImgSrc(iconUrl);
  }, [iconUrl]);

  // fallback mechanism for images
  const onImageLoadError = () => {
    setImgSrc(getIconUrl());
  };

  if (!imgSrc) {
    return <LoaderIcon />;
  }

  return <img className={className} src={imgSrc} onError={onImageLoadError} alt="plugin" />;
};
