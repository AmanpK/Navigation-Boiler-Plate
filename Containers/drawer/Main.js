import {View, Text} from 'react-native';
import React from 'react';
import BottomNavigator from '../bottom/BottomNavigator';
// import MyTabs from '../bottom/TabNavigator';


const Main = () => {
  return (
   <View style={{flex: 1}}>
        {/* <MyTabs /> */}

       <BottomNavigator />
     
    </View>
  );
};

export default Main;
