import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../../assets/icons/logo.svg';
import styles from './header.module.scss';

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavLink to="/" className={classNames(styles.headerHeading, 'is-white-text')}>
          <div className="column">
            <img className={styles.headerLogo} src={logo} alt="logo" />
          </div>
          <div className="column">
            <h3>Marketplace</h3>
          </div>
        </NavLink>
      </div>
    </header>
  );
};
