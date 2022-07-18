import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from './appIntroCustomSliderItems';
import {styles} from './styles';
import AtlasLogoHorizontal from '../../../assets/Icons/Logo/AtlasLogoHorizontal.svg';
import AtlasLogo10 from '../../../assets/Icons/Splash/AtlasLogo10%.svg';
import {colorConstants} from '../../../utils/constants/colorConstants';

const renderPage = (activeIndex: any) => {
  return (
    <>
      <View style={styles.sliderContainer}>
        <View style={styles.sliderPagination}>
          <View style={sliderStyles(activeIndex).sliderPagination1} />
          <View style={sliderStyles(activeIndex).sliderPagination2} />
          <View style={sliderStyles(activeIndex).sliderPagination3} />
          <View style={sliderStyles(activeIndex).sliderPagination4} />
        </View>
        <View style={styles.sliderImage}>
          <AtlasLogoHorizontal width={'100%'} height={50} />
          <AtlasLogo10 style={{marginTop: -55}} width={'100%'} height={300} />
        </View>
      </View>
    </>
  );
};

export const AppIntroCustomSlider = ({setShowRealApp}: any) => {
  const renderItem = ({item}: any) => {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setShowRealApp(true)}
              style={styles.buttonCircle}>
              <Text style={{color: colorConstants.primary}}>Skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
            {item.image}
            <View style={styles.descriptionContainer}>
              <Text style={{fontSize: 11}}>{item.description}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        renderPagination={renderPage}
      />
    </>
  );
};

export const sliderStyles = (props: any) =>
  StyleSheet.create({
    sliderPagination1: {
      width: 7.5,
      height: 7,
      borderRadius: 8,
      backgroundColor:
        props === 0 ? colorConstants.primary : '	rgb(220,220,220)',
      marginRight: 7,
    },
    sliderPagination2: {
      width: 7.5,
      height: 7,
      borderRadius: 8,
      backgroundColor:
        props === 1 ? colorConstants.primary : '	rgb(220,220,220)',
      marginRight: 7,
    },
    sliderPagination3: {
      width: 7.5,
      height: 7,
      borderRadius: 8,
      backgroundColor:
        props === 2 ? colorConstants.primary : '	rgb(220,220,220)',
      marginRight: 7,
    },
    sliderPagination4: {
      width: 7.5,
      height: 7,
      borderRadius: 8,
      backgroundColor:
        props === 3 ? colorConstants.primary : '	rgb(220,220,220)',
    },
  });
