import React, { FunctionComponent, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { StarRating } from '../../common/star-rating/StarRating';
import { PluginIcon } from '../plugin-icon/PluginIcon';
import styles from '../plugins.module.scss';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import dateFormat from '../../../shared/utils/date-util/date.util';
import { formatNumber } from '../../../shared/utils/format-util/format.util';
import pluginIcon from '../../../assets/icons/jetbrains-logo.svg';

export interface IPluginCardProps {
  plugin: IPlugin;
}

export const PluginCard: FunctionComponent<IPluginCardProps> = ({ plugin }) => {
  const formattedDownloads = useMemo(() => {
    formatNumber(plugin.downloads);
  }, [plugin.downloads]);
  const formattedDate = useMemo(() => dateFormat(plugin.date), [plugin.date]);

  return (
    <NavLink to={`/plugins/${plugin.id}`} className={styles.pluginCardLink}>
      <div className={styles.pluginCard}>
        <div className={styles.pluginCardHeader}>
          <PluginIcon iconUrl={plugin.icon || pluginIcon} className={styles.pluginCardIcon} />
          <div className={styles.pluginCardSection}>
            <h3 className="is-lighter marginless">{plugin.name}</h3>
            <StarRating rating={plugin.rating} />
          </div>
        </div>
        <div className={styles.pluginCardDescription}>
          <span>{plugin.description}</span>
        </div>
        <div className={styles.pluginCardFooter}>
          <span className="is-caption">{formattedDownloads} downloads</span>
          <span className="is-caption">{formattedDate}</span>
        </div>
      </div>
    </NavLink>
  );
};
