import {StyleSheet} from 'react-native';
import * as color from '../colors';

export default StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
  },
  line: {
    marginVertical: 10,
    height: 0.5,
    width: '100%',
    backgroundColor: color.lightgreyTransparent,
  },
});
