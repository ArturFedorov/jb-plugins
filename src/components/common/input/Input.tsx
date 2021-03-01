import React, { FunctionComponent, ReactElement, useState } from 'react';
import classNames from 'classnames';
import styles from '../../../styles/components/input.module.scss';

export interface InputProps {
  isInverted?: boolean;
  icon?: ReactElement;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  withError?: boolean;
}

export const Input: FunctionComponent<InputProps> = ({
  placeholder = 'Input text',
  value,
  icon,
  onChange,
  isInverted = false,
  name,
  type = 'text',
  withError = false
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={classNames(styles.inputWrapper, {
        [styles.withFocus]: isFocused,
        [styles.inverted]: isInverted,
        [styles.error]: withError
      })}
    >
      <div className={styles.inputField}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          className={classNames(styles.input, { [styles.withIcon]: Boolean(icon) })}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChange={(event) => onChange(event.target.value)}
        />
        {icon}
      </div>
    </div>
  );
};
