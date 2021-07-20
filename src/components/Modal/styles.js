import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    elevation: 4,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
    zIndex: 999999999,
    width: width,
    height: height,
    minHeight: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    width: 300,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  buttonFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: -5,
  },
  title: {
    marginBottom: 10,
  },
  buttonStyle: {
    width: 'auto',
  },
});
