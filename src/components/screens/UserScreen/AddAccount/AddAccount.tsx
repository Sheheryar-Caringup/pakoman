import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';

import Skeleton from '../../../shared/Skeleton';

const AddAccount = () => {
  return (
    <Skeleton
      isBack={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.user?.addAccount}>
      <></>
    </Skeleton>
  );
};

export default AddAccount;
