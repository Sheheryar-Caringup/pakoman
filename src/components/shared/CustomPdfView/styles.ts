import {StyleSheet, Dimensions, View} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const styles = StyleSheet.create({
  pdf: {
    alignSelf: 'center',
    marginTop: dimensionConstants.margin,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height - 145,
  },
});

export default styles;
