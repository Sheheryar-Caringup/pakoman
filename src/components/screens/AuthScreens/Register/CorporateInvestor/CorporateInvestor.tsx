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

const CorporateInvestor = () => {
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
      txtLoginID: '',
      txtAccRegCode: '',
      txtCompanyName: '',
      txtNTN: '',
      txtCompIncorporationNumber: '',
      txtAuthPersonName: '',
      txtAuthPersonCNIC: '',
      txtEmail: '',
      txtRegContact: '',
      txtRegAddress: '',
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
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={LogoIcon} style={styles.logo} />
          <CustomTitle
            title={languageTxt?.servicesRequestFormForCorporateInvestorsCap}
            titleColor={colorConstants?.drakGray}
            fontWeight={fontConstants?.fontWeight500}
            fontSize={fontConstants?.large}
            extraStyles={{
              textAlign: 'center',
              paddingTop: dimensionConstants?.paddingLarge,
            }}
          />
        </View>

        {formError && (
          <View style={styles.formValidation}>
            <ValidationMessage children={formError} />
          </View>
        )}

        <View style={styles.loginContainer}>
          {/* txtLoginID */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtLoginID ? true : false}
                errorMsg={errors.txtLoginID ? errors.txtLoginID.message : ''}
                placeHolder={languageTxt?.txtUserName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value.trim())}
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
          {/* txtAccRegCode */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtAccRegCode ? true : false}
                errorMsg={
                  errors.txtAccRegCode ? errors.txtAccRegCode?.message : ''
                }
                placeHolder={languageTxt?.txtAccRegCode}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtAccRegCode"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtAccRegCodeError,
              },
            }}
          />
          {/* txtCompanyName */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtCompanyName ? true : false}
                errorMsg={
                  errors.txtCompanyName ? errors.txtCompanyName?.message : ''
                }
                placeHolder={languageTxt?.txtCompanyName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtCompanyName"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtCompanyNameError,
              },
            }}
          />
          {/* txtNTN */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtNTN ? true : false}
                errorMsg={errors.txtNTN ? errors.txtNTN?.message : ''}
                placeHolder={languageTxt?.txtNTN}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtNTN"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtNTNError,
              },
            }}
          />
          {/* txtCompIncorporationNumber */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtCompIncorporationNumber ? true : false}
                errorMsg={
                  errors.txtCompIncorporationNumber
                    ? errors.txtCompIncorporationNumber?.message
                    : ''
                }
                placeHolder={languageTxt?.txtCompIncorporationNumber}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtCompIncorporationNumber"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtCompIncorporationNumberError,
              },
            }}
          />
          {/* txtAuthPersonName */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtAuthPersonName ? true : false}
                errorMsg={
                  errors.txtAuthPersonName
                    ? errors.txtAuthPersonName?.message
                    : ''
                }
                placeHolder={languageTxt?.txtAuthPersonName}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtAuthPersonName"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtAuthPersonNameError,
              },
            }}
          />
          {/* txtAuthPersonCNIC */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtAuthPersonCNIC ? true : false}
                errorMsg={
                  errors.txtAuthPersonCNIC
                    ? errors.txtAuthPersonCNIC?.message
                    : ''
                }
                placeHolder={languageTxt?.txtAuthPersonCNIC}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtAuthPersonCNIC"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtAuthPersonCNICError,
              },
            }}
          />
          {/* txtEmail */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtEmail ? true : false}
                errorMsg={errors.txtEmail ? errors.txtEmail?.message : ''}
                placeHolder={languageTxt?.txtEmail}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtEmail"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtEmailError,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: languageTxt.emailPatternError,
              },
            }}
          />
          {/* txtRegContact */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtRegContact ? true : false}
                errorMsg={
                  errors.txtRegContact ? errors.txtRegContact?.message : ''
                }
                placeHolder={languageTxt?.txtRegContact}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtRegContact"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtRegContactError,
              },
            }}
          />
          {/* txtRegAddress */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                error={errors.txtRegAddress ? true : false}
                errorMsg={
                  errors.txtRegAddress ? errors.txtRegAddress?.message : ''
                }
                placeHolder={languageTxt?.txtRegAddress}
                autoCapitalize="none"
                onBlur={onBlur}
                value={value}
                handleChange={(value: String) => onChange(value)}
              />
            )}
            name="txtRegAddress"
            rules={{
              required: {
                value: true,
                message: languageTxt?.txtRegAddressError,
              },
            }}
          />

          <CustomDoubleButton
            primaryButtonText={languageTxt?.submitRequest}
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

export default CorporateInvestor;
