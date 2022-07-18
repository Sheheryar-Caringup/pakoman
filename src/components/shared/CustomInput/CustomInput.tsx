import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

import {styles} from './styles';
import {CustomInputInterface} from './CustomInput.interface';
import ValidationMessage from '../ValidationMessage';

import {colorConstants} from '../../../utils/constants/colorConstants';

const autoCapitalizeArray = ['characters', 'none', 'sentences', 'words'];
const keyboardTypeArray = [
  'ascii-capable',
  'decimal-pad',
  'default',
  'email-address',
  'name-phone-pad',
  'number-pad',
  'numbers-and-punctuation',
  'numeric',
  'phone-pad',
  'twitter',
  'url',
  'visible-password',
  'web-search',
];

const CustomInput = ({
  placeHolder,
  value,

  error,
  errorMsg,
  disabled,

  handleChange,
  onBlur,
  blurOnSubmit,

  multiline,
  numberOfLines,

  keyboardType,
  autoCapitalize,

  rightIcon,
  rightIconClick,
  rightIconColor,

  leftIcon,
  leftIconClick,
  leftIconColor,

  secureTextEntry,
  onEndEditing,
  autoFocus,
  ref,
  onFocus,
}: CustomInputInterface) => {
  return (
    <>
      <View style={styles({error, multiline}).shadowContainer}>
        <View style={styles({error, multiline}).inputContainer}>
          <TextInput
            label={placeHolder}
            value={value}
            disabled={disabled}
            onChangeText={text => handleChange(text)}
            onBlur={() => onBlur()}
            blurOnSubmit={blurOnSubmit}
            multiline={multiline}
            numberOfLines={numberOfLines}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            underlineColor="transparent"
            returnKeyType={'done'}
            style={styles({error, multiline}).input}
            right={
              rightIcon && (
                <TextInput.Icon
                  name={rightIcon}
                  onPress={rightIconClick}
                  color={rightIconColor}
                />
              )
            }
            left={
              leftIcon && (
                <TextInput.Icon
                  name={leftIcon}
                  onPress={leftIconClick}
                  color={leftIconColor}
                />
              )
            }
            secureTextEntry={secureTextEntry}
            theme={{
              colors: {
                primary: colorConstants?.gray,
                text: colorConstants?.black,
                placeholder: colorConstants?.gray,
                disabled: colorConstants?.gray,
                accent: colorConstants?.gray,
              },
            }}
            maxLength={200}
            onEndEditing={onEndEditing}
            autoFocus={autoFocus}
            ref={ref}
            onFocus={onFocus}
          />
        </View>
        {error && !!errorMsg && <ValidationMessage children={errorMsg} />}
      </View>
    </>
  );
};

CustomInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,

  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,

  handleChange: PropTypes.func,
  onBlur: PropTypes.func,

  blurOnSubmit: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,

  keyboardType: PropTypes.oneOf(keyboardTypeArray),
  autoCapitalize: PropTypes.oneOf(autoCapitalizeArray),

  rightIcon: PropTypes.any,
  rightIconClick: PropTypes.any,
  rightIconColor: PropTypes.string,

  leftIcon: PropTypes.any,
  leftIconClick: PropTypes.any,
  leftIconColor: PropTypes.string,

  secureTextEntry: PropTypes.bool,
  onEndEditing: PropTypes.func,
  autoFocus: PropTypes.bool,
  ref: PropTypes.any,
};

CustomInput.defaultProps = {
  placeHolder: '',
  value: '',
  error: false,
  errorMsg: '',
  disabled: false,

  handleChange: () => {},
  onBlur: () => {},

  blurOnSubmit: false,
  multiline: false,
  numberOfLines: 1,

  keyboardType: 'default',
  autoCapitalize: 'sentences',

  rightIconClick: () => {},

  leftIconClick: () => {},

  secureTextEntry: false,
  onEndEditing: () => {},
  autoFocus: false,
};
export default CustomInput;
