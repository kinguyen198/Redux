import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './src/reducers';
import thunk from 'redux-thunk';
import Counter from './src/component/counter';
import Bank from './src/component/bank';
export default function App() {
  const middlewares = [thunk];
  let store = createStore(reducer, applyMiddleware(...middlewares));
  console.log(store.getState().reCounter);
  return (
    <Provider store={store}>
      <Bank />
    </Provider>
  );
}
