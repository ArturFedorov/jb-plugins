import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { PlusIcon } from '../icons/PlusIcon';
import styles from './button.module.scss';

export const AddButton: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <div className={classNames(styles.button, styles.addButton)}>
      <PlusIcon width={18} height={18} />
      <span className={styles.addButtonText}>{text}</span>
    </div>
  );
};
