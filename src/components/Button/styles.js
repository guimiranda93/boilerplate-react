import {StyleSheet} from 'react-native';
import * as color from '../colors';

export default StyleSheet.create({
  outline: {
    backgroundColor: 'transparent',
    padding: 15,
    borderWidth: 2,
    borderColor: color.primaryColor,
    width: 190,
    margin: 5,
  },
  clean: {
    backgroundColor: 'transparent',
    width: 190,
    borderWidth: 0,
    padding: 5,
    margin: 5,
  },
  flat: {
    backgroundColor: color.primaryColor,
    padding: 15,
    width: 190,
    margin: 5,
    shadowColor: 'rgba(0,0,0,.4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, // Android
  },
  textOutline: {
    color: color.primaryColor,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textClean: {
    color: color.primaryColor,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textFlat: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
