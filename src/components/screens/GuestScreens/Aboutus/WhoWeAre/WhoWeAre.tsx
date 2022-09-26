import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';

const WhoWeAre = () => {
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.whoWeAre}
      isBottomNav={true}>
      <></>
    </Skeleton>
  );
};

export default WhoWeAre;
