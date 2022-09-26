import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';

import Skeleton from '../../../shared/Skeleton';

const AccountStatement = () => {
  return (
    <Skeleton
      isBack={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.user?.accountStatement}>
      <></>
    </Skeleton>
  );
};

export default AccountStatement;
