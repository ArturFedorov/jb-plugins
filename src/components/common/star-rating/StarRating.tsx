import React, { FunctionComponent } from 'react';
import { StarIcon } from '../icons/StarIcon';
import styles from './start-rating.module.scss';
import { createArrayFromNumber } from '../../../shared/utils/format-util/format.util';

export interface IStarRatingProps {
  starCount?: number;
  rating: number;
}

export const StarRating: FunctionComponent<IStarRatingProps> = ({ starCount = 5, rating }) => {
  const MIN_RATING_COUNT = 0;
  const MAX_RATING_COUNT = 10;
  const STAR_ICON_WIDTH = 24;

  /**
   * Calculates ration of a star that should be covered
   * based on rating
   * @param index
   */
  const calculateClipPathRatio = (index: number) => {
    if (!rating || rating === 0) return 0;
    const itemRating = index + 1;
    if (itemRating > rating) {
      return itemRating - rating > 1 ? 0 : Math.abs(itemRating - rating - 1);
    }

    // color start 100% if star index less then rating
    return 1;
  };

  if (starCount > MAX_RATING_COUNT || starCount < MIN_RATING_COUNT) {
    throw Error(
      `Please, provide starCount value between ${MIN_RATING_COUNT} and ${MAX_RATING_COUNT}`
    );
  }

  return (
    <div className={styles.starIcon}>
      {createArrayFromNumber(starCount).map((item) => (
        <div className={styles.starIconItem} key={item}>
          <StarIcon clipPathWidth={calculateClipPathRatio(item) * STAR_ICON_WIDTH} />
        </div>
      ))}
    </div>
  );
};
