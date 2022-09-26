import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstants.white,
  },
  loader: {marginTop: dimensionConstants.marginLarge},
});
