import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../utils/constants/languageTxt';

import Login from '../../components/screens/AuthScreens/Login';
import RegisterNavigator from '../RegisterNavigator';
import HomeNavigator from '../HomeNavigator';
import Profile from '../../components/screens/Profile';

const rootStack = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={languageTxt?.reactStackKeys?.auth?.login}>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.auth?.login}
            component={Login}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.auth?.register?.name}
            component={RegisterNavigator}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.home}
            component={HomeNavigator}
          />
        </RootStack.Group>
        <RootStack.Screen
          name={languageTxt?.reactStackKeys?.profile}
          component={Profile}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default rootStack;
