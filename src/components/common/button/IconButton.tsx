import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import { PlusIcon } from '../icons/PlusIcon';
import styles from './button.module.scss';

export const IconButton: FunctionComponent<{ text: string; icon?: ReactElement }> = ({
  text,
  icon = <PlusIcon width={18} height={18} />
}) => {
  return (
    <div className={classNames(styles.button, styles.addButton)}>
      {icon}
      <span className={styles.addButtonText}>{text}</span>
    </div>
  );
};
