import React, { FunctionComponent } from 'react';
import { StartIcon } from '../../icons/StarIcon';
import styles from './start-rating.module.scss';

export interface IStarRatingProps {
  starCount?: number;
  rating: number;
}

export const StarRating: FunctionComponent<IStarRatingProps> = ({ starCount = 5 }) => {
  const createArrayFromNumber = (arrayLength: number) => Array.from(Array(arrayLength).keys());

  return (
    <div className={styles.starIcon}>
      {createArrayFromNumber(starCount).map((item) => (
        <div className={styles.starIconItem} key={item}>
          <StartIcon />
        </div>
      ))}
    </div>
  );
};
