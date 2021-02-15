import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { getError, getItems, getLoadingStatus, getStatus } from './store/features/items/selectors';
import { fetchItems } from './store/features/items/thunkActions';
import { RootState } from './store/rootReducer';
import { IModel } from './shared/interfaces/IModel';
import { setStatus } from './store/features/items/index';
import { IError } from './shared/interfaces/IError';

export interface IAppProps {
  items: IModel[];
  status: string;
  loading: boolean;
  error: IError | null;
  fetchItemsConnect: () => void;
  setStatusConnect: (status: string) => void;
}

const App: FunctionComponent<IAppProps> = ({
  status,
  items,
  loading,
  error,
  setStatusConnect,
  fetchItemsConnect
}: IAppProps) => {
  useEffect(() => {
    console.log('fetch');
    fetchItemsConnect();
  }, [fetchItemsConnect]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{status}</h2>
      <h2>Loading: {loading.toString()}</h2>
      <div>
        <button onClick={() => setStatusConnect('stop')}>Stop</button>
      </div>
      <p>{error?.title}</p>
      {items.map((item: IModel) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  fetchItemsConnect: fetchItems,
  setStatusConnect: setStatus
};

const mapStateToProps = (state: RootState) => ({
  items: getItems(state.items),
  status: getStatus(state.items),
  loading: getLoadingStatus(state.items),
  error: getError(state.items)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
