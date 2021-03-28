import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './plugin-search.module.scss';
import { Input } from '../../../components/common/input/Input';
import { SearchIcon } from '../../../components/common/icons/SearchIcon';
import { fetchPlugins } from '../../../store/features/plugins/thunkActions';
import { RootState } from '../../../store/rootReducer';
import { getPlugins } from '../../../store/features/plugins/selectors';
import { getLoadingStatus } from '../../../store/features/base/selectors';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { PluginList } from '../../../components/plugins/plugin-list/PluginList';
import { IPluginQueryParams } from '../../../shared/interfaces/api/IPluginQueryParams';
import { ArrowIcon } from '../../../components/common/icons/ArrowIcon';
import { Routes } from '../../../routes';

export interface ISearchResultsProps {
  plugins: IPlugin[];
  fetchPluginsConnect: (params?: IPluginQueryParams) => void;
  loadingFromApi: boolean;
}

const PluginSearchResultsPage: FunctionComponent<ISearchResultsProps> = ({
  plugins,
  loadingFromApi,
  fetchPluginsConnect
}) => {
  const DEFAULT_PAGE_SIZE = 12;
  const history = useHistory();
  const queryParams = new URLSearchParams(useLocation().search);
  const searchParam = queryParams.get('query') || '';
  const limitParam = queryParams.get('limit') || `${DEFAULT_PAGE_SIZE}`;
  const [query, setQuery] = useState(searchParam);
  const [limit, setLimit] = useState(parseInt(limitParam, 10));
  const [showMoreVisible, setShowMoreVisible] = useState(Boolean(plugins.length));

  useEffect(() => {
    fetchPluginsConnect({ query, limit });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPluginsConnect, limit, searchParam]);

  useEffect(() => {
    // toggle show more button depending on content
    setShowMoreVisible(plugins.length >= limit);
  }, [plugins, limit]);

  const onChange = (val: string) => {
    setQuery(val);
  };

  const goToUrl = (queryVal: string, limitVal: number) => {
    history.push(`${Routes.PLUGIN_SEARCH_RESULTS}?query=${queryVal}&limit=${limitVal}`);
  };

  const onEnter = () => {
    // rerun search set pagination to initial value
    setLimit(DEFAULT_PAGE_SIZE);
    goToUrl(query, DEFAULT_PAGE_SIZE);
  };

  const showMore = () => {
    const newLimit = limit + DEFAULT_PAGE_SIZE;
    setLimit(limit + DEFAULT_PAGE_SIZE);
    goToUrl(query, newLimit);
  };

  const memoizedPluginList = useMemo(
    () => <PluginList isLoading={loadingFromApi} header="" plugins={plugins} isCentered={true} />,
    [loadingFromApi, plugins]
  );

  return (
    <div className={styles.pluginSearch}>
      <div className="container">
        <div className={styles.pluginSearchInput}>
          <h1>Search</h1>
          <Input
            value={query}
            placeholder="Search"
            icon={<SearchIcon />}
            onChange={onChange}
            onKeyEnter={onEnter}
          />
        </div>
        <div className={styles.pluginSearchList}>
          <h2 className={classNames(styles.pluginSearchHeader, 'is-lighter')}>
            Plugins {loadingFromApi}
          </h2>
          {memoizedPluginList}
          {showMoreVisible && (
            <div className={styles.pluginSearchMore}>
              <span className={styles.pluginSearchButton} onClick={showMore}>
                <span className={styles.pluginSearchText}>Show More</span>
                <ArrowIcon viewBox="0 0 18 18" height={18} width={18} fill="#167dff" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchPluginsConnect: fetchPlugins
};

const mapStateToProps = (state: RootState) => ({
  plugins: getPlugins(state.plugins),
  loadingFromApi: getLoadingStatus(state.base)
});

export default connect(mapStateToProps, mapDispatchToProps)(PluginSearchResultsPage);
