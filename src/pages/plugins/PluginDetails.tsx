import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

const PluginDetailsPage: FunctionComponent = () => {
  const { name } = useParams<{ name: string }>();
  return <div>Details {name}</div>;
};

export default PluginDetailsPage;
