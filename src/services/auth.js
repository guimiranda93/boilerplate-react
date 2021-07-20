import api from './api';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    api
      .post('/login', {email, password})
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err?.response?.data?.message || 'Ocorreu um erro.');
      });
  });
};
