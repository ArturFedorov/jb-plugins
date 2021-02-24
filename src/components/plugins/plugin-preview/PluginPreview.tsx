import React, { FunctionComponent } from 'react';
import { PluginCard } from '../plugin-card/PluginCard';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export const PluginPreview: FunctionComponent = () => {
  const plugin: IPlugin = {
    id: '',
    downloads: 0,
    rating: 0,
    date: new Date().toString(),
    name: '',
    fullDescription: '',
    description: '',
    author: '',
    icon: ''
  };
  return (
    <div>
      <PluginCard plugin={plugin} />
    </div>
  );
};
