import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PluginForm from '../../../components/plugins/plugin-form/PluginForm';
import { PluginPreview } from '../../../components/plugins/plugin-preview/PluginPreview';
import { Modal } from '../../../components/common/modal/Modal';
import styles from './plugin-add.module.scss';
import { RootState } from '../../../store/rootReducer';
import {
  gePluginUploadMessage,
  getPlugin,
  getShowPluginModal
} from '../../../store/features/plugins/selectors';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { setShowPluginModal } from '../../../store/features/plugins';
import { Button } from '../../../components/common/button/Button';
import { ButtonType } from '../../../components/common/button/ButtonType';

export interface IPluginAddProps {
  plugin: IPlugin;
  pluginUploadMessage: string;
  showPluginModal: boolean;
  setShowPluginModalConnect: (showModal: boolean) => void;
}

const PluginAddPage: FunctionComponent<IPluginAddProps> = ({
  plugin,
  pluginUploadMessage,
  showPluginModal,
  setShowPluginModalConnect
}) => {
  return (
    <div className={styles.pluginAdd}>
      <Modal
        header="Uploading plugin"
        message={pluginUploadMessage}
        showModal={showPluginModal}
        onClose={() => setShowPluginModalConnect(false)}
      >
        <Button type={ButtonType.DEFAULT}>Add new plugin</Button>
        <Button type={ButtonType.ACTION}>Go to plugin list</Button>
      </Modal>
      <div className="container">
        <div className={styles.pluginAddContent}>
          <div className={classNames('column is-half is-direction-column', styles.pluginAddForm)}>
            <h2 className={styles.pluginAddHeader}>Add plugin</h2>
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
  plugin: getPlugin(state.plugins),
  pluginUploadMessage: gePluginUploadMessage(state.plugins),
  showPluginModal: getShowPluginModal(state.plugins)
});

const mapDispatchToProps = {
  setShowPluginModalConnect: setShowPluginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(PluginAddPage);
