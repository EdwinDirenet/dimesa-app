import React from 'react';
import {Actionsheet, Box, Button, Spinner, Stack, Text, useDisclose, View, VStack} from 'native-base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCurrency} from '../hooks/useCurrency';
import CardCurrency from '../components/CardCurrency';
import {Image} from 'react-native';
import Convertidor from '../components/Convertidor';

const HomeScreen = () => {

  const { currency, isLoading } = useCurrency();
  const { top } = useSafeAreaInsets();
  const { isOpen, onClose, onOpen } = useDisclose();

  return (
    <>
      <View bgColor='white' paddingTop={ top } marginBottom={ 5 }>
        <Image 
          source={ require('../../assets/divisas-dimesa-logo.png') } 
          resizeMode='contain'
          style={{ width: 200, height: 70, marginVertical: 5 }}
        />
      </View>
      <View flex={ 1 } paddingX={ 3 }>
        <VStack
          space={ 2 }
          flex={1}
        >
          {
            (!isLoading)
              ? (
                <>
                  <CardCurrency typeChange='USD' sell={ currency!.precio_venta_dolar } buy={ currency!.precio_compra_dolar } />
                  <CardCurrency typeChange='EUR' sell={ currency!.precio_venta_euro } buy={ currency!.precio_compra_euro } />
                  <CardCurrency typeChange='GBP' sell={ currency!.precio_venta_gbp } buy={ currency!.precio_compra_gbp } />
                  <CardCurrency typeChange='CAD' sell={ currency!.precio_venta_cad } buy={ currency!.precio_compra_cad } />
                  <CardCurrency typeChange='CHF' sell={ currency!.precio_venta_chf } buy={ currency!.precio_compra_chf } />
                  <CardCurrency typeChange='AUD' sell={ currency!.precio_venta_aud } buy={ currency!.precio_compra_aud } />
                </>
              )
              : <Spinner />
          }
        </VStack>
        <Stack py={5}>
          <Button 
            bgColor='secondary.900' padding={ 4 }
            onPress={ onOpen }
          >
            <Text fontSize='lg' fontWeight='bold'>Haz tu conversión aquí</Text>
          </Button>
        </Stack>
        <Actionsheet isOpen={ isOpen } onClose={ onClose }>
          <Actionsheet.Content bgColor='primary.900'>
            <Box w='100%' p={ 3 }>
              <Convertidor />
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </>
  );
};

export default HomeScreen;

