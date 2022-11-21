import React from 'react';
import {Button, Heading, Text, View} from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import { Linking, Platform } from 'react-native';

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

  const scheme = Platform.select({
    ios: 'maps:0,0?q=',
    android: 'geo:0,0?q='
  });
  const coords = `${coordinates.latitude},${coordinates.longitude}`;
  const label = 'Divisas Dimesa';
  const url = Platform.select({
    ios: `${scheme}${label}@${coords}`,
    android: `${scheme}${coords}(${label})`
  });

  const handleOpenMapsApp = () => {
    Linking.openURL(url!);
  }

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
              height: 200
            }}
            region={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0080,
              longitudeDelta: 0.0080,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          >
            <Marker
              coordinate={coordinates}
            />
          </MapView>
          <Button
            bgColor='secondary.900'
            onPress={handleOpenMapsApp}
            mt={3}
          >
            <Text>
              Abrir en {Platform.OS === 'ios' ? 'Apple Maps' : 'Google Maps'}
            </Text>
          </Button>
        </View>
  )
}

export default MapCard