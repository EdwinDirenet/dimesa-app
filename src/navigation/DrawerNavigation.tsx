import React from 'react';
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HeaderDrawer from '../components/HeaderDrawer';
import LocationScreen from '../screens/LocationScreen';
import { Button, useTheme, View } from 'native-base';
import { Image } from 'react-native';
import DrawerContent from './DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    const {colors} = useTheme();

    return (
        <Drawer.Navigator
            screenOptions={{
                header: HeaderDrawer,
                sceneContainerStyle: {
                    backgroundColor: '#1D2C59'
                },
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontWeight: 'bold'
                },
                drawerActiveBackgroundColor: colors.primary['900'],
                drawerActiveTintColor: colors.secondary['900'],
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Convertidor" component={HomeScreen} 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon 
                            name='cash-outline'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Sucursales" component={LocationScreen} 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon 
                            name='location-outline'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}


export default DrawerNavigation