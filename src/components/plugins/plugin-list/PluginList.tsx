import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { PluginCard } from '../plugin-card/PluginCard';
import { PluginPlaceholder } from '../plugin-placeholder/PluginPlaceholder';
import styles from '../plugins.module.scss';
import { createArrayFromNumber } from '../../../shared/utils/format-util/format.util';

export interface IPluginListProps {
  header?: string;
  plugins: IPlugin[];
  isCentered?: boolean;
  isLoading?: boolean;
}

export const PluginList: FunctionComponent<IPluginListProps> = ({
  plugins,
  isCentered = false,
  isLoading = false,
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
        {isLoading && createArrayFromNumber(6).map((item) => <PluginPlaceholder key={item} />)}
        {!isLoading && plugins.map((plugin) => <PluginCard key={plugin.id} plugin={plugin} />)}

        {!isLoading && plugins.length === 0 && (
          <div className={classNames(styles.pluginListEmpty, 'is-secondary-text')}>
            <span>Seems that we don’t have any proper plugins for you here</span>
            <span> ¯\_(ツ)_/¯</span>
          </div>
        )}
      </div>
    </div>
  );
};
