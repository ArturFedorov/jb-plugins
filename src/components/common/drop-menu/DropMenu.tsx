import React, { FunctionComponent } from 'react';
import styles from './drop-menu.module.scss';
import { Button } from '../button/Button';
import { DotsIcon } from '../icons/DotsIcon';

export const DropMenu: FunctionComponent = () => {
  return (
    <div className={styles.dropMenu}>
      <div className={styles.dropMenuTrigger}>
        <Button round>
          <DotsIcon />
        </Button>
      </div>
      <div>
        <ul className={styles.dropMenuContent}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};
