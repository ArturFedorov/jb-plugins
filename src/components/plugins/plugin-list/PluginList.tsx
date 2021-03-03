import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { PluginCard } from '../plugin-card/PluginCard';
import styles from '../plugins.module.scss';

export interface IPluginListProps {
  header?: string;
  plugins: IPlugin[];
  isCentered?: boolean;
}

export const PluginList: FunctionComponent<IPluginListProps> = ({
  plugins,
  isCentered = false,
  header = 'Most Popular'
}) => {
  return (
    <div className={styles.pluginList}>
      <h2 className={styles.pluginListHeader}>{header}</h2>
      <div
        className={classNames(styles.pluginListContent, {
          [styles.pluginListContentCentered]: isCentered
        })}
      >
        {plugins.map((plugin) => (
          <PluginCard key={plugin.id} plugin={plugin} />
        ))}
      </div>
    </div>
  );
};
