import React, {useState, useEffect, useRef} from 'react';
import {TextInput, View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Label from '../Label';
import styles from './styles';
import * as color from '../colors';

const Input = ({
  keyboardType,
  onChangeText,
  value,
  placeholder,
  multline,
  secureTextEntry = false,
  autoCapitalize = 'sentences',
  maskType = null,
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const bottomPosition = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const inputRef = useRef();

  useEffect(() => {
    Animated.timing(bottomPosition, {
      toValue: focused || value ? -29 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: focused || value ? 0.8 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    if (focused) {
      inputRef.current.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused, value]);

  const changeValue = v => {
    switch (maskType) {
      case 'phone':
        if (v.length > 14) {
          var x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
          v = !x[2]
            ? x[1]
            : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        } else {
          var x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
          v = !x[2]
            ? x[1]
            : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
        break;
      case 'cpf':
        var x = v
          .replace(/\D/g, '')
          .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        v = !x[2]
          ? x[1]
          : x[1] +
            '.' +
            x[2] +
            (x[3] ? '.' + x[3] : '') +
            (x[4] ? '-' + x[4] : '');
        break;
      case 'money':
        var x = v.replace(/\D/g, '');
        x = parseFloat(x) / 100;
        if (!isNaN(x)) {
          v = parseFloat(x).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
        }
        break;
    }

    onChangeText(v);
  };

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
        <Label
          text={placeholder}
          size="label"
          textStyles={styles.title}
          onPress={() => setFocused(true)}
        />
      </Animated.View>
      <TextInput
        ref={inputRef}
        multline={multline}
        style={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={text => changeValue(text)}
        value={value}
        placeholder=""
        keyboardType={keyboardType || 'default'}
        secureTextEntry={secureTextEntry && !showPassword}
        autoCapitalize={autoCapitalize}
        underlineColorAndroid="transparent"
      />
      {secureTextEntry && (
        <Icon
          name={showPassword ? 'visibility-off' : 'visibility'}
          size={20}
          color={color.lightgrey}
          style={styles.iconEye}
          onPress={() => setShowPassword(!showPassword)}
        />
      )}
    </View>
  );
};

const cleanValue = v => {
  var x = v.replace(/\D/g, '');
  x = parseFloat(x) / 100;
  return x;
};

const formatValue = v => {
  if (typeof v === 'number') {
    var x = v.toFixed(2);
    if (!isNaN(x)) {
      v = parseFloat(x).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    }
  } else if (typeof v === 'string') {
    var x = v.replace(/\D/g, '');
    x = parseFloat(x) / 100;
    if (!isNaN(x)) {
      v = parseFloat(x).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    }
  }

  return v;
};

export {cleanValue, formatValue};
export default Input;
