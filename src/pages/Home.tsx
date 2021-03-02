import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { Panel } from '../components/common/panel/Panel';
import { Input } from '../components/common/input/Input';
import { SearchIcon } from '../components/common/icons/SearchIcon';
import { LoaderIcon } from '../components/common/icons/LoaderIcon';
import { PluginList } from '../components/plugins/plugin-list/PluginList';
import { fetchPlugins } from '../store/features/plugins/thunkActions';
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

export interface IHomePageProps {
  plugins: IPlugin[];
  pluginsTotalCount: number;
  latestPlugins: IPlugin[];
  loadingFromApi: boolean;
  fetchPluginsConnect: () => void;
  setSearchValueConnect: (value: string) => void;
}

const HomePage: FunctionComponent<IHomePageProps> = ({
  plugins,
  pluginsTotalCount,
  latestPlugins,
  loadingFromApi,
  fetchPluginsConnect,
  setSearchValueConnect
}) => {
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch] = useDebounce(search, 1000);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPluginsConnect();
  }, [fetchPluginsConnect]);

  useEffect(() => {
    setSearchValueConnect(debouncedSearch);
    setIsLoading(false);
  }, [debouncedSearch, setSearchValueConnect]);

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
            />
          </Panel>
        </div>
      </div>
      <div className="container">
        <div className="home-page-content">
          <PluginList plugins={plugins} />
          <PluginList header="Latest addition" plugins={latestPlugins} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchPluginsConnect: fetchPlugins,
  setSearchValueConnect: setSearchValue
};

const mapStateToProps = (state: RootState) => ({
  plugins: getMostPopularPlugins(state.plugins),
  pluginsTotalCount: getTotalPluginCount(state.plugins),
  latestPlugins: getLatestPlugins(state.plugins),
  loadingFromApi: getLoadingStatus(state.base)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
