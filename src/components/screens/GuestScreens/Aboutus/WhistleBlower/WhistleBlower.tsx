import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';

const WhistleBlower = () => {
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.whistleBlower}
      isBottomNav={true}>
      <></>
    </Skeleton>
  );
};

export default WhistleBlower;
