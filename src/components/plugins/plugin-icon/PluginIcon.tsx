import React, { FunctionComponent, useEffect, useState } from 'react';
import pluginIcon from '../../../assets/icons/jetbrains-logo.svg';
import { getIconUrl } from '../../../shared/utils/format-util/format.util';

export interface IPluginIconProps {
  iconUrl: string;
  className?: string;
}

export const PluginIcon: FunctionComponent<IPluginIconProps> = ({ iconUrl, className }) => {
  const [imgSrc, setImgSrc] = useState(pluginIcon);

  useEffect(() => {
    setImgSrc(iconUrl);
  }, [iconUrl]);

  // fallback mechanism for images
  const onImageLoadError = () => {
    setImgSrc(getIconUrl());
  };

  return <img className={className} src={imgSrc} onError={onImageLoadError} alt="plugin" />;
};
