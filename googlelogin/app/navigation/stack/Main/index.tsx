import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProfileScreen, SignupScreen} from '../../../screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
