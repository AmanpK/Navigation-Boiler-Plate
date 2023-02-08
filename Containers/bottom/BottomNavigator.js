import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../Assets/home.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? 'grey' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../Assets/user.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? 'grey' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../Assets/search.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? 'grey' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;