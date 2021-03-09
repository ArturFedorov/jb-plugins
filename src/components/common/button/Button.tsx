import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import style from './button.module.scss';

export interface IButtonProps {
  action?: boolean;
  round?: boolean;
  disabled?: boolean;
  onClick?: (event?: any) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  action = false,
  disabled = false,
  round = false,
  onClick,
  children
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(style.button, {
        [style.buttonAction]: action,
        [style.buttonRound]: round
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
