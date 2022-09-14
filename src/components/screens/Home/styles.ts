import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    height: 140,
    width: '100%',
    position: 'absolute',
    backgroundColor: colorConstants?.primary,
    borderBottomEndRadius: dimensionConstants?.borderRadiusLarge,
    borderBottomStartRadius: dimensionConstants?.borderRadiusLarge,
  },
  cardContainer: {
    paddingHorizontal: dimensionConstants?.paddingXLarge,
    // padding: dimensionConstants?.paddingXLarge,
  },
  chartBody: {
    flexDirection: 'row',
  },
  totalValueContainer: {
    width: '35%',
    alignSelf: 'center',
  },
  chartLabelContainer: {
    flexDirection: 'row',
    paddingBottom: dimensionConstants?.padding,
  },
});
