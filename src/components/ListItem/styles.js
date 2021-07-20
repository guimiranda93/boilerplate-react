import {StyleSheet} from 'react-native';
import * as color from '../colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    color: color.lightgrey,
  },
  textIcon: {
    flexDirection: 'row',
  },
  iconLeft: {
    marginRight: 5,
  },
  active: {
    backgroundColor: color.morelightgrey,
  },
});
