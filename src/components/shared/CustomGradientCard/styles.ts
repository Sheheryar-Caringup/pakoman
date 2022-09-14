import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {shadowConstants} from '../../../utils/constants/shadowConstants';

export const styles = StyleSheet.create({
  container: {
    borderRadius: dimensionConstants?.cardRadius,
    marginVertical: dimensionConstants?.cardMargin,
    ...shadowConstants,
  },
});
