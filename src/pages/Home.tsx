import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Panel } from '../components/common/panel/Panel';
import { Input } from '../components/common/input/Input';
import { SearchIcon } from '../components/icons/SearchIcon';
import { fetchPlugins } from '../store/features/plugins/thunkActions';
import { getPlugins } from '../store/features/plugins/selectors';
import { RootState } from '../store/rootReducer';
import { IPlugin } from '../shared/interfaces/models/IPlugin';
import './home.scss';

export interface IHomePageProps {
  plugins: IPlugin[];
  fetchPluginsConnect: () => void;
}

const HomePage: FunctionComponent<IHomePageProps> = ({ plugins, fetchPluginsConnect }) => {
  useEffect(() => {
    fetchPluginsConnect();
  }, [fetchPluginsConnect]);

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <div className="home-page">
      <div className="home-page-top">
        <div className="home-page-background" />
        <div className="container">
          <Panel>
            <Input
              placeholder={`Search all ${plugins.length} IntelliJ Platform plugins`}
              icon={<SearchIcon />}
              onChange={onSearch}
            />
          </Panel>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchPluginsConnect: fetchPlugins
};

const mapStateToProps = (state: RootState) => ({
  plugins: getPlugins(state.plugins)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
