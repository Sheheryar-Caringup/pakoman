import React from 'react';

import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {styles} from './styles';

import Skeleton from '../../../../../shared/Skeleton';
import {Text, View} from 'react-native';
import CustomTitle from '../../../../../shared/CustomTitle';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';

const Declaration = () => {
  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
          ?.declaration
      }>
      <View style={styles.container}>
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration1}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration2}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration3}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration4}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration5}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration6}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={languageTxt.eTransactionsDeclaration7}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
      </View>
    </Skeleton>
  );
};

export default Declaration;
