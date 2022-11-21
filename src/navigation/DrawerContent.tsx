import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'
import { Divider, Heading, View } from 'native-base'
import React from 'react'
import { Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DrawerContent = (props: DrawerContentComponentProps) => {

    const {top} =useSafeAreaInsets();

    return (
        <View
            backgroundColor='primary.100'
            pt={top}
            flex={1}
            px={5}
        >
            <Image
                source={require('../../assets/logo-dark-dimesa.png')}
                resizeMode='contain'
                style={{ width: 200, height: 70, marginVertical: 5, alignSelf: 'center' }}
            />
            <Divider my={3} />
            <Heading fontSize='lg' mb={3} color='white'>El mejor tipo de cambio en compra y venta de divisas.</Heading>
            <DrawerItemList 
                {...props}
            />
        </View>
    )
}

export default DrawerContent