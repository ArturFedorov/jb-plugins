import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { getPlugin } from '../../../store/features/plugins/selectors';
import { fetchPlugin } from '../../../store/features/plugins/thunkActions';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import styles from './plugin-detail.module.scss';
import { PluginIcon } from '../../../components/plugins/plugin-icon/PluginIcon';
import { StarRating } from '../../../components/common/star-rating/StarRating';
import { Button } from '../../../components/common/button/Button';
import { DropMenu } from '../../../components/common/drop-menu/DropMenu';

export interface IPluginDetailsProps {
  plugin: IPlugin;
  fetchPluginConnect: (id: string) => void;
}

const PluginDetailsPage: FunctionComponent<IPluginDetailsProps> = ({
  plugin,
  fetchPluginConnect
}) => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    fetchPluginConnect(id);
  }, [fetchPluginConnect, id]);

  return (
    <div className={styles.pluginDetail}>
      <div className="container">
        <div className={styles.pluginDetailHeader}>
          <PluginIcon iconUrl={plugin.icon} className={styles.pluginDetailIcon} />
          <div>
            <h1 className="is-lighter">{plugin.name}</h1>
            <StarRating rating={plugin.rating} />
            <span className="is-secondary-text is-caption">{plugin.author}</span>
          </div>
          <div>
            <Button action>Download</Button>
            <DropMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchPluginConnect: fetchPlugin
};

const mapStateToProps = (state: RootState) => ({
  plugin: getPlugin(state.plugins)
});

export default connect(mapStateToProps, mapDispatchToProps)(PluginDetailsPage);
