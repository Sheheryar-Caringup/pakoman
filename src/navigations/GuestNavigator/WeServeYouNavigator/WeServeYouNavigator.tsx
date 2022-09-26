import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/GuestScreens/WeServeYou/Menu';

const WeServeYouNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={languageTxt?.reactStackKeys?.guest?.weServeYou?.menus}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.weServeYou?.menus}
          component={Menus}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default WeServeYouNavigator;
