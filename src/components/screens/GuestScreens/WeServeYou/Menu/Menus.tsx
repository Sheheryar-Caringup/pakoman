import React from 'react';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import Skeleton from '../../../../shared/Skeleton';

const Menus = () => {
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.weServeYou?.name}
      isBottomNav={true}
      isBack={false}>
      <></>
    </Skeleton>
  );
};

export default Menus;
