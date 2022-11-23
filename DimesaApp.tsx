import React, { useEffect } from 'react';
import {NativeBaseProvider, Text, View} from 'native-base';
import {theme} from './src/nativeTheme/theme';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { useNetInfo } from "@react-native-community/netinfo";
import NoWifiScreen from './src/screens/NoWifiScreen';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const DimesaApp = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);
  

  const net = useNetInfo();
  return (
    <NativeBaseProvider theme={ theme }>
      <StatusBar 
        backgroundColor={theme.colors.primary['100']}
        barStyle='light-content'
      />
        {
          net.isConnected ?
            <NavigationContainer>
                  <DrawerNavigation />
            </NavigationContainer>
            :
            <NoWifiScreen />
        }
    </NativeBaseProvider>
  );
};

export default DimesaApp;

