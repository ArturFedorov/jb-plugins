import React, { FunctionComponent } from 'react';
import { PluginForm } from '../../../components/plugins/plugin-form/PluginForm';
import { PluginPreview } from '../../../components/plugins/plugin-preview/PluginPreview';
import styles from './plugin-add.module.scss';

const PluginAddPage: FunctionComponent = () => {
  return (
    <div className={styles.pluginAdd}>
      <div className={styles.pluginAddTop}></div>
      <div className={styles.pluginAddTopBg}></div>
      <div className="container">
        <div className={styles.pluginAddContent}>
          <div className="column is-half is-direction-column">
            <h1>Add Plugin</h1>
            <PluginForm />
          </div>
          <div className="column is-half is-direction-column">
            <h3>Card preview</h3>
            <PluginPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PluginAddPage;
