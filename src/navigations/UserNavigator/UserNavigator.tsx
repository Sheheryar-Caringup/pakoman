import React from 'react';
import {View} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {IS_IPHONE_X} from '../../utils/utils';
import {languageTxt} from '../../utils/constants/languageTxt';
import {colorConstants} from '../../utils/constants/colorConstants';
import {dimensionConstants} from '../../utils/constants/dimensionConstants';

import Home from '../../components/screens/UserScreen/Home';
import Alerts from '../../components/screens/UserScreen/Alerts';
import ETransactions from '../../components/screens/UserScreen/ETransactions';
import AddAccount from '../../components/screens/UserScreen/AddAccount';
import AccountStatement from '../../components/screens/UserScreen/AccountStatement';

import TabBarAdvancedButton from '../../components/shared/TabBarAdvancedButton';

const BottomBar = createBottomTabNavigator();

const UserNavigator = () => {
  return (
    <BottomBar.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && <View style={styles.xFillLine} />}
        </View>
      )}
      initialRouteName={languageTxt?.reactStackKeys?.user?.home}
      screenOptions={{
        tabBarActiveTintColor: colorConstants?.gold,
        tabBarInactiveTintColor: colorConstants?.gray,
        headerShown: false,
      }}>
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.user?.alerts}
        component={Alerts}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="alert"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.user?.eTransactions}
        component={ETransactions}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="swap-horizontal"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.user?.home}
        component={Home}
        options={{
          tabBarButton: props => (
            <TabBarAdvancedButton bgColor={colorConstants?.iconBg} {...props} />
          ),
        }}
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.user?.addAccount}
        component={AddAccount}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bank-plus"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.user?.statement}
        component={AccountStatement}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="file-document-multiple"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
    </BottomBar.Navigator>
  );
};

export default UserNavigator;
