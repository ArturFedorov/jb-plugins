import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

export interface IModalProps {
  showModal?: boolean;
  header: string;
  message: string;
  onClose: () => void;
  children?: ReactElement<Element>[];
}

export const Modal: FunctionComponent<IModalProps> = ({
  showModal,
  header,
  message,
  onClose,
  children
}) => {
  return (
    <div>
      {showModal && (
        <div className={styles.module} onClick={onClose}>
          <div className={styles.moduleContent}>
            <h3 className={classNames(styles.moduleHeader, 'is-lighter')}>{header}</h3>
            <p className="is-gray-text">{message}</p>
            <div className={classNames(styles.loadingBar, styles.loadingBarLoading)}></div>
            <div className={styles.moduleButtons}>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
