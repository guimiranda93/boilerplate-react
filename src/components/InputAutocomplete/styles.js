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
  input: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: color.lightgreyTransparent,
    borderBottomColor: color.primaryColor,
    borderBottomWidth: 1,
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
  iconEye: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  inputContainerAutoComplete: {
    borderWidth: 0,
  },
  flatListProps: {
    zIndex: 99999999,
  },
  itemText: {
    padding: 10,
  },
});
