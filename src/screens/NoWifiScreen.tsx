import { Image, Text, useTheme, View } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const NoWifiScreen = () => {

    const {colors} = useTheme();

    return (
        <View
            backgroundColor='primary.100'
            flex={1}
            paddingX={50}
            justifyContent='center'
            alignItems='center'
        >
            <Image
                source={require('../../assets/logo-dark-dimesa.png')}
                resizeMode='contain'
                style={{ width: 200, height: 70, marginVertical: 5, alignSelf: 'center' }}
                alt='Divisas Dimesa'
            />
            <Text
                color='white'
                textAlign='center'
                fontSize='lg'
                fontWeight='bold'
                mb={10}
            >
                En éste momento no tienes conexión a internet.
            </Text>
            <Icon
                name="wifi-off"
                size={60}
                color={colors.secondary['900']}
        />
        </View>
    )
}

export default NoWifiScreen