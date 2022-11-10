import {useMutation, useQuery, useQueryClient} from 'react-query';
import {languageTxt} from '../../utils/constants/languageTxt';
import {getMappedAccountApi, loginApi, signUpApi} from './api';

const useLogin = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('login', {
    mutationFn: ({username, password}) => loginApi(username, password),
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
  });

  return useMutation('login');
};

const useSignUp = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('signUp', {
    mutationFn: ({
      title,
      email,
      userID,
      cellNumber,
      accCode,
      cnic,
      dateofBirth,
      accountType,
    }) =>
      signUpApi(
        title,
        email,
        userID,
        cellNumber,
        accCode,
        cnic,
        dateofBirth,
        accountType,
      ),
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
  });

  return useMutation('signUp');
};

const useMappedAccountApi = (
  username: string,
  initialData: any = undefined,
) => {
  return useQuery(
    [languageTxt?.reactQueryKeys?.dashboard?.mappedAccount, username],
    () => getMappedAccountApi(username),
    {
      select: data => data,
      initialData,
    },
  );
};

export {useLogin, useSignUp, useMappedAccountApi};
