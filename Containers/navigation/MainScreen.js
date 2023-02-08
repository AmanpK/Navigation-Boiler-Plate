import {View, Text} from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/drawerScreen';

const MainScreen = () => {
  return( 
 <View style={{flex: 1}}>
  <DrawerNavigator />
  </View>
  )
};

export default MainScreen;