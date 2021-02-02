import React, {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux'
import './App.scss';
import {getItems} from './store/features/items/selectors';
import {fetchItems} from './store/features/items/thunkActions';
import {RootState} from './store/rootReducer';
import {IModel} from './shared/interfaces/IModel';

const App: FunctionComponent<{ items: IModel[], fetchItems: () => void}> = ({items, fetchItems}) => {
  useEffect(() => {
    fetchItems();
  },[fetchItems]);

  return (
    <div className="App">
      <h1>Hello</h1>
      {items.map(item => (<p key={item.id}>{item.id}</p>))}
    </div>
  );
}

const mapDispatchToProps = {
  fetchItems
};

const mapStateToProps = (state: RootState) => ({
  items: getItems(state.items)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

