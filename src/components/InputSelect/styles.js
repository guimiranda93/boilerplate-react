import {StyleSheet} from 'react-native';
import * as color from '../colors';

export default StyleSheet.create({
  inputContainer: {
    padding: 10,
  },
  title: {
    color: color.primaryColor,
    textTransform: 'uppercase',
  },
  labelContainer: {
    position: 'absolute',
    left: 15,
    bottom: 30,
    zIndex: 10,
  },
  inputIOS: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: color.lightgreyTransparent,
    borderBottomColor: color.primaryColor,
    borderBottomWidth: 1,
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
  inputAndroid: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: color.lightgreyTransparent,
    borderBottomColor: color.primaryColor,
    borderBottomWidth: 1,
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
});
