import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { CircledCross } from '../../common/icons/CircledCross';
import { Cross } from '../../common/icons/Cross';
import styles from './error-message.module.scss';
import { RootState } from '../../../store/rootReducer';
import { getError } from '../../../store/features/base/selectors';
import { IError } from '../../../shared/interfaces/api/IError';

export interface IErrorMessageProps {
  error?: IError;
  className?: string;
}

const ErrorMessage: FunctionComponent<IErrorMessageProps> = ({ error, className }) => {
  return (
    <div>
      {error && (
        <div className={classNames(styles.errorMessage, className)}>
          <div className={styles.errorMessageIcon}>
            <CircledCross fill="#fb2046" />
          </div>
          <div className={styles.errorMessageContent}>
            <h5 className={classNames(styles.errorMessageHeader, 'is-lighter is-white-text')}>
              Error {error.status}
            </h5>
            <span className={classNames(styles.errorMessageText, 'is-gray-text is-caption')}>
              {error.text}
            </span>
          </div>
          <div className={styles.errorMessageClose}>
            <span className={styles.errorMessageLink}>
              <Cross fill="#ffffff" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  error: getError(state.base)
});

export default connect(mapStateToProps, undefined)(ErrorMessage);
