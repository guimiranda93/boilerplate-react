import React from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';
import Label from '../Label';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {lightgrey} from '../colors';

const ListItem = ({
  leftIcon,
  title,
  subtitle,
  chevron = false,
  rightComponent,
  onPress = null,
  listStyle,
  titleSize,
  active = false,
}) => {
  return (
    <Pressable
      style={[styles.container, listStyle, active && styles.active]}
      onPress={onPress ? () => onPress() : null}>
      <View>
        <View style={leftIcon ? styles.textIcon : null}>
          {leftIcon && (
            <Icon
              name={leftIcon}
              size={18}
              color={lightgrey}
              style={styles.iconLeft}
            />
          )}
          <Label text={title} size={titleSize || 'h3'} />
        </View>

        {subtitle && (
          <Label text={subtitle} size="text" textStyles={styles.subtitle} />
        )}
      </View>
      {chevron && !rightComponent && (
        <View>
          <Icon name="chevron-right" size={28} color={lightgrey} />
        </View>
      )}

      {rightComponent && rightComponent}
    </Pressable>
  );
};

export default ListItem;
