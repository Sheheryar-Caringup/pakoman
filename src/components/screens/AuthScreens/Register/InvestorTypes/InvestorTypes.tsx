import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import CustomTitle from '../../../../shared/CustomTitle';

import LogoIcon from '../../../../../assets/logo/logo.png';
import CustomCard from '../../../../shared/CustomCard';
import CustomButton from '../../../../shared/CustomButton';
import CustomRegisterCard from '../../../../shared/CustomRegisterCard';

const InvestorTypes = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoIcon} style={styles.logo} />

        <CustomTitle
          title={languageTxt?.selectYourInvestmentTypeCap}
          fontWeight={fontConstants?.fontWeight500}
          fontSize={fontConstants?.large}
          titleColor={colorConstants?.drakGray}
          extraStyles={{
            textAlign: 'center',
            paddingTop: dimensionConstants?.paddingLarge,
          }}
        />
      </View>

      <View style={styles.typeContainer}>
        <CustomRegisterCard
          title="Register as a Corporate Investor"
          description="Manage the investment of your Corporate Funds. From cash management to long term investments, we have options that are best suited to your institutional needs."
          handleOnPress={() => {
            navigation.navigate(
              languageTxt?.reactStackKeys?.auth?.register?.name,
              {
                screen:
                  languageTxt?.reactStackKeys?.auth?.register
                    ?.corporateInvestor,
              },
            );
          }}
        />

        <CustomRegisterCard
          title="Register as an Individual Investor"
          description="Manage your own Savings and Investments. The broad array of investment options offered by AGIML cover multiple risk/return profiles to enable you to make an investment appropriate for your needs."
          handleOnPress={() => {
            navigation.navigate(
              languageTxt?.reactStackKeys?.auth?.register?.name,
              {
                screen:
                  languageTxt?.reactStackKeys?.auth?.register
                    ?.individualInvestor,
              },
            );
          }}
        />

        <CustomRegisterCard
          title="Register as a Pension Investor"
          description="Manage your employee retirement funds and endowment plans with confidence through our professional advisory services and wide product range."
          handleOnPress={() => {
            navigation.navigate(
              languageTxt?.reactStackKeys?.auth?.register?.name,
              {
                screen:
                  languageTxt?.reactStackKeys?.auth?.register?.pensionInvestor,
              },
            );
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default InvestorTypes;
