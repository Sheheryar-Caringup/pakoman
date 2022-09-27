import React from 'react';

import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {styles} from './styles';

import Skeleton from '../../../../../shared/Skeleton';

const Declaration = () => {
  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
          ?.declaration
      }>
      <></>
    </Skeleton>
  );
};

export default Declaration;
