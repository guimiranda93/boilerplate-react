import React from 'react';
import {Pressable} from 'react-native';
import Label from '../Label';
import styles from './styles';

const Button = ({
  title,
  onPress,
  type,
  buttonStyle = null,
  buttonTextStyle = null,
  buttonTextSize = 'label',
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={[
        type === 'outline' ? styles.outline : null,
        type === 'clean' ? styles.clean : null,
        type === 'flat' ? styles.flat : null,
        buttonStyle,
      ]}>
      <Label
        text={title}
        size={buttonTextSize}
        textStyles={[
          type === 'outline'
            ? styles.textOutline
            : type === 'clean'
            ? styles.textClean
            : type === 'flat'
            ? styles.textFlat
            : null,
          buttonTextStyle,
        ]}
      />
    </Pressable>
  );
};

export default Button;
