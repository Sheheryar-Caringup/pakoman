import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimensionConstants?.paddingXLarge,
    paddingBottom: dimensionConstants?.paddingXLarge,
  },
  photoContainer: {
    alignItems: 'center',
    paddingVertical: dimensionConstants?.paddingLarge,
  },
});
