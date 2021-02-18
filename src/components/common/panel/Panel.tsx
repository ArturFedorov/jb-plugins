import React, { FunctionComponent, ReactElement } from 'react';
import './panel.scss';

export interface IPanelProps {
  title?: string;
  children?: ReactElement[];
}

export const Panel: FunctionComponent<IPanelProps> = ({
  title = 'Explore plugins for JetBrains Products',
  children
}) => {
  return (
    <div className="panel">
      <div className="panel-section">
        <h1 className="panel-header is-white-text">{title}</h1>
      </div>
      <div className="panel-section">{children}</div>
    </div>
  );
};
