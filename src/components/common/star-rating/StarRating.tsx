import React, { FunctionComponent } from 'react';
import { StartIcon } from '../../icons/StarIcon';
import styles from './start-rating.module.scss';

export interface IStarRatingProps {
  starCount?: number;
  rating: number;
}

export const StarRating: FunctionComponent<IStarRatingProps> = ({ starCount = 5, rating }) => {
  const MIN_RATING_COUNT = 0;
  const MAX_RATING_COUNT = 10;
  const STAR_ICON_WIDTH = 24;

  const createArrayFromNumber = (arrayLength: number) => Array.from(Array(arrayLength).keys());
  const calculateClipPathRatio = (index: number) => {
    const itemRating = index + 1;
    if (itemRating > rating) {
      return itemRating - rating > 1 ? 0 : Math.abs(itemRating - rating - 1);
    }

    return 1;
  };

  if (starCount > MAX_RATING_COUNT || starCount < MIN_RATING_COUNT) {
    throw Error('Please, provide starCount value between 0 and 10');
  }

  return (
    <div className={styles.starIcon}>
      {createArrayFromNumber(starCount).map((item) => (
        <div className={styles.starIconItem} key={item}>
          <StartIcon clipPathWidth={calculateClipPathRatio(item) * STAR_ICON_WIDTH} />
        </div>
      ))}
    </div>
  );
};
