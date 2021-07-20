import {StyleSheet, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as color from '../colors';
const {width} = Dimensions.get('window');

const headerHeight = DeviceInfo.hasNotch() ? 100 : 60;

export default StyleSheet.create({
  container: {
    backgroundColor: color.primaryColor,
    height: headerHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width,
  },
  title: {
    color: 'white',
    textTransform: 'capitalize',
  },
  leftComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonComponent: {
    color: 'white',
  },
});
