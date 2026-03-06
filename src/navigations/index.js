import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfleScreen';
import { ROUTES } from '../utils';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerStyle: { backgroundColor: '#f8bad1ff' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} options={{ title: 'Sign up' }} />
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}