import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';

export const styles = (isLoading: any) => {
  const isLoadingStyles: any = isLoading
    ? {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }
    : {
        display: 'none',
      };
  return StyleSheet.create({
    loading: {
      zIndex: 999,
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: colorConstants?.lightBlackOpacity,
      ...isLoadingStyles,
    },
  });
};
