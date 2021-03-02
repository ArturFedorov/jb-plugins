import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { LoadingState } from '../../../shared/enums/LoadingState';
import styles from './loading-bar.module.scss';

export const LoadingBar: FunctionComponent<{ loadingState?: string }> = ({
  loadingState = LoadingState.LOADING
}) => {
  const styleStateMapping: { [key: string]: string } = {
    [LoadingState.SUCCESS]: styles.success,
    [LoadingState.ERROR]: styles.error
  };

  return (
    <div
      className={classNames(styles.loadingBar, styleStateMapping[loadingState], {
        [styles.loadingBarLoading]: loadingState === LoadingState.LOADING
      })}
    />
  );
};
