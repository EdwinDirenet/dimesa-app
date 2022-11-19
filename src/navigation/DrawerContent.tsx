import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'
import { Divider, Heading, View } from 'native-base'
import React from 'react'
import { Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DrawerContent = (props: DrawerContentComponentProps) => {

    const {top} =useSafeAreaInsets();

    return (
        <>
            <View
                mt={top}
                px={5}
            >
                <Image
                    source={require('../../assets/divisas-dimesa-logo.png')}
                    resizeMode='contain'
                    style={{ width: 200, height: 70, marginVertical: 5, alignSelf: 'center' }}
                />
                <Divider my={3} />
                <Heading fontSize='lg' mb={3}>El mejor tipo de cambio en compra y venta de divisas.</Heading>
            </View>
            <DrawerItemList 
                {...props}
            />
        </>
    )
}

export default DrawerContent