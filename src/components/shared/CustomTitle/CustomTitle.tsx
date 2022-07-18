import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CustomTitleInterface} from './CustomTitle.interface';
import {styles} from './styles';

import {
  fontConstants,
  fontSizeArray,
  fontWeightArray,
} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const CustomTitle = ({
  title,
  titleColor,
  fontSize,
  fontWeight,
  extraStyles,
}: CustomTitleInterface) => {
  const props = {
    fontWeight,
    fontSize,
    titleColor,
  };
  return <Text style={[styles(props)?.title, extraStyles]}>{title}</Text>;
};

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(fontWeightArray),
  fontSize: PropTypes.oneOf(fontSizeArray),
};

CustomTitle.defaultProps = {
  title: '',
  titleColor: colorConstants?.gray,
  fontWeight: fontConstants?.fontWeightBold,
  fontSize: fontConstants?.middle,
};

export default CustomTitle;
