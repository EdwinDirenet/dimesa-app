import React from 'react';
import {NativeBaseProvider, Text, View} from 'native-base';
import {theme} from './src/nativeTheme/theme';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { useNetInfo } from "@react-native-community/netinfo";
import NoWifiScreen from './src/screens/NoWifiScreen';
import { StatusBar } from 'react-native';

const DimesaApp = () => {
  const net = useNetInfo();
  return (
    <NativeBaseProvider theme={ theme }>
      <StatusBar 
        backgroundColor='white'
        barStyle='dark-content'
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

