import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../utils/constants/languageTxt';

import GuestNavigator from '../GuestNavigator';
import UserNavigator from '../UserNavigator';

const rootStack = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={languageTxt?.reactStackKeys?.guest?.name}>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.guest?.name}
            component={GuestNavigator}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.user?.name}
            component={UserNavigator}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default rootStack;
