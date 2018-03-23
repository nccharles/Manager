import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider} from 'react-redux'
import Router from './App/Navigation/Router'
import Navigation from './App/Navigation/AppNavigator'
import {createStore, applyMiddleware} from 'redux'
import reducers from './App/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDRH7tA2hI-52N3eQ6GDnnu_jMMvwfZS7I',
      authDomain: 'manager-846f9.firebaseapp.com',
      databaseURL: 'https://manager-846f9.firebaseio.com',
      projectId: 'manager-846f9',
      storageBucket: '',
      messagingSenderId: '35329015297'
    };
    firebase.initializeApp(config);
    console.ignoredYellowBox = [
      'Setting a timer'
    ]
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Router/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
