import React, { FunctionComponent, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './drop-menu.module.scss';
import { Button } from '../button/Button';
import { DotsIcon } from '../icons/DotsIcon';
import useOutsideClick from '../../../shared/hooks/useOutsideClick';

export interface IDropMenuProps {
  items: { value: string | number; key: string; onClick: () => void }[];
}

export const DropMenu: FunctionComponent<IDropMenuProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsVisible(false);
  });

  return (
    <div ref={ref} className={styles.dropMenu}>
      <div className={styles.dropMenuTrigger}>
        <Button round onClick={() => setIsVisible(!isVisible)}>
          <DotsIcon />
        </Button>
      </div>
      <div
        className={classNames(styles.dropMenuContent, {
          [styles.dropMenuContentVisible]: isVisible
        })}
      >
        <div className={styles.dropMenuList}>
          {items.map((item) => (
            <div key={item.key} className={styles.dropMenuItem} onClick={item.onClick}>
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
