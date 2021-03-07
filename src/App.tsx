import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/root/footer/Footer';
import { Header } from './components/root/header/Header';
import ErrorMessage from './components/root/error-message/ErrorMessage';
import HomePage from './pages/Home';
import { Routes } from './routes';
import AboutPage from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import PluginAddPage from './pages/plugins/plugin-add/PluginAdd';
import PluginDetailsPage from './pages/plugins/plugin-details/PluginDetails';
import PluginSearchResultsPage from './pages/plugins/plugin-search/PluginSearchResults';
import styles from './App.module.scss';
import './styles/index.scss';

const App: FunctionComponent = () => {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path={Routes.ABOUT} component={AboutPage} exact />
            <Route path={Routes.PLUGIN_SEARCH_RESULTS} component={PluginSearchResultsPage} exact />
            <Route path={Routes.PLUGIN_ADD} component={PluginAddPage} exact />
            <Route path={Routes.PLUGIN_DETAILS_PAGE} component={PluginDetailsPage} exact />
            <Route path={Routes.HOME} component={HomePage} exact />
            <Route component={NotFound} />
          </Switch>
          <ErrorMessage className="is-bottom-right" />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
