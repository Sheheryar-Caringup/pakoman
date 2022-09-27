import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {styles} from './styles';

import Skeleton from '../../../../shared/Skeleton';

const Summary = () => {
  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.summary
          ?.transactionSummary
      }>
      <></>
    </Skeleton>
  );
};

export default Summary;
