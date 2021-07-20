import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import * as color from '../colors';

const Loader = ({visible}) => {
  return visible ? (
    <View style={styles.container}>
      <View style={styles.modal}>
        <ActivityIndicator size="large" color={color.primaryColor} />
      </View>
    </View>
  ) : null;
};

export default Loader;
