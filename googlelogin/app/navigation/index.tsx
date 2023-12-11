import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import MainNavigator from './stack/Main';

const ApplicationNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
