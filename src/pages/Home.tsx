import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { useHistory } from 'react-router-dom';
import { Panel } from '../components/common/panel/Panel';
import { Input } from '../components/common/input/Input';
import { SearchIcon } from '../components/common/icons/SearchIcon';
import { LoaderIcon } from '../components/common/icons/LoaderIcon';
import { PluginList } from '../components/plugins/plugin-list/PluginList';
import { fetchLatestPlugins, fetchPopularPlugins } from '../store/features/plugins/thunkActions';
import { getLoadingStatus } from '../store/features/base/selectors';
import {
  getLatestPlugins,
  getMostPopularPlugins,
  getTotalPluginCount
} from '../store/features/plugins/selectors';
import { setSearchValue } from '../store/features/plugins';
import { RootState } from '../store/rootReducer';
import { IPlugin } from '../shared/interfaces/models/IPlugin';
import './home.scss';
import { Routes } from '../routes';

export interface IHomePageProps {
  popularPlugins: IPlugin[];
  pluginsTotalCount: number;
  latestPlugins: IPlugin[];
  loadingFromApi: boolean;
  fetchPopularPluginsConnect: () => void;
  fetchLatestPluginsConnect: () => void;
  setSearchValueConnect: (value: string) => void;
}

const HomePage: FunctionComponent<IHomePageProps> = ({
  popularPlugins,
  pluginsTotalCount,
  latestPlugins,
  loadingFromApi,
  fetchPopularPluginsConnect,
  fetchLatestPluginsConnect,
  setSearchValueConnect
}) => {
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch] = useDebounce(search, 1000);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchPopularPluginsConnect();
    fetchLatestPluginsConnect();
  }, [fetchLatestPluginsConnect, fetchPopularPluginsConnect]);

  useEffect(() => {
    setSearchValueConnect(debouncedSearch);
    setIsLoading(false);
  }, [debouncedSearch, setSearchValueConnect]);

  const goToSearchResults = () => {
    history.push(`${Routes.PLUGIN_SEARCH_RESULTS}?query=${search}&limit=12`);
  };

  return (
    <div className="home-page">
      <div className="home-page-top">
        <div className="home-page-background" />
        <div className="container">
          <Panel>
            <Input
              isInverted={true}
              placeholder={`Search all ${pluginsTotalCount} IntelliJ Platform plugins`}
              icon={loadingFromApi || isLoading ? <LoaderIcon /> : <SearchIcon />}
              onChange={(event) => {
                setIsLoading(true);
                setSearch(event);
              }}
              onKeyEnter={goToSearchResults}
            />
          </Panel>
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
  fetchLatestPluginsConnect: fetchLatestPlugins,
  setSearchValueConnect: setSearchValue
};

const mapStateToProps = (state: RootState) => ({
  pluginsTotalCount: getTotalPluginCount(state.plugins),
  popularPlugins: getMostPopularPlugins(state.plugins),
  latestPlugins: getLatestPlugins(state.plugins),
  loadingFromApi: getLoadingStatus(state.base)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
