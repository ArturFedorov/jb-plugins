import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../common/button/Button';
import logo from '../../../assets/icons/logo.svg';
import styles from './about-header.module.scss';

export const AboutHeader: FunctionComponent = () => {
  return (
    <div className={styles.aboutHeader}>
      <NavLink to="/">
        <img className={styles.aboutHeaderLogo} src={logo} alt="logo" />
      </NavLink>
      <nav className={styles.aboutHeaderNavigation}>
        <a href="#folder" className={styles.aboutHeaderLink}>
          Folder structure
        </a>
        <a href="#state" className={styles.aboutHeaderLink}>
          State management
        </a>
        <a href="#ci" className={styles.aboutHeaderLink}>
          CI/CD
        </a>
        <a href="#styling" className={styles.aboutHeaderLink}>
          Styling
        </a>
        <a href="#webpack" className={styles.aboutHeaderLink}>
          Webpack
        </a>
        <div className={styles.aboutHeaderAction}>
          <Button action>Download PDF</Button>
        </div>
      </nav>
    </div>
  );
};
