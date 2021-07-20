import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonIcon from '../ButtonIcon';
import Label from '../Label';
import styles from './styles';

const Header = ({backButton = false, rightComponent = null, title}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftComponent}>
        <ButtonIcon
          onPress={
            backButton
              ? () => navigation.goBack()
              : () => navigation.openDrawer()
          }
          icon={backButton ? 'arrow-back' : 'menu'}
          size="medium"
          type="clean"
          iconStyle={styles.leftButtonComponent}
        />
        <Label text={title} size="h2" textStyles={styles.title} />
      </View>
      {rightComponent}
    </SafeAreaView>
  );
};

export default Header;
