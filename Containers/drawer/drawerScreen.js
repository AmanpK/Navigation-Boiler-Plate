import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import {DrawerActions, useNavigation} from '@react-navigation/native';
// import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

const drawerScreen = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Sign Up"
        component={Main}
        options={{
          headerShown: true,
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                source={require('../Assets/menu.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight:20
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen
        name="Sign In"
        component={Main}
        options={{
          headerShown: true,
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                source={require('../Assets/menu.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight:20
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen
        name="Terms of Use"
        component={Main}
        options={{
          headerShown: true,
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                source={require('../Assets/menu.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight:20
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen
        name="Privacy Policy"
        component={Main}
        options={{
          headerShown: true,
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                source={require('../Assets/menu.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight:20
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default drawerScreen;
