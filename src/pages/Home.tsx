import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { Panel } from '../components/common/panel/Panel';
import { Input } from '../components/common/input/Input';
import { SearchIcon } from '../components/icons/SearchIcon';
import { LoaderIcon } from '../components/icons/LoaderIcon';
import { fetchPlugins } from '../store/features/plugins/thunkActions';
import { getLoadingStatus } from '../store/features/base/selectors';
import { getPlugins } from '../store/features/plugins/selectors';
import { setSearchValue } from '../store/features/plugins';
import { RootState } from '../store/rootReducer';
import { IPlugin } from '../shared/interfaces/models/IPlugin';
import './home.scss';

export interface IHomePageProps {
  plugins: IPlugin[];
  loadingFromApi: boolean;
  fetchPluginsConnect: () => void;
  setSearchValueConnect: (value: string) => void;
}

const HomePage: FunctionComponent<IHomePageProps> = ({
  plugins,
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
              placeholder={`Search all ${plugins.length} IntelliJ Platform plugins`}
              icon={loadingFromApi || isLoading ? <LoaderIcon /> : <SearchIcon />}
              onChange={(event) => {
                setIsLoading(true);
                setSearch(event);
              }}
            />
          </Panel>
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
  plugins: getPlugins(state.plugins),
  loadingFromApi: getLoadingStatus(state.base)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
