import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './styles';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

import CustomTitle from '../../shared/CustomTitle';
import CustomImage from '../../shared/CustomImage';
import CustomInfoValue from '../../shared/CustomInfoValue';

const data = [
  {
    label: 'Account Title',
    value: 'Hassain Tayyab',
    icon: 'account-outline',
  },
  {
    label: 'Account Status',
    value: 'Active',
    icon: 'account-box-multiple-outline',
  },
  {
    label: 'Email',
    value: 'hassnain93@gmail.com',
    icon: 'email-outline',
  },
  {
    label: 'Account Opening Date',
    value: 'Feb 03 2022',
    icon: 'calendar-range-outline',
  },
  {
    label: 'Cell#',
    value: '+923131183445',
    icon: 'phone-outline',
  },
  {
    label: 'Account Type',
    value: 'Individual',
    icon: 'account-details-outline',
  },
  {
    label: 'Is CNIC Valid',
    value: 'Expired',
    icon: 'card-account-details-outline',
  },
  {
    label: 'Risk Level',
    value: 'Low',
    icon: 'speedometer',
  },
  {
    label: 'Zakat Status',
    value: 'Exempted',
    icon: 'hand-coin-outline',
  },
  {
    label: 'Bank Name',
    value: '---',
    icon: 'bank-outline',
  },
  {
    label: 'Bank Account',
    value: '---',
    icon: 'file-account-outline',
  },
];
const Profile = () => {
  return (
    <KeyboardAwareScrollView style={styles?.container}>
      <CustomImage
        image={
          'https://i.ibb.co/j4jrJGx/csm-man-holger-von-der-heide-interview-header-02ae36db18.webp'
        }
        imageSize={dimensionConstants?.avatarLWidth}
        extraStyles={{marginTop: dimensionConstants?.marginXLarge}}
      />

      <CustomTitle
        title="Hasnain Tayyab"
        fontSize={fontConstants?.large}
        titleColor={colorConstants?.drakGray}
        fontWeight={fontConstants?.fontWeightBold}
        extraStyles={{
          marginVertical: dimensionConstants?.margin,
          textAlign: 'center',
        }}
      />

      {data?.map((item, key) => (
        <CustomInfoValue
          label={item?.label}
          value={item?.value}
          icon={
            <MaterialCommunityIcons
              name={item?.icon}
              size={dimensionConstants?.iconXSmall}
              color={colorConstants?.primary}
            />
          }
        />
      ))}
    </KeyboardAwareScrollView>
  );
};

export default Profile;
