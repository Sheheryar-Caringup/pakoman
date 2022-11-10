import {useMutation, useQuery, useQueryClient} from 'react-query';

import {languageTxt} from '../../utils/constants/languageTxt';
import {getDashboardChartInfoApi, getGenerateAccountStatmentApi} from './api';

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

const useGenerateAccountStatment = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults(
    languageTxt?.reactQueryKeys?.generateAccountStatment,
    {
      mutationFn: ({dateFrom, dateTo}) =>
        getGenerateAccountStatmentApi(dateFrom, dateTo),
      onMutate: async variables => {
        const {onSuccessCb, onErrorCb} = variables;
        return {onSuccessCb, onErrorCb};
      },
      onSuccess: (result, variables, context) => {
        if (context.onSuccessCb) {
          context.onSuccessCb(result);
        }
      },
      onError: (error, variables, context) => {
        if (context.onErrorCb) {
          context.onErrorCb(error);
        }
      },
    },
  );

  return useMutation(languageTxt?.reactQueryKeys?.generateAccountStatment);
};

export {useDashboardChartInfo, useGenerateAccountStatment};
