import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Label = ({text, textStyles = null, size, onPress = null}) => {
  const [fontSize, setFontSize] = useState(14);
  const [fontWeight, setFontWeight] = useState('normal');

  useEffect(() => {
    switch (size) {
      case 'info':
        setFontSize(10);
        setFontWeight('normal');
        break;
      case 'label':
        setFontSize(14);
        setFontWeight('normal');
        break;
      case 'text':
        setFontSize(14);
        setFontWeight('normal');
        break;
      case 'h3':
        setFontSize(18);
        setFontWeight('normal');
        break;
      case 'h2':
        setFontSize(18);
        setFontWeight('bold');
        break;
      case 'h1':
        setFontSize(32);
        setFontWeight('bold');
        break;
      default:
        setFontSize(16);
        setFontWeight('normal');
        break;
    }
  }, [size]);

  return (
    <Text
      style={[textStyles, {fontSize: fontSize, fontWeight: fontWeight}]}
      onPress={onPress}>
      {text}
    </Text>
  );
};

export default Label;
