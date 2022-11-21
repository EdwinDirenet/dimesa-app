import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTheme } from 'native-base';
import React from 'react'
import LocationScreen from '../screens/LocationScreen';
import sucursales from '../data/sucursales.json';

const Tab = createMaterialTopTabNavigator();

const TabLocationNavigation = () => {
    const {colors} = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: colors.secondary['900'],
                tabBarStyle: {
                    backgroundColor: colors.primary['100']
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 15
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.secondary['900']
                },
                swipeEnabled: false
            }}
            sceneContainerStyle={{
                backgroundColor: '#1D2C59'
            }}
        >
            <Tab.Screen name="Nuevo León" component={LocationScreen} 
                initialParams={sucursales.nuevo_leon}
            />
            <Tab.Screen name="Quintana Roo" component={LocationScreen} 
                initialParams={sucursales.quintana_roo}
            />
        </Tab.Navigator>
    )
}

export default TabLocationNavigation