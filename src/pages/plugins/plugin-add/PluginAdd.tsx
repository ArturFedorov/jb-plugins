import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PluginForm from '../../../components/plugins/plugin-form/PluginForm';
import { PluginPreview } from '../../../components/plugins/plugin-preview/PluginPreview';
import styles from './plugin-add.module.scss';
import { RootState } from '../../../store/rootReducer';
import { getPlugin } from '../../../store/features/plugins/selectors';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

const PluginAddPage: FunctionComponent<{ plugin: IPlugin }> = ({ plugin }) => {
  return (
    <div className={styles.pluginAdd}>
      <div className={styles.pluginAddTop}></div>
      <div className={styles.pluginAddTopBg}>
        <div className="container">
          <h1 className={classNames(styles.pluginAddHeader, 'h0')}>Add Plugin</h1>
        </div>
      </div>
      <div className="container">
        <div className={styles.pluginAddContent}>
          <div className="column is-half is-direction-column">
            <PluginForm />
          </div>
          <div className="column is-half is-direction-column with-border-left">
            <PluginPreview plugin={plugin} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  plugin: getPlugin(state.plugins)
});

export default connect(mapStateToProps, undefined)(PluginAddPage);
