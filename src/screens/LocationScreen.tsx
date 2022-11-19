import React from 'react'
import { Heading, ScrollView, View } from 'native-base'
import MapCard from '../components/MapCard';

const LocationScreen = () => {
  return (
    <>
      <View bgColor='white'>
        <Heading px={5} py={3}>Sucursales</Heading>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <MapCard 
          titleCard='Matriz Valle'
          address='Vasconcelos 735-2 Pte., Col. del Valle / San Pedro Garza García NL / CP 66220'
          schedule={['Lunes a Viernes 9AM a 6PM', 'Sábado 9AM a 1PM']}
          coordinates={{latitude: 25.656722, longitude: -100.388500}}
        />
        <MapCard 
          titleCard='Suc. Gómez Morín'
          address='Av. Gómez Morín #400 2-A, Col. del Valle / San Pedro Garza García NL / CP 6625'
          schedule={['Lunes a Viernes 9AM a 6PM', 'Sábado 9AM a 1PM']}
          coordinates={{latitude: 25.6560929, longitude: -100.3573115}}
        />
      </ScrollView>
    </>
  )
}

export default LocationScreen;