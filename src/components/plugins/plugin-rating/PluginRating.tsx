import React, { FunctionComponent } from 'react';
import styles from './plugin-rating.module.scss';

export const PluginRating: FunctionComponent<{ rating: number }> = ({ rating }) => {
  return (
    <div className={styles.pluginRating}>
      <div className={styles.pluginRatingText}>
        <p className={styles.pluginRatingNumber}>{rating.toFixed(1)}</p>
        <span className={styles.pluginRatingCaption}>out of 5</span>
      </div>
    </div>
  );
};
