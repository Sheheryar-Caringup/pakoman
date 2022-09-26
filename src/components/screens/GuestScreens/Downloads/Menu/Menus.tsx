import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';

const Menus = () => {
  const navigation = useNavigation();

  const data = [
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.fundManagersReport,
      icon: (
        <MaterialCommunityIcons
          name="chart-bar"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.navHistory,
      icon: (
        <MaterialCommunityIcons
          name="history"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.applicationForms,
      icon: (
        <MaterialCommunityIcons
          name="file-document-edit"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.downloads?.constitutiveDocuments,
      icon: (
        <MaterialCommunityIcons
          name="file-document-multiple"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.financialStatements,
      icon: (
        <MaterialCommunityIcons
          name="chart-bar-stacked"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.howToInvest,
      icon: (
        <MaterialCommunityIcons
          name="hand-coin"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.proxyVotingPolicy,
      icon: (
        <MaterialCommunityIcons
          name="file-find"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.downloads?.provisioningPolicyFinal,
      icon: (
        <MaterialCommunityIcons
          name="television-guide"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.fatwah,
      icon: (
        <MaterialCommunityIcons
          name="mosque"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.downloads?.complianceCertificate,
      icon: (
        <MaterialCommunityIcons
          name="certificate"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
  ];

  const renderCard = (item: any) => {
    return (
      <CustomMenuCard
        title={item?.title}
        icon={item?.icon}
        onPress={() => {
          navigation.navigate(item?.title);
        }}
      />
    );
  };

  return (
    <Skeleton
      isBack={false}
      isScroll={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.guest?.downloads?.name}>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default Menus;
