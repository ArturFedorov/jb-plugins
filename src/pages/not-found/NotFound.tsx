import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import error from '../../assets/images/error.svg';
import styles from './not-found.module.scss';

const NotFound: FunctionComponent = () => {
  return (
    <div className={styles.notFound}>
      <div className={classNames('container', styles.notFoundContent)}>
        <div className={styles.notFoundSection}>
          <img className={styles.notFoundImage} src={error} alt="error" />
        </div>
        <div className={styles.notFoundSection}>
          <h1 className={classNames('is-uppercase', styles.notFoundHeader)}>UH-OH! 404</h1>
          <p className={styles.notFoundMessage}>Unfortunately, page is not found.</p>
          <p className={classNames(styles.notFoundLink, 'is-secondary-text')}>
            Something went wrong. Please try again later or return to{' '}
            <NavLink to="/" className="is-link ">
              home
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
