import React, {useEffect, useState} from 'react';
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
  const [percentagesUpdate, setPercentagesUpdate]: any = useState(0);
  useEffect(() => {
    if (percentages) {
      setPercentagesUpdate(percentages / 100);
    }
  }, [percentages]);

  return (
    <View style={styles(color).container}>
      <Progress.Circle
        size={40}
        progress={percentagesUpdate}
        color={color}
        showsText={true}
        textStyle={{
          fontWeight: 'bold',
          fontSize: fontConstants?.small,
          color: colorConstants?.drakGray,
        }}
      />
      <View style={styles(color).textContainer}>
        <CustomTitle
          title={fundsName}
          titleColor={colorConstants?.secondary}
          fontSize={fontConstants.small}
        />
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
          fontSize={fontConstants.small}
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
  percentages: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
};

CustomPortfolioCard.defaultProps = {
  fundsName: '',
  unit: 0,
  investment: '',
  percentages: 0,
  color: colorConstants?.primary,
};
export default CustomPortfolioCard;
