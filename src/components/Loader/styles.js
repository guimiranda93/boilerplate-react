import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    elevation: 4,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
    zIndex: 999999999,
    width: width,
    height: height,
    minHeight: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
