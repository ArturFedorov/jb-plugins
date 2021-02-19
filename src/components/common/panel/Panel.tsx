import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './panel.module.scss';

export interface IPanelProps {
  title?: string;
  children?: ReactElement<Element>;
}

export const Panel: FunctionComponent<IPanelProps> = ({
  title = 'Explore plugins for JetBrains Products',
  children
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.panelSection}>
        <h1 className={classNames(styles.panelHeader, 'is-white-text')}>{title}</h1>
      </div>
      <div className={styles.panelSection}>{children}</div>
    </div>
  );
};
