import React, { FunctionComponent } from 'react';
import styles from '../plugins.module.scss';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import pluginIcon from '../../../assets/icons/pluginIcon.svg';
import dateFormat from '../../../shared/utils/date.util';
import { formatNumber } from '../../../shared/utils/format.util';

export interface IPluginCardProps {
  plugin: IPlugin;
}

export const PluginCard: FunctionComponent<IPluginCardProps> = ({ plugin }) => {
  return (
    <a href="/" className={styles.pluginCardLink}>
      <div className={styles.pluginCard}>
        <div className={styles.pluginCardHeader}>
          <img className={styles.pluginCardIcon} src={pluginIcon} alt="plugin" />
          <div className={styles.pluginCardSection}>
            <h3 className="is-lighter marginless">{plugin.name}</h3>
            <p>Star rating</p>
          </div>
        </div>
        <div className={styles.pluginCardDescription}>
          <span>{plugin.fullDescription}</span>
        </div>
        <div className={styles.pluginCardFooter}>
          <span className="is-caption">{formatNumber(plugin.downloads)} downloads</span>
          <span className="is-caption">{dateFormat(plugin.date)}</span>
        </div>
      </div>
    </a>
  );
};
