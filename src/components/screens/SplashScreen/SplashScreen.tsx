import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {getAccCode} from '../../../config/asyncStorage/acc_code';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {useAuthentication} from '../../../utils/globalHooks';
import {
  getService,
  getServiceJSON,
} from '../../../config/asyncStorage/asynDataStore';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {addUserProfile}: any = useAuthentication();

  useEffect(() => {
    getAccCode().then(results => {
      if (results) {
        navigation.navigate(languageTxt?.reactStackKeys?.user?.name);
      } else {
        navigation.navigate(languageTxt?.reactStackKeys?.guest?.name);
      }
    });
    getServiceJSON(languageTxt?.reactAsyncStorageKeys?.userInfo).then(
      results => {
        if (results) {
          addUserProfile(results);
        }
      },
    );
  }, []);

  return <></>;
};

export default SplashScreen;
