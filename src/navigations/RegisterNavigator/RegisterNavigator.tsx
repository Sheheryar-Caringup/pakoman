import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../utils/constants/languageTxt';
import {colorConstants} from '../../utils/constants/colorConstants';

import InvestorTypes from '../../components/screens/AuthScreens/Register/InvestorTypes';
import PensionInvestor from '../../components/screens/AuthScreens/Register/PensionInvestor';
import IndividualInvestor from '../../components/screens/AuthScreens/Register/IndividualInvestor';
import CorporateInvestor from '../../components/screens/AuthScreens/Register/CorporateInvestor';
import SahulatSarmayakari from '../../components/screens/AuthScreens/Register/SahulatSarmayakari';

const RegisterNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={
        languageTxt?.reactStackKeys?.auth?.register?.investorTypes
      }>
      <Stack.Group
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.investorTypes}
          component={InvestorTypes}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.corporateInvestor}
          component={CorporateInvestor}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.individualInvestor}
          component={IndividualInvestor}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.pensionInvestor}
          component={PensionInvestor}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.sahulatSarmayakari}
          component={SahulatSarmayakari}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
