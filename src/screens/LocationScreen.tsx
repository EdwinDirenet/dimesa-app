import React from 'react'
import { ScrollView } from 'native-base'
import MapCard from '../components/MapCard';
import { MaterialTopTabDescriptor } from '@react-navigation/material-top-tabs/lib/typescript/src/types';

interface Props extends MaterialTopTabDescriptor {}

const LocationScreen = ({route}: Props) => {

  const sucursales = Object.values(route.params!);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          sucursales.length > 0 && sucursales.map(sucursal => (
            <MapCard 
              key={sucursal.id}
              titleCard={sucursal.title}
              address={sucursal.address}
              schedule={sucursal.schedule}
              coordinates={sucursal.coordinates}
            />
          ))
        }
      </ScrollView>
    </>
  )
}

export default LocationScreen;