import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import {CustomGradientCardInterface} from './CustomGradientCard.interface';
import {styles} from './styles';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const CustomGradientCard = ({
  body,
  colors,
  handleOnPress,
  isClickable,
}: CustomGradientCardInterface) => {
  if (!isClickable)
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={styles?.container}>
        <TouchableOpacity activeOpacity={1}>{body}</TouchableOpacity>
      </LinearGradient>
    );
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors}
      style={styles?.container}>
      <TouchableOpacity
        activeOpacity={dimensionConstants?.activeOpacity}
        onPress={handleOnPress}
        style={styles?.container}>
        {body}
      </TouchableOpacity>
    </LinearGradient>
  );
};

CustomGradientCard.propTypes = {
  body: PropTypes.any.isRequired,
  colors: PropTypes.array,
  handleOnPress: PropTypes.any,
  isClickable: PropTypes.bool,
};

CustomGradientCard.defaultProps = {
  body: <></>,
  colors: ['#4c669f', '#3b5998', '#192f6a'],
  handleOnPress: () => {},
  isClickable: false,
};
export default CustomGradientCard;
