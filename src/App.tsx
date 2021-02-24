import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/root/header/Header';
import HomePage from './pages/Home';
import AboutPage from './pages/about/About';
import PluginDetailsPage from './pages/plugins/PluginDetails';
import PluginSearchResultsPage from './pages/plugins/PluginSearchResults';
import './styles/index.scss';

export enum Routes {
  HOME = '/',
  ABOUT = '/about',
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
            <Route path={Routes.ABOUT} component={AboutPage} exact />
            <Route path={Routes.PLUGIN_SEARCH_RESULTS} component={PluginSearchResultsPage} exact />
            <Route path={Routes.PLUGIN_DETAILS_PAGE} component={PluginDetailsPage} exact />
            <Route path={Routes.HOME} component={HomePage} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
