import React, { FunctionComponent, ReactElement, useState } from 'react';
import classNames from 'classnames';
import { InfoIcon } from '../icons/InfoIcon';
import styles from './tooltip.module.scss';

export const Tooltip: FunctionComponent<{ trigger?: ReactElement; className?: string }> = ({
  className,
  trigger = <InfoIcon width={16} height={16} fill="#CDCDCD" />,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={classNames(styles.tooltip, className)} onMouseLeave={() => setIsVisible(false)}>
      <div className={styles.tooltipTrigger} onMouseEnter={() => setIsVisible(true)}>
        {trigger}
      </div>
      <div
        className={classNames(styles.tooltipMessage, { [styles.tooltipMessageVisible]: isVisible })}
        onMouseEnter={() => setIsVisible(true)}
      >
        {children}
      </div>
    </div>
  );
};
