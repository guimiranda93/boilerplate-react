import React, {useState, useEffect, useRef} from 'react';
import {TextInput, View, Animated, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Label from '../Label';
import styles from './styles';
import Button from '../Button';

const InputDate = ({onChangeText, value, placeholder}) => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(value);
  const [time, setTime] = useState();
  const bottomPosition = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const inputRef = useRef();
  let actualDate = moment().local();
  actualDate.set({
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    if (!date) {
      setDate(value);
    }
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

  useEffect(() => {
    if (date) {
      onChangeText(moment(date).local());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  useEffect(() => {
    if (time) {
      onChangeText(moment(time).local());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    if (showDate) {
      onChangeText(date ? moment(date).local() : moment(actualDate).local());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDate]);

  const changeDate = () => {
    setShowDate(false);
    setShowTime(true);
  };

  const changeTime = () => {
    setShowTime(false);
  };

  const pressedInput = () => {
    if (!showTime) {
      inputRef.current.focus();
      inputRef.current.blur();
      setShowDate(true);
    }
  };

  return (
    <>
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
            onPress={() => pressedInput()}
          />
        </Animated.View>
        <Pressable onPress={() => pressedInput()}>
          <View pointerEvents="none">
            <TextInput
              ref={inputRef}
              style={styles.input}
              value={value ? value.format('DD/MM/YYYY HH:mm') : ''}
              placeholder=""
              underlineColorAndroid="transparent"
            />
          </View>
        </Pressable>
      </View>
      {showDate && (
        <>
          <DateTimePicker
            locale="pt-BR"
            testID="dateTimePicker"
            value={value ? value.toDate() : actualDate.toDate()}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={(event, d) => setDate(moment(d))}
            style={styles.picker}
          />
          <Button
            title="Ok"
            size="small"
            onPress={() => changeDate()}
            type="flat"
            buttonStyle={styles.buttonStyleDate}
          />
        </>
      )}

      {showTime && (
        <>
          <DateTimePicker
            locale="pt-BR"
            display="spinner"
            testID="dateTimePicker"
            value={value ? value.toDate() : actualDate.toDate()}
            mode="time"
            minuteInterval={30}
            is24Hour={true}
            onChange={(event, t) => setTime(moment(t))}
          />
          <Button
            title="Ok"
            size="small"
            onPress={() => changeTime()}
            type="flat"
            buttonStyle={styles.buttonStyleDate}
          />
        </>
      )}
    </>
  );
};

export default InputDate;
