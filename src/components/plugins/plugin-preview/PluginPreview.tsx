import React, { FunctionComponent } from 'react';
import { PluginCard } from '../plugin-card/PluginCard';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import styles from './plugin-preview.module.scss';

export const PluginPreview: FunctionComponent<{ plugin: IPlugin }> = ({ plugin }) => {
  return (
    <div className={styles.pluginPreview}>
      <div className={styles.pluginPreviewContent}>
        <PluginCard plugin={plugin} />
      </div>
    </div>
  );
};
