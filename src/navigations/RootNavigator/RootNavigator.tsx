import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../utils/constants/languageTxt';

import GuestNavigator from '../GuestNavigator';
import UserNavigator from '../UserNavigator';
import Profile from '../../components/screens/Profile';
import SplashScreen from '../../components/screens/SplashScreen';

const rootStack = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={languageTxt?.reactStackKeys?.splash}>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.splash}
            component={SplashScreen}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.guest?.name}
            component={GuestNavigator}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.user?.name}
            component={UserNavigator}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.profile}
            component={Profile}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default rootStack;
