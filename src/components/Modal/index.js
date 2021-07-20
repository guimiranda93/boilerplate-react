import React from 'react';
import {View} from 'react-native';
import Label from '../Label';
import styles from './styles';
import Button from '../Button';
import * as color from '../colors';

const Modal = ({
  visible = false,
  title,
  description,
  buttonCancel = 'Cancelar',
  buttonConfirm = 'Confirmar',
  buttonCancelPress = null,
  buttonConfirmPress = null,
  content = null,
}) => {
  return visible ? (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Label text={title} size="h3" textStyles={styles.title} />
        {description && (
          <Label text={description} size="text" textStyles={styles.title} />
        )}
        {content && content}
        <View style={styles.buttonFooter}>
          {buttonCancelPress && (
            <Button
              type="clean"
              title={buttonCancel}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={{color: color.lightgrey}}
              onPress={() => buttonCancelPress()}
            />
          )}
          {buttonConfirmPress && (
            <Button
              type="clean"
              title={buttonConfirm}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={{color: color.danger}}
              onPress={() => buttonConfirmPress()}
            />
          )}
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
};

export default Modal;
