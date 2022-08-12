import React from 'react';
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerHeaderProps{};

const HeaderDrawer = ({navigation}: Props) => {
    const {top} = useSafeAreaInsets();
    return (
        <View pt={top} px={3} bgColor='white'>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Icon 
                    name='menu'
                    size={35}
                />
            </TouchableOpacity>
        </View>
    );
}
export default HeaderDrawer;