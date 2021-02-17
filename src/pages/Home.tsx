import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlugins } from '../store/features/items/thunkActions';
import { getPlugins } from '../store/features/items/selectors';
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

  return (
    <div className="home-page">
      <h1>Explore plugins for JetBrains Products</h1>
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
