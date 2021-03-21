import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../../common/input/Input';
import { SearchIcon } from '../../common/icons/SearchIcon';
import { Panel } from '../../common/panel/Panel';
import { Routes } from '../../../routes';

export interface IPluginSearchPanelProps {
  placeholder: string;
}

export const PluginSearchPanel: FunctionComponent<IPluginSearchPanelProps> = ({ placeholder }) => {
  const [search, setSearch] = useState<string>('');
  const history = useHistory();

  const setSearchResult = (event: string) => {
    setSearch(event);
  };

  const goToSearchResults = () => {
    history.push(`${Routes.PLUGIN_SEARCH_RESULTS}?query=${search}&limit=12`);
  };

  return (
    <Panel>
      <Input
        isInverted={true}
        placeholder={placeholder}
        icon={<SearchIcon />}
        onChange={setSearchResult}
        onKeyEnter={goToSearchResults}
      />
    </Panel>
  );
};
