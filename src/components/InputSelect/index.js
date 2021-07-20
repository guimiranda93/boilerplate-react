import React, {useRef, useEffect} from 'react';
import {View, Animated} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Label from '../Label';
import styles from './styles';

const InputSelect = ({onChangeText, value, placeholder, options = []}) => {
  const bottomPosition = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const inputRef = useRef();

  useEffect(() => {
    Animated.timing(bottomPosition, {
      toValue: value ? -29 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: value ? 0.8 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <View style={styles.inputContainer}>
      <Animated.View
        style={[
          styles.labelContainer,
          {
            transform: [
              {scale: scale},
              {
                translateY: bottomPosition,
              },
            ],
          },
        ]}>
        <Label text={placeholder} size="label" textStyles={styles.title} />
      </Animated.View>
      <RNPickerSelect
        ref={inputRef}
        onValueChange={v => onChangeText(v)}
        placeholder={{label: 'a', value: null, color: 'rgba(0,0,0,0)'}}
        style={styles}
        items={options}
        value={value}
      />
    </View>
  );
};

export default InputSelect;
