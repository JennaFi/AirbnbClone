/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Post from './src/components/Post';
import feed from './assets/data/feed';

import HomeScreen from './src/screens/HomeScreen';
import SearchResutsScreen from './src/screens/SearchResultsScreen';
import LocationScreen from './src/screens/LocationScreen';
import GuestsScreen from './src/screens/GuestsScreen';
import Router from './src/navigation/Router';

import {withAuthenticator} from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
