import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {CustomTopBarInterface} from './CustomTopBar.interface';
import {styles} from './styles';

import CustomImage from '../CustomImage';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {languageTxt} from '../../../utils/constants/languageTxt';

const CustomTopBar = ({
  title,
  description,
  icon,
  action,
  userIcon,
  userStatus,
  bgColor,
}: CustomTopBarInterface) => {
  const navigation = useNavigation();
  return (
    <View style={styles(userStatus, bgColor).container}>
      <View style={styles(userStatus, bgColor).userIconContainer}>
        <View style={styles(userStatus, bgColor).userStatus}>
          {userStatus ? (
            <Icon
              name="checkmark-outline"
              color={colorConstants?.white}
              size={dimensionConstants?.iconXXSmall}
            />
          ) : (
            <Icon
              name="ellipsis-vertical-outline"
              color={colorConstants?.white}
              size={dimensionConstants?.iconXXSmall}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(languageTxt?.reactStackKeys?.profile);
          }}>
          <CustomImage
            image={userIcon}
            imageSize={dimensionConstants?.avatarWidth}
          />
        </TouchableOpacity>
      </View>
      <View style={styles(userStatus, bgColor).txtContainer}>
        <Text style={styles(userStatus, bgColor).title}>{title}</Text>
        <Text style={styles(userStatus, bgColor).description}>
          {description}
        </Text>
      </View>
      <View style={styles(userStatus, bgColor).iconContainer}>
        <TouchableOpacity
          activeOpacity={dimensionConstants?.activeOpacityExtra}
          onPress={action}>
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

CustomTopBar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  action: PropTypes.func.isRequired,
  bgColor: PropTypes.any.isRequired,
};

CustomTopBar.defaultProps = {
  title: '',
  description: '',
  bgColor: colorConstants?.white,
  icon: <></>,
  action: () => {},
};
export default CustomTopBar;
