import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';

import Skeleton from '../../../shared/Skeleton';

const Alerts = () => {
  return (
    <Skeleton
      isBack={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.user?.alerts}>
      <></>
    </Skeleton>
  );
};

export default Alerts;
