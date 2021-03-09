import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import styles from './footer.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <NavLink to="/">
            <img className={styles.footerLogo} src={logo} alt="logo" />
          </NavLink>
          <div>
            <p className={classNames(styles.footerText, 'is-caption is-secondary-text')}>
              Copyright © 2000–2021 JetBrains s.r.o.
            </p>
            <p className={classNames(styles.footerText, 'is-caption is-secondary-text')}>
              Developed with drive and{' '}
              <a
                className="is-link"
                href="https://www.jetbrains.com/idea/"
                target="_blank"
                rel="noreferrer"
              >
                IntelliJ IDEA
              </a>
            </p>
            <p className={classNames(styles.footerText, 'is-caption is-gray-text')}>Build #16504</p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRow}>
            <a
              href="mailto:plugins-admin@jetbrains.com"
              target="_blank"
              className={classNames('is-link is-caption', styles.footerLink)}
              rel="noreferrer"
            >
              Feedback
            </a>
            <a
              href="https://twitter.com/JBPlatform"
              target="_blank"
              className={classNames('is-link is-caption', styles.footerLink)}
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://blog.jetbrains.com/platform"
              target="_blank"
              className={classNames('is-link is-caption', styles.footerLink)}
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
          <div className={styles.footerRow}>
            <a
              href="https://plugins.jetbrains.com/legal/ru-terms-of-use"
              target="_blank"
              className={classNames('is-link is-caption', styles.footerLink)}
              rel="noreferrer"
            >
              Terms of use
            </a>
            <a
              href="https://plugins.jetbrains.com/legal"
              target="_blank"
              className={classNames('is-link is-caption', styles.footerLink)}
              rel="noreferrer"
            >
              Legal, Privacy and Security
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
