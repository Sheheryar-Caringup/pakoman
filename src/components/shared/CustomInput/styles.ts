import {StyleSheet} from 'react-native';

import {shadowConstants} from '../../../utils/constants/shadowConstants';

import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = ({error, multiline}: any) => {
  const errorStyles = error
    ? {
        borderColor: colorConstants?.red,
      }
    : {
        borderColor: colorConstants?.white,
      };
  const multilineStyle = multiline && {
    height: dimensionConstants?.multiLineHeight,
  };
  return StyleSheet.create({
    shadowContainer: {
      marginBottom: dimensionConstants?.margin,
      ...shadowConstants,
    },
    inputContainer: {
      borderWidth: dimensionConstants?.errorBorderWidth,
      borderRadius: dimensionConstants?.borderRadius,
      overflow: 'hidden',
      ...shadowConstants,
      ...errorStyles,
    },
    input: {
      ...multilineStyle,
      backgroundColor: colorConstants?.white,
      marginVertical: -2,
    },
  });
};
