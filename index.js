import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { name as appName } from './app.json';

import Routes from './src/config/routes';

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
