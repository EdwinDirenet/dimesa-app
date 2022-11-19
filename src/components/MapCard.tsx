import React from 'react';
import {Heading, Text, View} from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

interface Props {
    titleCard: string;
    address: string;
    schedule: string[];
    coordinates: {
        latitude: number;
        longitude: number
    }
}

const MapCard = ({
    titleCard,
    address,
    schedule,
    coordinates
}: Props) => {
  return (
        <View
          paddingY={5}
          paddingX={5}
          mx={3}
          my={2}
          borderRadius={5}
          backgroundColor='rgba(0, 0, 0, 0.5)'
        >
          <View mb={3}>
            <Heading size='md' color="white">{titleCard}</Heading>
            <Text fontSize={15}>{address}</Text>
            <Heading size='sm' color="secondary.900" mt={2}>Horarios</Heading>
            {
                (schedule) && (
                    schedule.map((s, i) => (
                        <Text key={i}>{s}</Text>
                    ))
                )
            }
          </View>
          <MapView
            style={{
              height: 250
            }}
            region={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          >
            <Marker
              coordinate={coordinates}
            />
          </MapView>
        </View>
  )
}

export default MapCard