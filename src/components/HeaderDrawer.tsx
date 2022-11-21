import React from 'react';
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Heading, Text, useTheme, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerHeaderProps{};

const HeaderDrawer = ({navigation, route}: Props) => {

    const {top} = useSafeAreaInsets();
    const {colors} = useTheme();

    return (
        <View pt={top} px={3} bgColor='white' flexDir='row' alignItems='center'>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{marginVertical: 5}}
            >
                <Icon 
                    name='menu'
                    color={colors.primary['900']}
                    size={35}
                />
            </TouchableOpacity>
            {
                (route.name != 'Convertidor') && <Heading ml={3}>{route.name}</Heading>
            }
        </View>
    );
}
export default HeaderDrawer;