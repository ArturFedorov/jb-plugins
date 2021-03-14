import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import {
  getPlugin,
  getPluginDeletedFailed,
  getPluginDeletedSuccess
} from '../../../store/features/plugins/selectors';
import { deletePlugin, fetchPlugin } from '../../../store/features/plugins/thunkActions';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import styles from './plugin-detail.module.scss';
import { PluginIcon } from '../../../components/plugins/plugin-icon/PluginIcon';
import { PluginRating } from '../../../components/plugins/plugin-rating/PluginRating';
import { PluginShare } from '../../../components/plugins/plugin-share/PluginShare';
import { StarRating } from '../../../components/common/star-rating/StarRating';
import { Button } from '../../../components/common/button/Button';
import { DownloadLink } from '../../../components/common/button/DownloadLink';
import { DropMenu } from '../../../components/common/drop-menu/DropMenu';
import { LoadingBar } from '../../../components/common/loading-bar/LoadingBar';
import { Modal } from '../../../components/common/modal/Modal';
import { LoadingState } from '../../../shared/enums/LoadingState';
import images1 from '../../../assets/images/scrennshot1.png';
import images2 from '../../../assets/images/scrennshot2.png';
import { Tooltip } from '../../../components/common/tooltip/Tooltip';
import { formatNumber } from '../../../shared/utils/format-util/format.util';
import { setPluginDeletedFailed, setPluginDeletedSuccess } from '../../../store/features/plugins';

export interface IPluginDetailsProps {
  plugin: IPlugin;
  pluginDeletedSuccess: boolean;
  pluginDeletedFailed: boolean;
  fetchPluginConnect: (id: string) => void;
  deletePluginConnect: (id: string) => void;
  setPluginDeletedSuccessConnect: (value: boolean) => void;
  setPluginDeletedFailedConnect: (value: boolean) => void;
}

const PluginDetailsPage: FunctionComponent<IPluginDetailsProps> = ({
  plugin,
  pluginDeletedSuccess,
  pluginDeletedFailed,
  fetchPluginConnect,
  deletePluginConnect,
  setPluginDeletedSuccessConnect,
  setPluginDeletedFailedConnect
}) => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [hideSharePanel, setHideSharePanel] = useState(true);

  useEffect(() => {
    // redirect after success deletion
    if (pluginDeletedSuccess && !pluginDeletedFailed) {
      history.push('/');
    }

    return () => {
      // reset values
      setPluginDeletedSuccessConnect(false);
      setPluginDeletedFailedConnect(false);
    };
  }, [
    pluginDeletedFailed,
    pluginDeletedSuccess,
    setPluginDeletedSuccessConnect,
    setPluginDeletedFailedConnect,
    history
  ]);

  useEffect(() => {
    fetchPluginConnect(id);
  }, [fetchPluginConnect, id]);

  const removePlugin = () => {
    deletePluginConnect(plugin.id);
  };

  const onShareClick = () => {
    setHideSharePanel(false);
  };

  const onDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const dropMenuItems = [
    { value: 'Share plugin', key: 'share', onClick: onShareClick },
    { value: 'Delete plugin', key: 'delete', onClick: onDeleteClick }
  ];

  return (
    <div className={styles.pluginDetail}>
      <Modal
        header="Deleting plugin"
        message="Do you want to delete plugin?"
        showModal={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      >
        <div>
          <LoadingBar loadingState={LoadingState.SUCCESS} />
          <div className={styles.pluginDetailButtons}>
            <Button action onClick={removePlugin}>
              Delete plugin
            </Button>
            <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          </div>
        </div>
      </Modal>

      <div className="container">
        <div className={styles.pluginDetailHeader}>
          <div className={styles.pluginDetailSection}>
            <PluginIcon iconUrl={plugin.icon} className={styles.pluginDetailIcon} />
          </div>
          <div className={styles.pluginDetailSection}>
            <h1 className={classNames(styles.pluginDetailHeading, 'is-lighter')}>{plugin.name}</h1>
            <StarRating rating={plugin.rating} />
            <span
              className={classNames(styles.pluginDetailCaption, 'is-secondary-text is-caption')}
            >
              {plugin.author}
            </span>
          </div>
          <div className={styles.pluginDetailActions}>
            <div>
              <DownloadLink content={plugin} fileName={plugin.name} text="Download" />
            </div>
            <DropMenu items={dropMenuItems} />
          </div>
        </div>
      </div>
      <div className={styles.pluginDetailMain}>
        <div className="container">
          <div className={styles.pluginDetailImages}>
            <img className={styles.pluginDetailImage} src={images1} alt="img1" />
            <img className={styles.pluginDetailImage} src={images2} alt="img2" />
          </div>
          <div className={styles.pluginDetailDescription}>
            <div>
              <p>{plugin.description}</p>
            </div>
            <div>
              <h4 className="is-lighter">Key features</h4>
              <p>{plugin.fullDescription}</p>
            </div>
          </div>
          <div className={styles.pluginDetailRating}>
            <h3 className="is-lighter">Rating & Reviews</h3>
            <div className={styles.pluginDetailRate}>
              <PluginRating rating={plugin.rating} />
              <Tooltip className={styles.pluginDetailTooltip}>
                <span className="is-caption">Check out </span>
                <a
                  className="is-caption is-white-text is-underlined"
                  href="https://plugins.jetbrains.com/docs/marketplace/plugins-rating.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  this document
                </a>
                <span className="is-caption"> for more information</span> <br />
                <span className="is-caption">about Bayesian rating</span>
              </Tooltip>
            </div>
            <span className="is-caption is-secondary-text">
              downloads {formatNumber(plugin.downloads)}
            </span>
          </div>
        </div>
      </div>
      <PluginShare
        plugin={plugin}
        hidePanel={hideSharePanel}
        onClose={() => setHideSharePanel(true)}
      />
    </div>
  );
};

const mapDispatchToProps = {
  fetchPluginConnect: fetchPlugin,
  deletePluginConnect: deletePlugin,
  setPluginDeletedSuccessConnect: setPluginDeletedSuccess,
  setPluginDeletedFailedConnect: setPluginDeletedFailed
};

const mapStateToProps = (state: RootState) => ({
  plugin: getPlugin(state.plugins),
  pluginDeletedSuccess: getPluginDeletedSuccess(state.plugins),
  pluginDeletedFailed: getPluginDeletedFailed(state.plugins)
});

export default connect(mapStateToProps, mapDispatchToProps)(PluginDetailsPage);
