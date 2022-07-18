import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {LoaderInterface} from './Loader.interface';

import {colorConstants} from '../../../utils/constants/colorConstants';

const Loader = ({isLoading}: LoaderInterface) => {
  return (
    <View style={styles(isLoading).loading}>
      <ActivityIndicator size="large" color={colorConstants?.primary} />
    </View>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
