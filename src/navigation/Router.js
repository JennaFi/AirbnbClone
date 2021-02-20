import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LocationScreen from '../screens/LocationScreen';
import GuestsScreen from '../screens/GuestsScreen';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Search Your Destination'}
          component={LocationScreen}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{title: 'How many people?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
