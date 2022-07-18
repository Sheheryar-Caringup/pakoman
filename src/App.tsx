import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import RootNavigator from './navigations/RootNavigator';
import {colorConstants} from './utils/constants/colorConstants';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colorConstants?.white}}>
      {Platform?.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
