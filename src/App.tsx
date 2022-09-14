import React, {useState} from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import RootNavigator from './navigations/RootNavigator';
import {colorConstants} from './utils/constants/colorConstants';
import AppIntroCustomSlider from './components/screens/AppIntroCustomSlider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colorConstants?.white}}>
      {Platform?.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
      {showRealApp ? (
        <RootNavigator />
      ) : (
        <AppIntroCustomSlider setShowRealApp={setShowRealApp} />
      )}
    </SafeAreaView>
  );
};

export default App;
