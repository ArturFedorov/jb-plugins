import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

const PluginSearchResultsPage: FunctionComponent = () => {
  return <div>Search {useLocation().search}</div>;
};

export default PluginSearchResultsPage;
