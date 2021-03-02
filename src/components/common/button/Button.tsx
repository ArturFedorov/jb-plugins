import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { ButtonType } from './ButtonType';
import style from './button.module.scss';

export interface IButtonProps {
  type: ButtonType;
  disabled?: boolean;
  onClick?: (event?: any) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  disabled = false,
  type = ButtonType.ACTION,
  onClick,
  children
}) => {
  const buttonType = {
    [ButtonType.ACTION]: style.buttonAction,
    [ButtonType.DEFAULT]: style.buttonDefault
  };

  return (
    <button
      disabled={disabled}
      className={classNames(style.button, buttonType[type])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
