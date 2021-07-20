import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {primaryColor} from '../colors';

const ButtonIcon = ({
  icon,
  onPress,
  type,
  size = 'medium',
  iconStyle = null,
  buttonStyle = null,
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    switch (size) {
      case 'xs-small':
        setScale(0.5);
        break;
      case 'small':
        setScale(0.8);
        break;
      case 'medium':
        setScale(1);
        break;
      case 'large':
        setScale(1.3);
        break;

      default:
        setScale(1);
        break;
    }
  }, [size]);

  return (
    <Pressable
      onPress={() => onPress()}
      style={[
        type === 'outline' ? styles.outline : null,
        type === 'clean' ? styles.clean : null,
        type === 'flat' ? styles.flat : null,
        {transform: [{scale: scale}]},
        buttonStyle,
      ]}>
      <Icon
        name={icon}
        size={25}
        color={type === 'flat' ? 'white' : primaryColor}
        style={iconStyle}
      />
    </Pressable>
  );
};

export default ButtonIcon;
