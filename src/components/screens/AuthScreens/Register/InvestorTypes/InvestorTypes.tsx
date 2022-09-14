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
    <KeyboardAwareScrollView style={styles?.container}>
      <View style={styles?.logoContainer}>
        <Image source={LogoIcon} style={styles?.logo} />

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

      <View style={styles?.typeContainer}>
        <CustomRegisterCard
          title={`${languageTxt?.registerAsA} ${languageTxt?.corporateInvestorTitle}`}
          description={languageTxt?.corporateInvestorDetail}
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
          title={`${languageTxt?.registerAsA} ${languageTxt?.individualInvestorTitle}`}
          description={languageTxt?.individualInvestorDetail}
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
          title={`${languageTxt?.registerAsA} ${languageTxt?.pensionInvestorTitle}`}
          description={languageTxt?.pensionInvestorDetail}
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
