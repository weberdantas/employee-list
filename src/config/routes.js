import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { LandingPage, Home } from '../screens';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();

  function TabsStack() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home-outline"
                color={color}
                size={focused ? size : 20}
              />
            ),
            tabBarLabel: 'Home',
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="settings-outline"
                color={color}
                size={focused ? size : 20}
              />
            ),
            tabBarLabel: 'Settings',
            headerShown: false
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen
        name="Home"
        component={TabsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
