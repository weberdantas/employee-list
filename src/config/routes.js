import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LandingPage, Home } from '../screens';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
