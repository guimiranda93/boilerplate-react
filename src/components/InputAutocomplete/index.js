import React, {useState, useEffect, useRef} from 'react';
import {TextInput, View, Animated, Platform, Pressable} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import Label from '../Label';
import styles from './styles';

const InputAutocomplete = ({
  onChangeText,
  onSelectOption,
  value,
  placeholder,
  data,
  inputStyle,
}) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState(value || '');
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
    } else {
      inputRef.current.blur();
    }

    if (value) {
      setText(value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused, value]);

  useEffect(() => {
    onChangeText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const renderInput = () => (
    <TextInput
      ref={inputRef}
      style={styles.input}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholder=""
      underlineColorAndroid="transparent"
      value={text}
      onChangeText={setText}
    />
  );

  const findData = (query, dataAll) => {
    if (query === '') {
      return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return dataAll.filter(
      item =>
        item.name.search(regex) >= 0 || item?.business_name?.search(regex) >= 0,
    );
  };

  const dataFiltered = findData(text, data);

  const comp = (a, b) => {
    return a.toLowerCase().trim() === b.toLowerCase().trim();
  };

  return (
    <View style={[styles.inputContainer, inputStyle]}>
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
      <View style={Platform.OS === 'android' && styles.autocompleteContainer}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          data={
            dataFiltered.length === 1 && comp(text, dataFiltered[0].name)
              ? []
              : dataFiltered
          }
          inputContainerStyle={styles.inputContainerAutoComplete}
          renderTextInput={renderInput}
          flatListProps={{
            style: styles.flatListProps,
            keyExtractor: item => item.id,
            renderItem: ({item, i}) => (
              <Pressable
                onPress={() => {
                  setText(item.name);
                  onSelectOption(item.id);
                }}
                style={styles.itemText}>
                <Label text={item.name} size="label" />
              </Pressable>
            ),
          }}
        />
      </View>
    </View>
  );
};

export default InputAutocomplete;
