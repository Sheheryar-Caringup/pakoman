import React, {useState} from 'react';
import {Image, Linking, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

import Loader from '../../../shared/Loader';
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

  const [passwordStatus, setPasswordStatus] = useState(true);

  const navigation = useNavigation();
  // const loginMutation = useLogin();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      txtUserName: '',
      txtPassword: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const {txtUserName, txtPassword} = data;
    const mutationArgs = {
      txtUserName,
      txtPassword,
      onSuccessCb,
      onErrorCb,
    };
    // loginMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      setErrorSnack('');
      // navigation.replace(theme?.strings?.home);
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };

  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setFormError(errorMessage(error?.response?.data?.code));
  };

  const errorMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'UserInvaildError':
        return languageTxt?.invalidUsernameOrPassword;
      default:
        return languageTxt?.strings?.unexpectedError;
    }
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={LogoIcon} style={styles.logo} />
        </View>

        {formError && (
          <View style={styles.formValidation}>
            <ValidationMessage children={formError} />
          </View>
        )}

        <View style={styles.loginContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors && !!errors?.txtUserName}
                errorMsg={errors && errors?.txtUserName?.message}
                placeHolder={languageTxt?.txtUserName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value.trim())}
              />
            )}
            name="txtUserName"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtUserNameError,
              },
            }}
          />

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors && !!errors?.txtPassword}
                errorMsg={
                  errors && errors?.txtPassword && errors?.txtPassword?.message
                }
                autoCapitalize="none"
                placeHolder={languageTxt?.txtPassword}
                value={value}
                onBlur={onBlur}
                handleChange={(value: String) => onChange(value)}
                secureTextEntry={passwordStatus}
                rightIcon={() => (
                  <>
                    {passwordStatus ? (
                      <MaterialCommunityIcons
                        name="eye-off-outline"
                        size={dimensionConstants?.iconSmall}
                        color={colorConstants?.gray}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="eye-outline"
                        size={dimensionConstants?.iconSmall}
                        color={colorConstants?.gray}
                      />
                    )}
                  </>
                )}
                rightIconClick={() => setPasswordStatus(!passwordStatus)}
                onEndEditing={handleSubmit(onSubmit)}
                blurOnSubmit={true}
              />
            )}
            name="txtPassword"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtPasswordError,
              },
            }}
          />

          <CustomHandleTitle
            title={languageTxt?.forgotUsername}
            titleColor={colorConstants?.primary}
            handleOnPress={() => {}}
          />

          <CustomDoubleButton
            primaryButtonText={languageTxt?.login}
            secondaryButtonText={languageTxt?.openAccount}
            // isDisabledPrimary={loginMutation?.isLoading}
            handlePrimaryOnPress={handleSubmit(onSubmit)}
            handleSecondaryOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.name,
              );
            }}
          />

          <CustomHandleTitle
            title={languageTxt?.sahulatSarmayakariAccountOpen}
            titleColor={colorConstants?.primary}
            extraStyles={{
              paddingBottom: dimensionConstants?.paddingSmall,
            }}
            handleOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.name,
                {
                  screen:
                    languageTxt?.reactStackKeys?.auth?.register
                      ?.sahulatSarmayakari,
                },
              );
            }}
          />

          <CustomHandleTitle
            title={languageTxt?.copyrights}
            fontSize={fontConstants?.small}
            extraStyles={{
              alignItems: 'center',
              paddingTo: dimensionConstants?.paddingSmall,
            }}
            handleOnPress={async () => {
              await Linking.openURL('https://www.sidathyder.com.pk/');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default Login;
