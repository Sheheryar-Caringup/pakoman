import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {shadowConstants} from '../../../utils/constants/shadowConstants';

export const styles = (color: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: colorConstants?.lightGray,
      paddingVertical: dimensionConstants?.paddingSmall,
    },
    rightSide: {
      alignItems: 'flex-end',
    },
    icon: {
      width: dimensionConstants?.iconSmall,
      height: dimensionConstants?.iconSmall,
      backgroundColor: color,
      borderRadius: dimensionConstants?.iconSmall / 2,
      marginTop: dimensionConstants?.marginXSmall,
    },
  });
};
