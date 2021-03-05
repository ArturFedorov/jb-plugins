import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { getPlugin } from '../../../store/features/plugins/selectors';
import { fetchPlugin } from '../../../store/features/plugins/thunkActions';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

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
    <div>
      <div>Details {id}</div>
      <h1>{plugin.name}</h1>
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
