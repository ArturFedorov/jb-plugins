import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
import { getHasError, getLoadingStatus } from '../../../store/features/base/selectors';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { setShowPluginModal } from '../../../store/features/plugins';
import { Button } from '../../../components/common/button/Button';
import { LoadingBar } from '../../../components/common/loading-bar/LoadingBar';
import { ButtonType } from '../../../components/common/button/ButtonType';
import { LoadingState } from '../../../shared/enums/LoadingState';
import { Routes } from '../../../routes';

export interface IPluginAddProps {
  plugin: IPlugin;
  pluginUploadMessage: string;
  isLoading: boolean;
  hasError?: boolean;
  showPluginModal: boolean;
  setShowPluginModalConnect: (showModal: boolean) => void;
}

const PluginAddPage: FunctionComponent<IPluginAddProps> = ({
  plugin,
  pluginUploadMessage,
  isLoading,
  hasError,
  showPluginModal,
  setShowPluginModalConnect
}) => {
  const [loadingState, setLoadingState] = useState(LoadingState.LOADING);
  const history = useHistory();

  useEffect(() => {
    if (hasError) {
      setLoadingState(LoadingState.ERROR);
    } else {
      setLoadingState(isLoading ? LoadingState.LOADING : LoadingState.SUCCESS);
    }
  }, [hasError, isLoading]);

  const goToPluginList = () => {
    setShowPluginModalConnect(false);
    history.push(Routes.HOME);
  };

  return (
    <div className={styles.pluginAdd}>
      <Modal
        header="Uploading plugin"
        message={pluginUploadMessage}
        showModal={showPluginModal}
        onClose={() => setShowPluginModalConnect(false)}
      >
        <div>
          <LoadingBar loadingState={loadingState} />
          {!isLoading && (
            <div className={styles.pluginAddModalButtons}>
              <Button type={ButtonType.DEFAULT} onClick={() => setShowPluginModalConnect(false)}>
                Add new plugin
              </Button>
              <Button type={ButtonType.ACTION} onClick={goToPluginList}>
                Go to plugin list
              </Button>
            </div>
          )}
        </div>
      </Modal>

      <div className="container">
        <div className={styles.pluginAddContent}>
          <div
            className={classNames(
              'column is-half is-direction-column is-tablet-full-width',
              styles.pluginAddForm
            )}
          >
            <h2 className={styles.pluginAddHeader}>Add plugin</h2>
            <PluginForm />
          </div>
          <div
            className={classNames(
              'column is-half is-direction-column is-tablet-full-width',
              styles.pluginAddPreview
            )}
          >
            <PluginPreview plugin={plugin} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  plugin: getPlugin(state.plugins),
  hasError: getHasError(state.base),
  isLoading: getLoadingStatus(state.base),
  pluginUploadMessage: gePluginUploadMessage(state.plugins),
  showPluginModal: getShowPluginModal(state.plugins)
});

const mapDispatchToProps = {
  setShowPluginModalConnect: setShowPluginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(PluginAddPage);
