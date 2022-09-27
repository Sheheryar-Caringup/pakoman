import React, {useState} from 'react';
import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../shared/Skeleton';
import CustomTitle from '../../../shared/CustomTitle';
import CustomInput from '../../../shared/CustomInput';
import CustomSnack from '../../../shared/CustomSnack';
import ValidationMessage from '../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../shared/CustomDoubleButton';
import CustomDatePicker from '../../../shared/CustomDatePicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import dateFormat from '../../../../utils/constants/dateFormat';
import {PeriodBy} from '../../../shared/CustomDatePicker/CustomDatePicker.interface';
import CustomButton from '../../../shared/CustomButton';

const AccountStatement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [showDropDownStartDate, setShowDropDownStartDate] = useState(false);
  const [showDropDownEndDate, setShowDropDownEndDate] = useState(false);
  const [data, setData] = useState({
    startDate: moment().subtract(7, 'd').format(dateFormat.CALENDAR_FORMAT),
    endDate: moment().format(dateFormat.CALENDAR_FORMAT),
    period: PeriodBy.BY_WEEK,
  });

  const navigation = useNavigation();
  // const signupMutation = useSignUp();

  const {
    control,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      to: data?.startDate,
      from: data?.endDate,
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    // setIsLoading(true);
    // clearErrors();
    // setFormError(null);
    // const mutationArgs = {
    //   data,
    //   onSuccessCb,
    //   onErrorCb,
    // };
    // // signupMutation.mutate(mutationArgs);
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
        title={languageTxt?.reactStackKeys?.user?.accountStatement}
        isLoading={isLoading}
        isBottomNav={true}
        isBack={false}>
        <>
          <CustomTitle
            title={`${languageTxt?.reactStackKeys?.user?.accountStatement} Request`}
            titleColor={colorConstants?.drakGray}
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
            {/* txtStartDate */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.to ? true : false}
                  errorMsg={errors.to ? errors.to?.message : ''}
                  placeHolder={languageTxt?.txtStartDate}
                  disabled={true}
                  onBlur={onBlur}
                  value={value}
                  rightIcon={
                    <MaterialCommunityIcons
                      name="calendar"
                      size={dimensionConstants?.iconSmall}
                      color={colorConstants?.primary}
                    />
                  }
                  rightIconClick={() => {
                    setShowDropDownStartDate(true);
                  }}
                />
              )}
              name="to"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtStartDateError,
                },
              }}
            />

            {/* txtEndDate */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.from ? true : false}
                  errorMsg={errors.from ? errors.from?.message : ''}
                  placeHolder={languageTxt?.txtEndDate}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  disabled={true}
                  rightIcon={
                    <MaterialCommunityIcons
                      name="calendar"
                      size={dimensionConstants?.iconSmall}
                      color={colorConstants?.primary}
                    />
                  }
                  rightIconClick={() => {
                    setShowDropDownEndDate(true);
                  }}
                />
              )}
              name="from"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtEndDateError,
                },
              }}
            />

            <CustomDatePicker
              showDropDown={showDropDownStartDate}
              setShowDropDown={setShowDropDownStartDate}
              modalTitle={'Select Start Date'}
              data={data}
              onChange={(date: any) => {
                if (
                  moment(data?.endDate, dateFormat.CALENDAR_FORMAT) >
                  moment(date?.startDate, dateFormat.CALENDAR_FORMAT)
                ) {
                  setData({...data, startDate: date?.startDate});
                } else {
                  setValue('from', date?.endDate);
                  setData({
                    ...data,
                    startDate: date?.startDate,
                    endDate: date?.endDate,
                  });
                }
                setValue('to', date?.startDate);
              }}
            />

            <CustomDatePicker
              showDropDown={showDropDownEndDate}
              setShowDropDown={setShowDropDownEndDate}
              modalTitle={'Select End Date'}
              data={data}
              minDate={data?.startDate}
              onChange={(date: any) => {
                if (
                  moment(data?.startDate, dateFormat.CALENDAR_FORMAT) <
                  moment(date?.endDate, dateFormat.CALENDAR_FORMAT)
                ) {
                  setData({...data, endDate: date?.endDate});
                } else {
                  setValue('to', date?.startDate);
                  setData({
                    ...data,
                    startDate: date?.startDate,
                    endDate: date?.endDate,
                  });
                }
                setValue('from', date?.endDate);
              }}
            />
            <CustomButton
              buttonText={languageTxt?.generateReport}
              // isDisabled={signupMutation?.isLoading}
              handleOnPress={handleSubmit(onSubmit)}
            />
          </View>
        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default AccountStatement;
