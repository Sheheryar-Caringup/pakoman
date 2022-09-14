import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import CustomTopBar from '../../shared/CustomTopBar';
import HumburgerMenu from '../../shared/HumburgerMenu';

import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {HeaderLayoutInterface} from './HeaderLayout.interface';
import {styles} from './styles';

const HeaderLayout = ({body, bgColor}: HeaderLayoutInterface) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles?.container}>
      <CustomTopBar
        title={`Hi Sheheryar`}
        description={'Welcome Back!'}
        userIcon={
          'https://i.ibb.co/j4jrJGx/csm-man-holger-von-der-heide-interview-header-02ae36db18.webp'
        }
        userStatus={true}
        bgColor={bgColor}
        icon={
          <Icon
            name="ellipsis-vertical-outline"
            color={
              bgColor == colorConstants?.primary
                ? colorConstants?.white
                : colorConstants?.gray
            }
            size={dimensionConstants?.iconSmall}
          />
        }
        action={() => {
          setOpenMenu(true);
        }}
      />
      {body}
      <HumburgerMenu open={openMenu} setOpen={setOpenMenu} />
    </View>
  );
};

HeaderLayout.propTypes = {
  body: PropTypes.any.isRequired,
  bgColor: PropTypes.any,
};

HeaderLayout.defaultProps = {
  body: <></>,
  bgColor: colorConstants?.white,
};
export default HeaderLayout;
