import {useQuery} from 'react-query';

import {languageTxt} from '../../utils/constants/languageTxt';
import {getDashboardChartInfoApi} from './api';

const useDashboardChartInfo = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.dashboard?.chartInfo,
    () => getDashboardChartInfoApi,
    {
      select: data => data,
      initialData,
    },
  );
};

export {useDashboardChartInfo};
