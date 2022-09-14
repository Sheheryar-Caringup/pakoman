import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {dimensionConstants} from '../../utils/constants/dimensionConstants';
import {colorConstants} from '../../utils/constants/colorConstants';
import {shadowConstants} from '../../utils/constants/shadowConstants';
import {styles} from './styles';

import Home from '../../components/screens/Home';
// import MoreStackNavigator from '../MoreNavigator/MoreNavigator';
// import ClearYourDoubtsNavigator from '../ClearYourDoubtsNavigator';
// import CourseNavigator from '../CourseNavigator';
// import LiveClassNavigator from '../LiveClassNavigator';
// import GroupStackNavigator from '../GroupNavigator/GroupNavigator';

const Tab = createMaterialBottomTabNavigator();

const tabIcons: any = {
  HOME: 'home-outline',
  HOMEACTIVE: 'home',
  ALARM: 'alarm-outline',
  ALARMACTIVE: 'alarm',
  GROUPS: 'cash-outline',
  GROUPSACTIVE: 'cash',
  DOUBTS: 'person-add-outline',
  DOUBTSACTIVE: 'person-add',
  MORE: 'clipboard-outline',
  MOREACTIVE: 'clipboard',
};

const getTabIcon = (tabKey: string) => {
  return {
    tabBarIcon: ({color}: any) => (
      <View style={styles(color).icon}>
        <Icon
          name={
            color == colorConstants?.primary
              ? tabIcons[tabKey + 'ACTIVE']
              : tabIcons[tabKey]
          }
          size={dimensionConstants?.iconSmall}
          color={color}
        />
      </View>
    ),
  };
};

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName={'Home'}
      activeColor={colorConstants?.primary}
      inactiveColor={colorConstants?.gray}
      barStyle={{
        borderTopWidth: 0.2,
        backgroundColor: colorConstants?.white,
        borderColor: colorConstants?.xLightBlackOpacity,
        paddingBottom: dimensionConstants?.paddingXSmall,
        ...shadowConstants,
      }}
      screenOptions={{
        tabBarLabel: '',
      }}>
      <Tab.Screen name={'Home'} component={Home} options={getTabIcon('HOME')} />
      <Tab.Screen
        name={'AlarmStack'}
        component={Home}
        options={getTabIcon('ALARM')}
      />
      <Tab.Screen
        name={'ClearYourDoubtsStack'}
        component={Home}
        options={getTabIcon('DOUBTS')}
      />
      <Tab.Screen
        name={'GroupsStack'}
        component={Home}
        options={getTabIcon('GROUPS')}
      />
      <Tab.Screen
        name={'MoreStack'}
        component={Home}
        options={getTabIcon('MORE')}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
