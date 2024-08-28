import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  EmployeeListScreen,
  EmployeeListWebViewScreen,
  HomeScreen,
} from '../screens';
import { SCREEN_KEY, SCREEN_NAME } from '../utils';

type ScreenParamList = {
  Home: undefined;
  EmployeeListScreen: undefined;
  EmployeeListWebViewScreen: undefined;
};

export type NavigationProps = NavigationProp<ScreenParamList>;

const Stack = createNativeStackNavigator<ScreenParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_KEY.Home}
          component={HomeScreen}
          options={{ headerTitle: SCREEN_NAME.Home }}
        />
        <Stack.Screen
          name={SCREEN_KEY.EmployeeListScreen}
          component={EmployeeListScreen}
          options={{ headerTitle: SCREEN_NAME.EmployeeListScreen }}
        />
        <Stack.Screen
          name={SCREEN_KEY.EmployeeListWebViewScreen}
          component={EmployeeListWebViewScreen}
          options={{ headerTitle: SCREEN_NAME.EmployeeListWebViewScreen }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
