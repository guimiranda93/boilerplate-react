import {StyleSheet} from 'react-native';
import * as color from '../colors';

export default StyleSheet.create({
  outline: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.primaryColor,
    width: 50,
    height: 50,
    margin: 5,
  },
  clean: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
  },
  flat: {
    borderRadius: 50,
    backgroundColor: color.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
    shadowColor: 'rgba(0,0,0,.4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
});
