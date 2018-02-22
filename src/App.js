import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
  apiKey: 'AIzaSyCOyj6e-NEkdwJOM4vWGHPa8OPwnTjIYmc',
  authDomain: 'manager-39e20.firebaseapp.com',
  databaseURL: 'https://manager-39e20.firebaseio.com',
  projectId: 'manager-39e20',
  storageBucket: 'manager-39e20.appspot.com',
  messagingSenderId: '979060378638'
};
firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
    <Router />
      </Provider>
    );
  }
}


export default App;
