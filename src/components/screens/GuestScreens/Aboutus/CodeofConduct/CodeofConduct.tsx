import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';

const CodeofConduct = () => {
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.codeofConduct}
      isBottomNav={true}>
      <></>
    </Skeleton>
  );
};

export default CodeofConduct;
