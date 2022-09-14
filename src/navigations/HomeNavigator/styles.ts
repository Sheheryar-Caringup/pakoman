import {StyleSheet} from 'react-native';
import {colorConstants} from '../../utils/constants/colorConstants';
import {dimensionConstants} from '../../utils/constants/dimensionConstants';

export const styles = (color: string) => {
  return StyleSheet.create({
    icon: {
      width: dimensionConstants?.bottomNavSize,
      height: dimensionConstants?.bottomNavSize,
      backgroundColor:
        color == colorConstants?.white
          ? colorConstants?.primary
          : colorConstants?.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: dimensionConstants?.bottomNavBorderRadius,
    },
  });
};
