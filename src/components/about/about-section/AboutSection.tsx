import React, { FunctionComponent } from 'react';
import styles from './about-section.module.scss';

export interface IAboutSectionProps {
  header: string;
  order: string;
}

export const AboutSection: FunctionComponent<IAboutSectionProps> = ({
  header,
  order,
  children
}) => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionHeading}>
        <span className={styles.aboutSectionOrder}>{order}</span>
        <h1 className={styles.aboutSectionHeader}>{header}</h1>
      </div>
      <div className={styles.aboutSectionContent}>{children}</div>
    </div>
  );
};
