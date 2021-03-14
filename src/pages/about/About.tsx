import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
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
          <div>
            <NavLink to="/" className={styles.aboutAction}>
              <Button action>Back to App</Button>
            </NavLink>
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
          <AboutSection order="2." header="State management">
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Vuex:</span>
              <span className={styles.aboutParagraph}>
                I have most experience with vuex. I like its mutability concept versus redux
                immutability.
              </span>
              <span className={styles.aboutParagraph}>
                There is only one npm solution for react vuex bindings. And it has no typescript
                types out of the box.
              </span>
              <span className={styles.aboutParagraph}>
                Writing own bindings and types is time-consuming for a test task.
                <span className={classNames(styles.aboutParagraph, 'is-bold', 'is-error-text')}>
                  So i decided not to go with vuex.
                </span>
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Context:</span>
              <span className={styles.aboutParagraph}>
                From a first positive site, react Context is already a built-in solution
              </span>
              <span className={styles.aboutParagraph}>
                and no extra installations are required.
              </span>
              <span className={styles.aboutParagraph}>
                From another perspective it seemed to me like a solution not flexible enough.
              </span>
              <span className={styles.aboutParagraph}>
                To me it looks harder to break down state to logical blocks
              </span>
              <span className={styles.aboutParagraph}>
                and wrap App component in more and more context objects.
              </span>
              <span className={styles.aboutParagraph}>
                Another point was frequent re-rendering on context change. We have to be careful and
                use useMemo hook. For a project like this where time is essential. It may not be a
                fast solution.
                <span className={classNames(styles.aboutParagraph, 'is-bold', 'is-error-text')}>
                  So i decided not to go with React Context.
                </span>
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                Redux toolkit:
              </span>
              <span className={styles.aboutParagraph}>
                Popular solution within react community. Has typescript support out of the box.
              </span>
              <span className={styles.aboutParagraph}>Pre-configured built-in thunk library</span>
              <span className={styles.aboutParagraph}>
                Easy to scale and break down with slices
              </span>
              <span className={styles.aboutParagraph}>
                Was easier to use. Many concepts are similar with vuex.
              </span>
              <span className={styles.aboutParagraph}>
                Easy to integrate with axios interceptors in order to manage global loading state
                and error handling.
              </span>
              <span className={styles.aboutParagraph}>
                Cons: a bit massive solution for test project. But in perspective scales better. A
                lot of documentation and examples are available.
              </span>
              <span className={styles.aboutParagraph}>
                So based on all aforementioned factors, personal experience and time frames of
                project
                <span className={classNames(styles.aboutParagraph, 'is-bold', 'is-green-text')}>
                  I decided to go with @reduxjs/toolkit.
                </span>
              </span>
            </div>
          </AboutSection>
        </div>
        <div id="ci">
          <AboutSection order="3." header="CI/CD">
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Travis CI:</span>
              <span className={styles.aboutParagraph}>
                I have used travis ci in order to run simple pipelines.
              </span>
              <span className={styles.aboutParagraph}>
                Just simple checks like build test lint before merging to master and deploying
              </span>
              <span className={styles.aboutParagraph}>
                Free, easily integrated with github, easy to configure even for fe developer.
              </span>
            </div>
          </AboutSection>
        </div>
        <div id="styling">
          <AboutSection order="4." header="Styling">
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>SCSS:</span>
              <span className={styles.aboutParagraph}>
                Global reusable classes and variables are defined in styles folder.
              </span>
              <span className={styles.aboutParagraph}>
                Layout grid is based on $building-unit 8px value.
              </span>
              <span className={styles.aboutParagraph}>
                Broken down to self-explanatory logic blocks.
              </span>
              <span className={styles.aboutParagraph}>
                Used across application for common cases
              </span>
              <span className={styles.aboutParagraph}>
                like padding/margin units, typography, layouts, colors etc.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                SCSS Modules:
              </span>
              <span className={styles.aboutParagraph}>
                For feature components and common components I used scss modules.
              </span>
              <span className={styles.aboutParagraph}>
                It is important to keep it scoped and with unique identifiers.
              </span>
            </div>
          </AboutSection>
        </div>
        <div id="webpack">
          <AboutSection order="5." header="Webpack"></AboutSection>
        </div>
        <div id="design">
          <AboutSection order="6." header="Design">
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Design:</span>
              <span className={styles.aboutParagraph}>
                As task requirements allow to make changes to some design parts,
              </span>
              <span className={styles.aboutParagraph}>
                I decided to make a couple of alterations
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                Responsiveness:
              </span>
              <span className={styles.aboutParagraph}>
                I have added responsive styling for tablet and mobile.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                Plugin details:
              </span>
              <span className={styles.aboutParagraph}>
                I decided to make it a complete page, not a modal window.
              </span>
              <span className={styles.aboutParagraph}>
                I still implemented a modal window as a prompt window before deleting plugin.
              </span>
              <span className={styles.aboutParagraph}>
                First of all, if it was a dialog, i would have to show another dialog with prompt
                question above current dialog. I think such dialog layering is not very good UX
                pattern.
              </span>
              <span className={styles.aboutParagraph}>
                I have added more features like images (mock for now). Rating section with tooltip.
                Without it page looked empty with test data.
              </span>
              <span className={styles.aboutParagraph}>
                I have added plugin share. Information about plugin can be shared via 4 networks.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                Add plugin:
              </span>
              <span className={styles.aboutParagraph}>
                I decided to make it a complete page, not a modal window.
              </span>
              <span className={styles.aboutParagraph}>
                Adding a new plugin requires validation and extra information.
              </span>
              <span className={styles.aboutParagraph}>
                So i decided to make this a working zone with more air and space. And it scales
                better on mobile devices.
              </span>
            </div>
            <div className={styles.aboutSection}>
              <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                Search results:
              </span>
              <span className={styles.aboutParagraph}>
                I implemented it close to real jetbrains.plugins solution
              </span>
            </div>
          </AboutSection>
          <div id="3rd">
            <AboutSection order="7." header="3rd Party libraries">
              <div className={styles.aboutSection}>
                <span className={classNames(styles.aboutParagraph, 'is-underlined')}>Axios:</span>
                <span className={styles.aboutParagraph}>Obvious choice</span>
              </div>
              <div className={styles.aboutSection}>
                <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                  React-hook-form:
                </span>
                <span className={styles.aboutParagraph}>
                  Well documented solution based on hooks with typescript support.
                </span>
                <span className={styles.aboutParagraph}>
                  Built-in validation for different types.
                </span>
              </div>
              <div className={styles.aboutSection}>
                <span className={classNames(styles.aboutParagraph, 'is-underlined')}>
                  React share:
                </span>
                <span className={styles.aboutParagraph}>
                  Library for sharing via social networks.
                </span>
              </div>
            </AboutSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
