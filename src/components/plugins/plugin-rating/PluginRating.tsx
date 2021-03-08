import React, { FunctionComponent } from 'react';
import styles from './plugin-rating.module.scss';

export const PluginRating: FunctionComponent<{ rating: number }> = ({ rating }) => {
  const toFixed = (ratingScore: number) => {
    if (!ratingScore) return 0;
    return ratingScore.toFixed(1);
  };

  return (
    <div className={styles.pluginRating}>
      <div className={styles.pluginRatingText}>
        <p className={styles.pluginRatingNumber}>{toFixed(rating)}</p>
        <span className={styles.pluginRatingCaption}>out of 5</span>
      </div>
    </div>
  );
};
