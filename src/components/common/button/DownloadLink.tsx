import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import style from './button.module.scss';

export interface IDownloadLinkProps {
  content: Object;
  fileName?: string;
  text: string;
}

export const DownloadLink: FunctionComponent<IDownloadLinkProps> = ({
  fileName,
  content,
  text
}) => {
  return (
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(content))}`}
      download={`${fileName}.json`}
      className={classNames(style.button, style.buttonAction)}
    >
      {text}
    </a>
  );
};
