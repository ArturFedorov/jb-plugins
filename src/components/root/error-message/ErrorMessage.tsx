import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { CircledCross } from '../../common/icons/CircledCross';
import { CrossIcon } from '../../common/icons/CrossIcon';
import styles from './error-message.module.scss';
import { RootState } from '../../../store/rootReducer';
import { getError } from '../../../store/features/base/selectors';
import { IError } from '../../../shared/interfaces/api/IError';
import { setError } from '../../../store/features/base';

export interface IErrorMessageProps {
  error?: IError;
  className?: string;
  setErrorConnect: ActionCreatorWithPayload<IError | undefined, string>;
}

const ErrorMessage: FunctionComponent<IErrorMessageProps> = ({
  error,
  className,
  setErrorConnect
}) => {
  return (
    <div>
      <div
        className={classNames(styles.errorMessage, className, {
          [styles.errorMessageHidden]: !error
        })}
      >
        <div className={styles.errorMessageIcon}>
          <CircledCross fill="#fb2046" />
        </div>
        <div className={styles.errorMessageContent}>
          <h5 className={classNames(styles.errorMessageHeader, 'is-lighter is-white-text')}>
            Error {error && error.status}
          </h5>
          <span className={classNames(styles.errorMessageText, 'is-gray-text is-caption')}>
            {error && error.text}
          </span>
        </div>
        <div className={styles.errorMessageClose}>
          <span className={styles.errorMessageLink} onClick={() => setErrorConnect(undefined)}>
            <CrossIcon fill="#ffffff" />
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  error: getError(state.base)
});

const mapDispatchToProps = {
  setErrorConnect: setError
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
