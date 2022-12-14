import React, {useState} from 'react';
import {View} from 'react-native';
import moment from 'moment';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';
import {PeriodBy} from '../../../../shared/CustomDatePicker/CustomDatePicker.interface';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomSnack from '../../../../shared/CustomSnack';
import CustomInput from '../../../../shared/CustomInput';
import ValidationMessage from '../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../shared/CustomDoubleButton';
import dateFormat from '../../../../../utils/constants/dateFormat';
import CustomDatePicker from '../../../../shared/CustomDatePicker';

const PensionInvestor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [showModalDOB, setShowModalDOB] = useState(false);

  const navigation = useNavigation();
  // const signupMutation = useSignUp();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    getValues,
    setValue,
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
      <Skeleton
        title={languageTxt?.reactStackKeys?.auth?.register?.pensionInvestor}
        isLoading={isLoading}
        isBottomNav={true}>
        <>
          <CustomTitle
            title={languageTxt?.onlineServicesRequest}
            titleColor={colorConstants?.drakGray}
            fontWeight={fontConstants?.fontWeight600}
            fontSize={fontConstants?.header}
            extraStyles={{
              textAlign: 'center',
              padding: dimensionConstants?.paddingXXXLarge,
              paddingBottom: dimensionConstants?.padding,
            }}
          />

          <View style={styles?.logoContainer}>
            <CustomTitle
              title={languageTxt?.investorWelcome}
              fontSize={fontConstants?.small}
              extraStyles={{
                textAlign: 'center',
              }}
            />
            <CustomTitle
              title={languageTxt?.investorWelcome2}
              fontSize={fontConstants?.small}
              extraStyles={{
                textAlign: 'center',
              }}
            />
            <CustomTitle
              title={languageTxt?.investorWelcome3}
              fontSize={fontConstants?.small}
              extraStyles={{
                textAlign: 'center',
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
                  errorMsg={
                    errors.txtRegEmail ? errors.txtRegEmail?.message : ''
                  }
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
                    errors.txtRegMobileNum
                      ? errors.txtRegMobileNum?.message
                      : ''
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
                  disabled={true}
                  value={value}
                  rightIcon={
                    <MaterialCommunityIcons
                      name="calendar"
                      size={dimensionConstants?.iconSmall}
                      color={colorConstants?.primary}
                    />
                  }
                  rightIconClick={() => {
                    setShowModalDOB(true);
                  }}
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

            <CustomDatePicker
              showDropDown={showModalDOB}
              setShowDropDown={setShowModalDOB}
              modalTitle={'Select Date of Birth'}
              data={
                getValues('txtDOB')
                  ? {
                      startDate: moment(
                        getValues('txtDOB'),
                        dateFormat.DOB_FORMAT,
                      ).format(dateFormat.CALENDAR_FORMAT),
                      endDate: moment(
                        getValues('txtDOB'),
                        dateFormat.DOB_FORMAT,
                      ).format(dateFormat.CALENDAR_FORMAT),
                      period: PeriodBy.BY_DAY,
                    }
                  : {
                      startDate: '',
                      endDate: '',
                      period: PeriodBy.BY_DAY,
                    }
              }
              onChange={(date: any) => {
                const dateDOB = moment(
                  date?.startDate,
                  dateFormat.CALENDAR_FORMAT,
                ).format(dateFormat.DOB_FORMAT);
                setValue('txtDOB', dateDOB);
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
        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default PensionInvestor;
