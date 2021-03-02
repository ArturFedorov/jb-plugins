import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '../../common/button/Button';
import logo from '../../../assets/icons/logo.svg';
import styles from './header.module.scss';
import { ButtonType } from '../../common/button/ButtonType';
import { Routes } from '../../../routes';

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.headerContent)}>
        <div className={styles.headerSection}>
          <NavLink to="/" className={classNames(styles.headerHeading, 'is-white-text')}>
            <div className="column">
              <img className={styles.headerLogo} src={logo} alt="logo" />
            </div>
            <div className="column">
              <h3>Marketplace</h3>
            </div>
          </NavLink>
        </div>
        <div className={styles.headerSection}>
          <NavLink to={Routes.PLUGIN_ADD}>
            <Button type={ButtonType.ACTION}>Add plugin</Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
