import React, { FunctionComponent, useRef } from 'react';
import classNames from 'classnames';
import { AboutHeader } from '../../components/about/about-header/AboutHeader';
import { AboutSection } from '../../components/about/about-section/AboutSection';
import styles from './about.module.scss';
import { Button } from '../../components/common/button/Button';

const AboutPage: FunctionComponent = () => {
  return (
    <div id="about" className={styles.about}>
      <div className="container">
        <AboutHeader />
      </div>
      <div className="container">
        <h1 className={styles.aboutHeader}>
          Jetbrains <br />
          home challenge <br />
          by Artur Fedorov
          <span className={classNames(styles.aboutHeader, styles.aboutBlinking)}>_</span>
        </h1>
        <div className={styles.aboutSubheader}>
          <div className={styles.aboutAction}>
            <Button action>Download PDF</Button>
          </div>
          <span className={classNames('is-caption', styles.aboutCaption)}>
            Quick reasoning <br />
            of my implementation
          </span>
        </div>
      </div>
      <div className="container">
        <div id="folder">
          <AboutSection order="1." header="Folder structure">
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                Components:
              </span>
              <span className={styles.aboutParagraph}>
                Common - reusable generic components. Can become a basis for component library.
              </span>
              <span className={styles.aboutParagraph}>
                Root - components used only once in root component like Header of Footer.
              </span>
              <span className={styles.aboutParagraph}>
                Plugins - feature based component specific to concrete feature, in our case -
                plugin.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Pages:</span>
              <span className={styles.aboutParagraph}>About - this page.</span>
              <span className={styles.aboutParagraph}>
                Not-found - fallback page for 404 roots.
              </span>
              <span className={styles.aboutParagraph}>
                Plugins - pages, specific for main feature - plugin.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Shared:</span>
              <span className={styles.aboutParagraph}>
                Reusable parts of logic like interfaces, hooks, utils for formatting
              </span>
              <span className={styles.aboutParagraph}>
                and enums. Can be used across application.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Store:</span>
              <span className={styles.aboutParagraph}>
                State management solution based on redux toolkit, broken down by features. More in
                <a href="#state" className={classNames(styles.aboutParagraph, 'is-link')}>
                  STATE MANAGEMENT
                </a>
              </span>
            </div>
          </AboutSection>
        </div>
        <div id="state">
          <AboutSection order="2." header="State management"></AboutSection>
        </div>
        <div id="ci">
          <AboutSection order="3." header="CI/CD"></AboutSection>
        </div>
        <div id="styling">
          <AboutSection order="4." header="Styling"></AboutSection>
        </div>
        <div id="webpack">
          <AboutSection order="5." header="Webpack"></AboutSection>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
