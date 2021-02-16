/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Post from './src/components/Post';
import feed from './assets/data/feed';

import HomeScreen from './src/screens/Home';
import SearchResutsScreen from './src/screens/SearchResults';
import LocationScreen from './src/screens/LocationScreen';

const post1 = feed[0];
const post2 = feed[2];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResutsScreen /> */}
        <LocationScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
