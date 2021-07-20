import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../contexts/auth';

const Routes = () => {
  const {signed} = useContext(AuthContext);

  if (!signed) {
    return <AuthRoutes />;
  } else {
    return <AppRoutes />;
  }
};

export default Routes;
