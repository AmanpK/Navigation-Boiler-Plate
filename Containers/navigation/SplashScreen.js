import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 2000);
  }, []);
  return (
    <View style={{width:'100%', height:'100%'}}>
         <ImageBackground
        style={{
            width: '100%',
            height: '100%',
            flex: 1 
        }}
          resizeMode="cover"
          source={require("../Assets/img.jpg")}
        ></ImageBackground>
    </View>
  );
};

export default SplashScreen;