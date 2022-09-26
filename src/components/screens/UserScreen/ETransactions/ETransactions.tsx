import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';

import Skeleton from '../../../shared/Skeleton';

const ETransactions = () => {
  return (
    <Skeleton
      isBack={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.user?.eTransactions}>
      <></>
    </Skeleton>
  );
};

export default ETransactions;
