import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { PluginList } from '../components/plugins/plugin-list/PluginList';
import { PluginSearchPanel } from '../components/plugins/plugin-search-panel/PluginSearchPanel';
import { fetchLatestPlugins, fetchPopularPlugins } from '../store/features/plugins/thunkActions';
import { getLoadingStatus } from '../store/features/base/selectors';
import {
  getLatestPlugins,
  getMostPopularPlugins,
  getTotalPluginCount
} from '../store/features/plugins/selectors';
import { RootState } from '../store/rootReducer';
import { IPlugin } from '../shared/interfaces/models/IPlugin';
import './home.scss';

export interface IHomePageProps {
  popularPlugins: IPlugin[];
  pluginsTotalCount: number;
  latestPlugins: IPlugin[];
  loadingFromApi: boolean;
  fetchPopularPluginsConnect: () => void;
  fetchLatestPluginsConnect: () => void;
}

const HomePage: FunctionComponent<IHomePageProps> = ({
  popularPlugins,
  pluginsTotalCount,
  latestPlugins,
  loadingFromApi,
  fetchPopularPluginsConnect,
  fetchLatestPluginsConnect
}) => {
  useEffect(() => {
    fetchPopularPluginsConnect();
    fetchLatestPluginsConnect();
  }, [fetchLatestPluginsConnect, fetchPopularPluginsConnect]);

  return (
    <div className="home-page">
      <div className="home-page-top">
        <div className="home-page-background" />
        <div className="container">
          <PluginSearchPanel
            placeholder={`Search all ${JSON.stringify(
              pluginsTotalCount
            )} IntelliJ Platform plugins`}
          />
        </div>
      </div>
      <div className="container">
        <div className="home-page-content">
          <PluginList isLoading={loadingFromApi} plugins={popularPlugins} />
          <PluginList isLoading={loadingFromApi} header="Latest addition" plugins={latestPlugins} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchPopularPluginsConnect: fetchPopularPlugins,
  fetchLatestPluginsConnect: fetchLatestPlugins
};

const mapStateToProps = (state: RootState) => ({
  pluginsTotalCount: getTotalPluginCount(state.plugins),
  popularPlugins: getMostPopularPlugins(state.plugins),
  latestPlugins: getLatestPlugins(state.plugins),
  loadingFromApi: getLoadingStatus(state.base)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
