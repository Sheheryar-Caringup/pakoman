import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../../shared/Skeleton';

const Form = () => {
  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion?.name
      }>
      <></>
    </Skeleton>
  );
};

export default Form;
