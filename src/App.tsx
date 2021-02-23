import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/root/header/Header';
import HomePage from './pages/Home';
import PluginDetailsPage from './pages/plugins/PluginDetails';
import PluginSearchResults from './pages/plugins/PluginSearchResults';
import './styles/index.scss';

export enum Routes {
  HOME = '/',
  PLUGIN_DETAILS_PAGE = '/plugins/:name',
  PLUGIN_SEARCH_RESULTS = '/search'
}

const App: FunctionComponent = () => {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route path={Routes.PLUGIN_SEARCH_RESULTS} component={PluginSearchResults} exact />
            <Route path={Routes.PLUGIN_DETAILS_PAGE} component={PluginDetailsPage} exact />
            <Route path={Routes.HOME} component={HomePage} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
