import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Drawer, {renderIcon} from '../components/Drawer';
import * as color from '../components/colors';

const AppStack = createStackNavigator();

const HomeStack = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};
/**
 * Criar novas stacks aqui
 const PageStack = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Page" component={Page} />
    </AppStack.Navigator>
  );
};
 */

const DrawerStack = () => {
  const DrawerNavigator = createDrawerNavigator();

  return (
    <DrawerNavigator.Navigator
      screenOptions={{swipeEnabled: false}}
      drawerContent={props => <Drawer {...props} />}
      drawerContentOptions={{
        activeTintColor: color.primaryColor,
      }}
      initialRouteName={'Home'}>
      <DrawerNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Início',
          drawerIcon: () => renderIcon('today'),
          headerShown: false,
        }}
      />

      {/* Adicionar novas stacks aqui
      <DrawerNavigator.Screen
        name="Page"
        component={PageStack}
        options={{
          title: 'Início',
          drawerIcon: () => renderIcon('today'),
          headerShown: false,
        }}
      />
      */}
    </DrawerNavigator.Navigator>
  );
};

export default DrawerStack;
