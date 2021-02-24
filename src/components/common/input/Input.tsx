import React, { FunctionComponent, ReactElement, useState } from 'react';
import classNames from 'classnames';
import styles from '../../../styles/components/input.module.scss';

export interface InputProps {
  placeholder?: string;
  value?: string;
  icon?: ReactElement;
  onChange: (value: string) => void;
  withBorder?: boolean;
}

export const Input: FunctionComponent<InputProps> = ({
  placeholder = 'Input text',
  value,
  icon,
  onChange,
  withBorder = false
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={classNames(styles.inputWrapper, {
        [styles.withFocus]: isFocused,
        [styles.withBorder]: withBorder
      })}
    >
      <div className={styles.inputField}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
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
