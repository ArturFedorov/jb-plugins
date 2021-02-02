import React, {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux'
import './App.scss';
import {getItems, getStatus} from './store/features/items/selectors';
import {fetchItems} from './store/features/items/thunkActions';
import {RootState} from './store/rootReducer';
import {IModel} from './shared/interfaces/IModel';
import {setStatus} from './store/features/items/index';

export interface IAppProps {
  items: IModel[];
  status: string;
  fetchItems: () => void;
  setStatus: (status: string) => void
}

const App: FunctionComponent<IAppProps> = ({items, status, fetchItems, setStatus}) => {
  useEffect(() => {
    fetchItems();
  },[fetchItems]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{status}</h2>
      <div>
        <button onClick={() => setStatus('stop')}>Stop</button>
      </div>
      {items.map(item => (<p key={item.id}>{item.id}</p>))}
    </div>
  );
}

const mapDispatchToProps = {
  fetchItems,
  setStatus
};

const mapStateToProps = (state: RootState) => ({
  items: getItems(state.items),
  status: getStatus(state.items)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

