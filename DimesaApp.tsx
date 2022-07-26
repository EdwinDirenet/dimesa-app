import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/nativeTheme/theme';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const DimesaApp = () => {
  return (
    <NativeBaseProvider theme={ theme }>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default DimesaApp;

