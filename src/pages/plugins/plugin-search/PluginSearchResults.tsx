import React, { FunctionComponent, useEffect } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './plugin-search.module.scss';
import { Input } from '../../../components/common/input/Input';
import { SearchIcon } from '../../../components/common/icons/SearchIcon';
import { fetchPlugins } from '../../../store/features/plugins/thunkActions';
import { setSearchValue } from '../../../store/features/plugins';
import { RootState } from '../../../store/rootReducer';
import { getPlugins, getTotalPluginCount } from '../../../store/features/plugins/selectors';
import { getLoadingStatus } from '../../../store/features/base/selectors';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { PluginList } from '../../../components/plugins/plugin-list/PluginList';

export interface ISearchResultsProps {
  plugins: IPlugin[];
  pluginsTotalCount: number;
  fetchPluginsConnect: () => void;
  loadingFromApi: boolean;
  setSearchValueConnect: (value: string) => void;
}

const PluginSearchResultsPage: FunctionComponent<ISearchResultsProps> = ({
  plugins,
  pluginsTotalCount,
  loadingFromApi,
  fetchPluginsConnect,
  setSearchValueConnect
}) => {
  const params = useLocation().search;
  const onChange = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    fetchPluginsConnect();
  }, [fetchPluginsConnect]);

  return (
    <div className={styles.pluginSearch}>
      <div className="container">
        <div className={styles.pluginSearchInput}>
          <h1>Search</h1>
          <Input placeholder="Search" onChange={onChange} icon={<SearchIcon />} />
        </div>
        <div className={styles.pluginSearchList}>
          <h2 className={classNames(styles.pluginSearchHeader, 'is-lighter')}>Plugins</h2>
          <PluginList header="" plugins={plugins} isCentered={true} />
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
  pluginsTotalCount: getTotalPluginCount(state.plugins),
  loadingFromApi: getLoadingStatus(state.base)
});

export default connect(mapStateToProps, mapDispatchToProps)(PluginSearchResultsPage);
