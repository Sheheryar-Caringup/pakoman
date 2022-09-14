import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';

import {styles} from './styles';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';

import {CustomCardInterface} from './CustomPortfolioCard.interface';

import CustomTitle from '../CustomTitle';

const CustomPortfolioCard = ({
  fundsName,
  unit,
  investment,
  percentages,
  color,
}: CustomCardInterface) => {
  return (
    <View style={styles(color).container}>
      <Progress.Circle
        size={40}
        progress={0.4}
        color={color}
        showsText={true}
        textStyle={{
          fontWeight: 'bold',
          fontSize: fontConstants?.small,
          color: colorConstants?.drakGray,
        }}
      />
      <View>
        <CustomTitle title={fundsName} titleColor={colorConstants?.secondary} />
        <CustomTitle
          title={`Holding Percentages ${percentages}%`}
          titleColor={colorConstants?.secondaryLight}
          fontSize={fontConstants?.small}
        />
      </View>
      <View style={styles(color).rightSide}>
        <CustomTitle
          title={`PKR ${investment}`}
          titleColor={colorConstants?.secondary}
        />
        <CustomTitle
          title={`Units ${unit}`}
          titleColor={colorConstants?.secondaryLight}
          fontSize={fontConstants?.small}
        />
      </View>
    </View>
  );
};

CustomPortfolioCard.propTypes = {
  fundsName: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  investment: PropTypes.string.isRequired,
  percentages: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

CustomPortfolioCard.defaultProps = {
  fundsName: '',
  unit: '',
  investment: '',
  percentages: '',
  color: colorConstants?.primary,
};
export default CustomPortfolioCard;
