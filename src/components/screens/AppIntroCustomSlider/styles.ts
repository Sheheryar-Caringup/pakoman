import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';
export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colorConstants.white,
  },
  bodyContainer: {
    flex:2,
    backgroundColor: colorConstants.white,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonContainer:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'flex-end'
  },
  buttonCircle: {
    width: 70,
    height: 30,
    borderRadius: 15,
    backgroundColor: colorConstants.white,
    borderWidth: 2,
    borderColor: colorConstants.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
    
  },
  descriptionContainer:{
    paddingHorizontal: 30,
  },
  sliderContainer:{
    flex:0.5, 
    backgroundColor: colorConstants.white,
    flexDirection: 'column',
  },
  sliderPagination: {
    flexDirection: 'row',
    padding: 5,
    alignSelf: 'center',
    backgroundColor: colorConstants.white,
    
  },
  sliderImage:{
   paddingBottom: 10,
  }

});
