import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: dimensionConstants?.padding,
    paddingBottom: dimensionConstants?.paddingLarge,
  },
});
