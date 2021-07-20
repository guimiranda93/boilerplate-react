import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Label from '../Label';
import * as color from '../colors';
import AuthContext from '../../contexts/auth';

const Drawer = props => {
  const {state, ...rest} = props;
  const drawerItems = {...state};
  const {
    signOut,
    setSelectedApartment,
    user,
    selectedApartment,
    isOwner,
  } = useContext(AuthContext);
  drawerItems.routes = drawerItems.routes.filter(
    item => !['Multiprofile', 'FirstAccess'].includes(item.name),
  );
  if (isOwner === 'true' || isOwner) {
    drawerItems.routes = drawerItems.routes.filter(
      item => !['KeyGenerate'].includes(item.name),
    );
  } else {
    drawerItems.routes = drawerItems.routes.filter(
      item =>
        !['Schedule', 'Renters', 'Employees', 'Ratings'].includes(item.name),
    );
  }
  drawerItems.index -= state.routes.length - drawerItems.routes.length;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../images/logo.png')}
        />
        <Label size="h2" text={user?.name} />
        <Label size="h4" text={selectedApartment?.apartment?.name} />

        <View style={styles.line} />
      </View>

      <DrawerItemList state={drawerItems} {...rest} />
      {user?.apartments?.length > 0 && (
        <DrawerItem
          label="Trocar apartamento"
          onPress={() => setSelectedApartment()}
          icon={() => renderIcon('apartment')}
        />
      )}
      <DrawerItem
        label="Sair"
        onPress={() => signOut()}
        icon={() => renderIcon('exit-to-app')}
      />
    </DrawerContentScrollView>
  );
};

export const renderIcon = icon => {
  return <Icon name={icon} size={25} color={color.primaryColor} />;
};

export default Drawer;
