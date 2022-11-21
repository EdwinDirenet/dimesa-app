import React from 'react';
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HeaderDrawer from '../components/HeaderDrawer';
import { useTheme } from 'native-base';
import DrawerContent from './DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';
import TabLocationNavigation from './TabLocationNavigation';

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
                drawerActiveBackgroundColor: colors.secondary['900'],
                drawerActiveTintColor: colors.primary['900'],
                drawerInactiveTintColor: 'white'
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
            <Drawer.Screen name="Sucursales" component={TabLocationNavigation} 
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