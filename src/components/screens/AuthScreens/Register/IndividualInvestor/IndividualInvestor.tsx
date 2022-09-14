import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Loader from '../../../../shared/Loader';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomSnack from '../../../../shared/CustomSnack';
import CustomInput from '../../../../shared/CustomInput';
import ValidationMessage from '../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../shared/CustomDoubleButton';

import LogoIcon from '../../../../../assets/logo/logo.png';

const IndividualInvestor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);

  const navigation = useNavigation();
  // const signupMutation = useSignUp();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      txtName: '',
      txtRegEmail: '',
      txtLoginID: '',
      txtRegMobileNum: '',
      txtRegNo: '',
      txtCNIC: '',
      txtDOB: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const mutationArgs = {
      data,
      onSuccessCb,
      onErrorCb,
    };
    // signupMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      setErrorSnack('');
      // navigation.replace(theme?.strings?.otpScreen);
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
      <KeyboardAwareScrollView style={styles?.container}>
        <View style={styles?.logoContainer}>
          <Image source={LogoIcon} style={styles?.logo} />
          <CustomTitle
            title={languageTxt?.onlineServicesRequestCap}
            fontWeight={fontConstants?.fontWeight500}
            fontSize={fontConstants?.large}
            titleColor={colorConstants?.drakGray}
            extraStyles={{
              textAlign: 'center',
              paddingTop: dimensionConstants?.paddingLarge,
            }}
          />

          <CustomTitle
            title={languageTxt?.investorWelcome}
            fontSize={fontConstants?.small}
            titleColor={colorConstants?.primary}
            extraStyles={{
              textAlign: 'center',
              paddingTop: dimensionConstants?.paddingXSmall,
            }}
          />
          <CustomTitle
            title={languageTxt?.investorWelcome2}
            fontSize={fontConstants?.small}
            titleColor={colorConstants?.primary}
            extraStyles={{
              textAlign: 'center',
              paddingTop: dimensionConstants?.paddingXSmall,
            }}
          />
          <CustomTitle
            title={languageTxt?.investorWelcome3}
            fontSize={fontConstants?.small}
            titleColor={colorConstants?.primary}
            extraStyles={{
              textAlign: 'center',
              paddingTop: dimensionConstants?.paddingXSmall,
            }}
          />
        </View>

        {formError && (
          <View style={styles?.formValidation}>
            <ValidationMessage children={formError} />
          </View>
        )}

        <View style={styles?.loginContainer}>
          {/* txtName */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtName ? true : false}
                errorMsg={errors.txtName ? errors.txtName.message : ''}
                placeHolder={languageTxt?.txtName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value.trim())}
              />
            )}
            name="txtName"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtNameError,
              },
            }}
          />
          {/* txtRegEmail */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtRegEmail ? true : false}
                errorMsg={errors.txtRegEmail ? errors.txtRegEmail?.message : ''}
                placeHolder={languageTxt?.txtRegEmail}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtRegEmail"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtRegEmailError,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: languageTxt.emailPatternError,
              },
            }}
          />
          {/* txtLoginID */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtLoginID ? true : false}
                errorMsg={errors.txtLoginID ? errors.txtLoginID?.message : ''}
                placeHolder={languageTxt?.txtUserName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtLoginID"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtUserNameError,
              },
            }}
          />
          {/* txtRegMobileNum */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtRegMobileNum ? true : false}
                errorMsg={
                  errors.txtRegMobileNum ? errors.txtRegMobileNum?.message : ''
                }
                placeHolder={languageTxt?.txtRegMobileNum}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtRegMobileNum"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtRegMobileNumError,
              },
            }}
          />
          {/* txtRegNo */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtRegNo ? true : false}
                errorMsg={errors.txtRegNo ? errors.txtRegNo?.message : ''}
                placeHolder={languageTxt?.txtRegNo}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtRegNo"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtRegNoError,
              },
            }}
          />
          {/* txtCNIC */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtCNIC ? true : false}
                errorMsg={errors.txtCNIC ? errors.txtCNIC?.message : ''}
                placeHolder={languageTxt?.txtCNIC}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtCNIC"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtCNICError,
              },
            }}
          />
          {/* txtDOB */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtDOB ? true : false}
                errorMsg={errors.txtDOB ? errors.txtDOB?.message : ''}
                placeHolder={languageTxt?.txtDOB}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtDOB"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtDOBError,
              },
            }}
          />

          <CustomDoubleButton
            primaryButtonText={languageTxt?.onlineServicesRequest}
            secondaryButtonText={languageTxt?.clear}
            // isDisabledPrimary={signupMutation?.isLoading}
            handlePrimaryOnPress={handleSubmit(onSubmit)}
            handleSecondaryOnPress={() => {
              clearErrors();
              reset();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default IndividualInvestor;
