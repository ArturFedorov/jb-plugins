import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import { StarRating } from '../../common/star-rating/StarRating';
import styles from '../plugins.module.scss';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import pluginIcon from '../../../assets/icons/pluginIcon.svg';
import dateFormat from '../../../shared/utils/date.util';
import { formatNumber } from '../../../shared/utils/format.util';

export interface IPluginCardProps {
  plugin: IPlugin;
}

export const PluginCard: FunctionComponent<IPluginCardProps> = ({ plugin }) => {
  const [cardHovered, setCardHovered] = useState<boolean>(false);

  return (
    <a
      href="/"
      className={styles.pluginCardLink}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className={styles.pluginCard}>
        <div className={styles.pluginCardHeader}>
          <img className={styles.pluginCardIcon} src={pluginIcon} alt="plugin" />
          <div className={styles.pluginCardSection}>
            <h3 className="is-lighter marginless">{plugin.name}</h3>
            <StarRating rating={plugin.rating} />
          </div>
        </div>
        <div
          className={classNames(styles.pluginCardDescription, {
            [styles.pluginCardDescriptionHovered]: cardHovered
          })}
        >
          <span>{plugin.fullDescription}</span>
        </div>
        <div
          className={classNames(styles.pluginCardFooter, {
            [styles.pluginCardFooterHovered]: cardHovered
          })}
        >
          <span className="is-caption">{formatNumber(plugin.downloads)} downloads</span>
          <span className="is-caption">{dateFormat(plugin.date)}</span>
        </div>
      </div>
    </a>
  );
};