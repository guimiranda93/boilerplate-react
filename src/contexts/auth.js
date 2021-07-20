import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({signed: true});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      if (storagedUser && storagedToken) {
        api.defaults.headers.common.Authorization = storagedToken;
        setUser(JSON.parse(storagedUser));
        setToken(storagedToken);
      }
    }

    loadStorageData();
  }, []);

  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user));
    }
  }, [user]);

  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .signIn(email, password)
        .then(response => {
          setToken(response.user.token);
          setUser(response.user);
          api.defaults.headers.common.Authorization = response.user.token;
          AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
          AsyncStorage.setItem(
            '@RNAuth:owner',
            response.isOwner ? 'true' : 'false',
          );
          AsyncStorage.setItem('@RNAuth:token', response.user.token);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
    setToken();
  };

  const updateUser = () => {
    return new Promise(resolve => {
      setUser({...user, first_access: false});
      resolve();
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        token,
        signIn,
        signOut,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
