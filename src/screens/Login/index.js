import React, {useState, useContext} from 'react';
import {View, Image} from 'react-native';
import AuthContext from '../../contexts/auth';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import styles from './styles';
import api from '../../services/api';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const {signIn} = useContext(AuthContext);

  const login = () => {
    validateFields()
      .then(() => {
        setLoading(true);
        signIn(email, password).catch(err => {
          setModalMessage(err);
          setLoading(false);
        });
      })
      .catch(() => {
        setModalMessage('Preencha todos os campos');
      });
  };

  const validateFields = () => {
    return new Promise((resolve, reject) => {
      let counter = 0;
      if (email === '') {
        counter++;
      }

      if (password === '') {
        counter++;
      }

      if (counter === 0) {
        resolve();
      } else {
        reject();
      }
    });
  };

  const forgotPassword = () => {
    if (email !== '') {
      setLoading(true);
      api
        .post('/forgotPassword', {email})
        .then(() => {
          setLoading(false);
          setModalMessage(
            'Foi enviado um link para troca de senha no seu email.',
          );
        })
        .catch(() => {
          setLoading(false);
          setModalMessage('O usuário não foi encontrado.');
        });
    } else {
      setModalMessage(
        'Preencha o campo email antes de solicitar a troca de senha.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../images/logo.png')}
        />
      </View>
      <Input
        keyboardType="email-address"
        onChangeText={value => setEmail(value)}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
      />

      <Input
        secureTextEntry
        onChangeText={value => setPassword(value)}
        value={password}
        placeholder="Senha"
        autoCapitalize="none"
      />

      <Button
        title="Entrar"
        onPress={() => login()}
        type="flat"
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Esqueci a senha"
        onPress={() => forgotPassword()}
        type="clean"
        buttonStyle={styles.buttonStyle}
      />
      <Modal
        title="Atenção"
        description={modalMessage}
        buttonConfirm="Ok"
        visible={modalMessage !== ''}
        buttonConfirmPress={() => setModalMessage('')}
      />
      <Loader visible={loading} />
    </View>
  );
};

export default Login;
