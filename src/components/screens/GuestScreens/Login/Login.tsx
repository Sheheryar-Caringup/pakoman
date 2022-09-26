import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {useLogin} from '../../../../modules/mobile_integration/hooks';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';
import {useAuthentication} from '../../../../utils/globalHooks';

import Loader from '../../../shared/Loader';
import CustomTitle from '../../../shared/CustomTitle';
import CustomSnack from '../../../shared/CustomSnack';
import CustomInput from '../../../shared/CustomInput';
import ValidationMessage from '../../../shared/ValidationMessage';
import CustomHandleTitle from '../../../shared/CustomHandleTitle';
import CustomDoubleButton from '../../../shared/CustomDoubleButton';

import LogoIcon from '../../../../assets/logo/logo.png';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);

  const {addAccCode, addUserProfile}: any = useAuthentication();

  const [passwordStatus, setPasswordStatus] = useState(true);

  const navigation = useNavigation();
  const loginMutation = useLogin();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const {username, password} = data;
    const mutationArgs: any = {
      username,
      password,
      onSuccessCb,
      onErrorCb,
    };

    loginMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      if (data?.success) {
        addAccCode(data?.accCode);
        addUserProfile(data?.userProfile);

        if (data?.code == '1') {
          navigation.navigate(languageTxt?.reactStackKeys?.user?.name);
        }
      }
      setErrorSnack(data?.message);
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };

  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setFormError(error?.ValidationMessage);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <KeyboardAwareScrollView style={styles?.container}>
        <View style={styles?.logoContainer}>
          <Image source={LogoIcon} style={styles?.logo} />
        </View>

        <CustomTitle
          title={languageTxt?.welcomeMsg}
          titleColor={colorConstants?.primary}
          fontWeight={fontConstants?.fontWeight600}
          fontSize={fontConstants?.header}
          extraStyles={{
            textAlign: 'center',
            padding: dimensionConstants?.paddingXXXLarge,
            paddingBottom: dimensionConstants?.padding,
          }}
        />

        {formError && (
          <View style={styles?.formValidation}>
            <ValidationMessage children={formError} />
          </View>
        )}

        <View style={styles?.loginContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors && !!errors?.username}
                errorMsg={errors && errors?.username?.message}
                placeHolder={languageTxt?.txtUserName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value.trim())}
                leftIcon={
                  <MaterialCommunityIcons
                    name="account"
                    size={dimensionConstants?.iconXSmall}
                    color={colorConstants?.gray}
                  />
                }
              />
            )}
            name="username"
            rules={{
              required: {
                value: true,
                message: languageTxt?.usernameError,
              },
            }}
          />

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors && !!errors?.password}
                errorMsg={
                  errors && errors?.password && errors?.password?.message
                }
                autoCapitalize="none"
                placeHolder={languageTxt?.txtPassword}
                value={value}
                onBlur={onBlur}
                handleChange={(value: String) => onChange(value)}
                secureTextEntry={passwordStatus}
                leftIcon={
                  <MaterialCommunityIcons
                    name="lock"
                    size={dimensionConstants?.iconXSmall}
                    color={colorConstants?.gray}
                  />
                }
                rightIcon={
                  <>
                    {passwordStatus ? (
                      <MaterialCommunityIcons
                        name="eye-off"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.lightGray}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="eye"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    )}
                  </>
                }
                rightIconClick={() => setPasswordStatus(!passwordStatus)}
                onEndEditing={handleSubmit(onSubmit)}
                blurOnSubmit={true}
              />
            )}
            name="password"
            rules={{
              required: {
                value: true,
                message: languageTxt?.passwordError,
              },
            }}
          />

          <CustomHandleTitle
            title={languageTxt?.forgotUsername}
            titleColor={colorConstants?.gray}
            extraStyles={{
              alignSelf: 'flex-end',
            }}
            handleOnPress={() => {}}
          />

          <CustomDoubleButton
            primaryButtonText={languageTxt?.login}
            secondaryButtonText={languageTxt?.registerNow}
            isDisabledPrimary={loginMutation?.isLoading}
            handlePrimaryOnPress={handleSubmit(onSubmit)}
            handleSecondaryOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.investorTypes,
              );
            }}
          />

          <CustomHandleTitle
            title={languageTxt?.sahulatSarmayakariAccountOpen}
            titleColor={colorConstants?.gray}
            textExtraStyles={{
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            handleOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.sahulatSarmayakari,
              );
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default Login;
