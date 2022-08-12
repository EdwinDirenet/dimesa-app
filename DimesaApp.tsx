import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/nativeTheme/theme';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const DimesaApp = () => {
  return (
    <NativeBaseProvider theme={ theme }>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default DimesaApp;

