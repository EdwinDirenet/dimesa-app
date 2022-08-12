import React from 'react';
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HeaderDrawer from '../components/HeaderDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                /*
                cardStyle: {
                    backgroundColor: '#1D2C59'
                }
                */
                header: HeaderDrawer,
                sceneContainerStyle: {
                    backgroundColor: '#1D2C59'
                }
            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
    )
}


export default DrawerNavigation