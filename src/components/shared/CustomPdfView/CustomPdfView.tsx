import React from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import ICustomPdfView from './CustomPdfView.interface';
import styles from './styles';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const CustomPdfView = ({uri, isHorizontal}: ICustomPdfView) => {
  const source = {uri: uri, cache: true};
  return (
    <Pdf
      horizontal={isHorizontal}
      renderActivityIndicator={() => <Loader isLoading={true} />}
      source={source}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`Number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`Current page: ${page}`);
      }}
      onError={error => {
        console.log(error);
      }}
      onPressLink={uri => {
        console.log(`Link pressed: ${uri}`);
      }}
      style={styles.pdf}
    />
  );
};

CustomPdfView.propTypes = {
  uri: PropTypes.string.isRequired,
  isHorizontal: PropTypes.bool,
};

CustomPdfView.defaultProps = {
  isHorizontal: false,
};

export default CustomPdfView;
